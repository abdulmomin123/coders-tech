import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { flexCenter } from '../styles/utils';
import { PRODUCT_CATEGORIES } from '../constants';
import { capitalize } from '../helpers';

const Root = styled.nav`
  padding: 2rem;
  background: var(--bg-primary);
`;

const CenteredContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  max-width: 160rem;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-size: 3.5rem;
  font-weight: 500;

  span {
    color: var(--accent-color);
  }
`;

const Search = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  color: #333;
  background: rgba(0, 0, 0, 0.07);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 4px solid rgba(0, 0, 0, 0);
  transition: border 0.3s, background 0.3s;

  &:focus {
    background: initial;
  }

  &:focus {
    border: 4px solid #c0e0f3;
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 0;
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  fill: var(--accent-color);
  transform: translateY(-50%);
`;

const Links = styled.div`
  display: flex;
`;

const linkTypography = css`
  font-size: 1.8rem;
  padding: 0.9rem 2rem;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

const NavLink = styled.a`
  ${linkTypography}
`;

const DropdownContainer = styled.div`
  position: relative;

  &:hover > :last-child {
    visibility: initial;
    opacity: 1;
  }
`;

const CategoryText = styled.p`
  ${linkTypography}
  cursor: pointer;
`;

const CategoryDropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 35%;
  padding: 1.5rem 0;
  background: rgba(192, 224, 243, 0.6);
  border-radius: 1rem;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  z-index: 1;
`;

const DropdownLink = styled.a`
  ${linkTypography}
  width: 100%;
  padding: 1rem 8rem 1rem 1.5rem;
  transition: background 0.2s;

  &:hover {
    color: currentColor;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const AuthArea = styled.div`
  ${flexCenter}
  display: none;
`;

const authLinkOrBtn = css`
  ${linkTypography}
  border-radius: 6px;
  transition: opacity 0.3s;
  transition: background 0.2s;
`;

const LoginLink = styled.a`
  ${authLinkOrBtn}
  background: rgba(0, 0, 0, 0.08);

  &:hover {
    background: rgba(0, 0, 0, 0.13);
  }
`;

const LogoutBtn = styled.button`
  ${authLinkOrBtn}
  color: rgba(255, 0, 0, 0.8);
  background: rgba(255, 0, 0, 0.1);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 0, 0, 0.15);
  }
`;

const MyAccountLink = styled.a`
  /*  */
`;

const MyAccountIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: rgba(0, 0, 0, 0.2);
  transition: fill 0.3s;

  &:hover {
    fill: var(--accent-color);
  }
`;

const Navbar = () => {
  return (
    <Root>
      <CenteredContainer>
        {/* Logo */}
        <Link href="/" passHref>
          <Logo title="Home">
            Cotech<span>.</span>
          </Logo>
        </Link>

        {/* Search input */}
        <Search>
          {/* Input field */}
          <SearchInput
            type="text"
            maxLength={20}
            placeholder="Search products"
            name="search"
          />

          {/* Magnifying icon */}
          <SearchIcon>
            <use href="/magnifying-glass.svg#main" />
          </SearchIcon>
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
              {PRODUCT_CATEGORIES.map(category => (
                <li key={category}>
                  <Link href={`/${category}`} passHref>
                    <DropdownLink>{capitalize(category)}</DropdownLink>
                  </Link>
                </li>
              ))}
            </CategoryDropdown>
          </DropdownContainer>
        </Links>

        {/* User auth actions */}
        <AuthArea>
          {/* Login */}
          <Link href="/login" passHref>
            <LoginLink>Login</LoginLink>
          </Link>

          {/* My account */}
          <Link href="/account" passHref>
            <MyAccountLink title="My Account">
              <MyAccountIcon>
                <use href="/account.svg#main" />
              </MyAccountIcon>
            </MyAccountLink>
          </Link>

          {/* Logout btn */}
          <LogoutBtn>Logout</LogoutBtn>
        </AuthArea>
      </CenteredContainer>
    </Root>
  );
};

export default Navbar;
