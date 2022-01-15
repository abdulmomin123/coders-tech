import Image from 'next/image';
import React, { useContext } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { gridCenter } from '../styles/utils';
import { capitalize } from '../helpers';
import { CartContext, CartItemsContext } from '../contexts/Cart';
import { auth } from '../lib/firebase/firebase';
import { signOut } from 'firebase/auth';
import { UserContext } from '../contexts/User';
import { CATEGORIES } from '../constants';
import Search from './Search';

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

  @media only screen and (max-width: 40.9375em) {
    padding: 2rem 1.4rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 1.4rem;
  }
`;

const gridAFColumn = css`
  grid-auto-flow: column;
`;

const alignItems = css`
  align-items: center;
`;

const CenteredContainer = styled.div`
  display: grid;
  ${gridAFColumn}
  ${alignItems}
  justify-content: space-between;
  row-gap: 1rem;
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

  @media only screen and (max-width: 26.25em) {
    grid-column: 1 / 4;
    justify-self: center;
  }
`;

const positionRelative = css`
  position: relative;
`;

const fontSizeSmall = css`
  font-size: 1.6rem;
`;

const positionAbs = css`
  position: absolute;
`;

const rightZero = css`
  right: 0;
`;

const displayFlex = css`
  display: flex;
`;

const Links = styled.div`
  ${displayFlex}

  @media only screen and (max-width: 37.5em) {
    grid-row: 1 / 2;
  }

  @media only screen and (max-width: 26.25em) {
    grid-row: 2 / 3;
  }
`;

const colorTransition = css`
  transition: color 0.2s;
`;

const fontSize = css`
  font-size: 1.8rem;
`;

const darkColor = css`
  color: #222;
`;

const greyColor = css`
  color: #444;
`;

const linkTypography = css`
  ${fontSize}
  padding: 0.9rem 2rem;
  ${darkColor}
  ${colorTransition}

  &:hover {
    ${greyColor}
  }

  @media only screen and (max-width: 42.8125em) {
    padding: 0.9rem 1rem;
  }

  @media only screen and (max-width: 40.9375em) {
    padding: 0.9rem 0.7rem;
  }
`;

const NavLink = styled.a`
  ${linkTypography}
  ${fontWeight}
`;

const visibilityInitial = css`
  visibility: initial;
`;

const fullOpacity = css`
  opacity: 1;
`;

const DropdownContainer = styled.div`
  ${positionRelative}

  &:hover > :last-child {
    ${visibilityInitial}
    ${fullOpacity}
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

const top = css`
  top: 100%;
`;

const width25 = css`
  width: 25rem;
`;

const bgWhite = css`
  background: #fff;
`;

const borderRadius = css`
  border-radius: 5px;
`;

const zeroOpacity = css`
  opacity: 0;
`;

const visibilityHidden = css`
  visibility: hidden;
`;

const CategoryDropdown = styled.ul`
  ${positionAbs}
  ${top}
  left: 50%;
  ${width25}
  padding: 1.5rem 0;
  ${bgWhite}
  ${borderRadius}
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  transform: translateX(-50%);
  ${zeroOpacity}
  ${visibilityHidden}
  transition: opacity 0.3s;
  z-index: 1;
`;

const fullWidth = css`
  width: 100%;
`;

const transition = css`
  transition: background 0.2s;
`;

const bgDarkTransparent = css`
  background: rgba(0, 0, 0, 0.1);
`;

const DropdownLink = styled.a`
  ${linkTypography}
  ${fullWidth}
  padding: 1rem 2rem !important;
  ${transition}

  &:hover {
    color: currentColor;
    ${bgDarkTransparent}
  }
`;

const UserActions = styled.div`
  ${gridCenter}
  ${gridAFColumn}
  gap: 4rem;

  @media only screen and (max-width: 42.8125em) {
    gap: 2.5rem;
  }

  @media only screen and (max-width: 40.9375em) {
    gap: 0.8rem;
  }

  @media only screen and (max-width: 26.25em) {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }
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

const borderRadius50Per = css`
  border-radius: 50%;
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
  ${borderRadius50Per}
  transform: translate(50%, -50%);
`;

const MyAccount = styled.div`
  ${positionRelative}

  &:hover > :last-child {
    ${fullOpacity}
    ${visibilityInitial}
  }
`;

const AccountActionsDropdown = styled.div`
  text-align: center;
  ${positionAbs}
  ${top}
  ${rightZero}
  ${width25}
  padding-top: 2rem;
  ${bgWhite}
  ${borderRadius}
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  ${zeroOpacity}
  ${visibilityHidden}
  transition: opacity 0.5s;
`;

const UserImage = styled.span<{ width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-bottom: ${({ width }) => (width ? '0' : '1rem')};
  border: 2px solid rgba(0, 0, 0, 0.1);
  ${borderRadius50Per}
  ${cursorPointer}
  overflow: hidden;
`;

const UserName = styled.p`
  ${fontSize}
  ${fontWeight}
  margin-bottom: 2.5rem;
`;

const buttonStyles = css`
  ${fontSize}
  ${fullWidth}
  ${displayFlex}
  ${alignItems}
  padding: 1rem 0 1rem 1.5rem;
  ${transition}

  &:hover {
    ${bgDarkTransparent}
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
  ${darkColor}
  ${colorTransition}

  &:hover {
    ${greyColor}
  }
`;

const Navbar = () => {
  const userData = useContext(UserContext);
  const cartItems = useContext(CartItemsContext);
  const { setIsCartOpen } = useContext(CartContext);

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
        <Search />

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
                  <Link href={`/${category.replace(/ /g, '-')}`} passHref>
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
