import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { gridCenter } from '../styles/utils';
import { capitalize } from '../helpers';
import { CartContext, CartItemsContext } from '../contexts/Cart';
import { auth } from '../lib/firebase/firebase';
import { signOut } from 'firebase/auth';
import { UserContext } from '../contexts/User';
import { CATEGORIES } from '../constants';
import { index } from '../lib/algolia/algolia';
import Overlay from './Overlay';
import { SearchResultType } from '../Types';
import SearchResult from './SearchResult';

const topZero = css`
  top: 0;
`;

const Root = styled.nav`
  position: sticky;
  ${topZero}
  padding: 2rem;
  background: var(--bg-primary);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.09);
  z-index: 2;
`;

const gridAFColumn = css`
  grid-auto-flow: column;
`;

const CenteredContainer = styled.div`
  display: grid;
  ${gridAFColumn}
  align-items: center;
  justify-content: space-between;
  max-width: 160rem;
  margin: 0 auto;
`;

const fontWeight = css`
  font-weight: 500;
`;

const Logo = styled.a`
  font-size: 3.5rem;
  ${fontWeight}
  color:#222;

  span {
    color: var(--accent-color);
  }
`;

const positionRelative = css`
  position: relative;
`;

const Search = styled.form`
  ${positionRelative}
  width: 22vw;

  &:focus-within {
    & > :last-child {
      visibility: initial;
      opacity: 1;
    }
  }
`;

const fontSizeSmall = css`
  font-size: 1.6rem;
`;

const darkColor = css`
  color: #333;
`;

const SearchInput = styled.input`
  ${fontSizeSmall}
  letter-spacing: 0.5px;
  width: 100%;
  ${darkColor}
  background: rgba(0, 0, 0, 0.07);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 4px solid rgba(0, 0, 0, 0);
  transition: border 0.3s, background 0.3s;

  &:focus {
    background: initial;
    border: 4px solid #c0e0f3;
  }
`;

const ResultsContainer = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  padding: 5px;
  background: #fff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
`;

const EmptyResultsText = styled.p`
  font-size: 1.7rem;
  text-align: center;
  padding: 2rem 0;
  color: #222;
`;

const positionAbs = css`
  position: absolute;
`;

const rightZero = css`
  right: 0;
`;

const fillAccent = css`
  fill: var(--accent-color);
`;

const SearchIcon = styled.svg`
  ${positionAbs}
  top: 50%;
  ${rightZero}
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  ${fillAccent}
  transform: translateY(-50%);
`;

const Links = styled.div`
  display: flex;
`;

const colorTransition = css`
  transition: color 0.2s;
`;

const linkTypography = css`
  font-size: 1.8rem;
  padding: 0.9rem 2rem;
  color: #222;
  ${colorTransition}

  &:hover {
    color: #444444;
  }
`;

const NavLink = styled.a`
  ${linkTypography}
  ${fontWeight}
`;

const DropdownContainer = styled.div`
  ${positionRelative}

  &:hover > :last-child {
    visibility: initial;
    opacity: 1;
  }
`;

const cursorPointer = css`
  cursor: pointer;
`;

const CategoryText = styled.p`
  ${linkTypography}
  ${fontWeight}
  ${cursorPointer}
`;

const CategoryDropdown = styled.ul`
  ${positionAbs}
  top: 100%;
  left: 50%;
  width: 25rem;
  padding: 1.5rem 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  z-index: 1;
`;

const DropdownLink = styled.a`
  ${linkTypography}
  width: 100%;
  padding: 1rem 1.5rem;
  transition: background 0.2s;

  &:hover {
    color: currentColor;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const UserActions = styled.div`
  ${gridCenter}
  ${gridAFColumn}
  gap: 4rem;
`;

const CartButton = styled.button`
  ${positionRelative}
  padding: 0 1rem;
`;

const width3Rem = css`
  width: 3rem;
`;

const height3Rem = css`
  height: 3rem;
`;

const CartIcon = styled.svg`
  ${width3Rem}
  ${height3Rem}
`;

const ItemCount = styled.span<{ totalItems: number }>`
  ${fontSizeSmall}
  ${fontWeight}
  line-height: 1;
  ${positionAbs}
  ${topZero}
  ${rightZero}
  width: ${({ totalItems }) => (totalItems > 99 ? '3rem' : '2.3rem')};
  height: ${({ totalItems }) => (totalItems > 99 ? '3rem' : '2.3rem')};
  ${gridCenter};
  color: #fff;
  background: red;
  border-radius: 50%;
  transform: translate(50%, -50%);
`;

const MyAccount = styled.div`
  ${positionRelative}

  &:hover > :last-child {
      opacity: 1;
      visibility: initial;
    }
  }
`;

const AccountActionsDropdown = styled.div`
  text-align: center;
  ${positionAbs}
  top: 100%;
  right: 0;
  width: 25rem;
  padding-top: 2rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s;
`;

const UserImage = styled.span<{ width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-bottom: ${({ width }) => (width ? '0' : '1rem')};
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const UserName = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const buttonStyles = css`
  font-size: 1.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 1.5rem;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  fill: #555;
`;

const UserActionLink = styled.a`
  ${buttonStyles}
`;

const LogoutBtn = styled.button`
  ${buttonStyles}
`;

const SignInLink = styled.a`
  font-size: 1.7rem;
  ${fontWeight}
  color: #222;
  ${colorTransition}

  &:hover {
    color: #444444;
  }
`;

const Navbar = () => {
  const userData = useContext(UserContext);
  const cartItems = useContext(CartItemsContext);
  const { setIsCartOpen } = useContext(CartContext);

  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!query) return setHits([]);

      try {
        setIsLoading(true);

        const hits = (await index.search(query)).hits as SearchResultType[];

        setHits(hits);

        console.log(hits);

        setIsLoading(false);
      } catch (_) {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <Root>
      <CenteredContainer>
        {/* Logo */}
        <Link href="/" passHref>
          <Logo title="Home">
            Shopnik<span>.</span>
          </Logo>
        </Link>

        {/* Search input */}
        <Search autoComplete="off">
          {/* Hidden input */}
          <input type="text" autoComplete="false" style={{ display: 'none' }} />

          {/* Input field */}
          <SearchInput
            type="text"
            maxLength={30}
            placeholder="Search products"
            name="search"
            onChange={({ target: { value } }) => setQuery(value)}
          />

          {/* Magnifying icon */}
          <SearchIcon>
            <use href="/magnifying-glass.svg#main" />
          </SearchIcon>

          {/* Results container  */}
          <ResultsContainer>
            {hits.length ? (
              hits.map(hit => <SearchResult result={hit} key={hit.objectID} />)
            ) : query && !hits.length ? (
              <EmptyResultsText>No results found</EmptyResultsText>
            ) : (
              <EmptyResultsText>Search for a product</EmptyResultsText>
            )}

            {/* Overlay */}
            <Overlay isLoading={isLoading} />
          </ResultsContainer>
        </Search>

        {/* Links */}
        <Links>
          {/* Home */}
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>

          {/* Shop */}
          <Link href="/shop" passHref>
            <NavLink>Shop</NavLink>
          </Link>

          {/* Categories */}
          <DropdownContainer>
            {/* Text */}
            <CategoryText>Categories</CategoryText>

            {/* Dropdown */}
            <CategoryDropdown>
              {/* Links */}
              {CATEGORIES.map(category => (
                <li key={category}>
                  <Link href={`/${category.replaceAll(' ', '-')}`} passHref>
                    <DropdownLink>{capitalize(category)}</DropdownLink>
                  </Link>
                </li>
              ))}
            </CategoryDropdown>
          </DropdownContainer>
        </Links>

        {/* User auth actions */}
        <UserActions>
          {/* Cart button */}
          <CartButton onClick={() => setIsCartOpen(true)}>
            <CartIcon>
              <use href="/cart.svg#icon" />
            </CartIcon>

            {/* Item count */}
            {cartItems.length ? (
              <ItemCount totalItems={cartItems.length}>
                {cartItems.length}
              </ItemCount>
            ) : null}
          </CartButton>

          {/* Sign in */}
          {userData ? (
            // My account
            <MyAccount>
              <UserImage width="3.5rem" height="3.5rem">
                <Image
                  src={userData.image}
                  alt={`image of ${userData.name}`}
                  width={45}
                  height={45}
                  layout="responsive"
                />
              </UserImage>

              <AccountActionsDropdown>
                {/* User image */}
                <UserImage>
                  <Image
                    src={userData.image}
                    alt={`image of ${userData.name}`}
                    width={55}
                    height={55}
                  />
                </UserImage>

                {/* User name */}
                <UserName>{userData.name}</UserName>

                {/* My account link */}
                <Link href="/account" passHref>
                  <UserActionLink>
                    {/* icon */}
                    <Icon>
                      <use href="/account.svg#icon" />
                    </Icon>
                    My account
                  </UserActionLink>
                </Link>

                {/* Logout button */}
                <LogoutBtn onClick={() => signOut(auth)}>
                  {/* icon */}
                  <Icon>
                    <use href="/logout.svg#icon" />
                  </Icon>
                  Logout
                </LogoutBtn>
              </AccountActionsDropdown>
            </MyAccount>
          ) : (
            <Link href="/login" passHref>
              <SignInLink>Log In</SignInLink>
            </Link>
          )}
        </UserActions>
      </CenteredContainer>
    </Root>
  );
};

export default Navbar;
