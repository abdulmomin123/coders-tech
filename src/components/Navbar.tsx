import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { flexCenter } from '../styles/utils';

const Root = styled.nav`
  padding: 2rem;
  background: #f6f6f6;
`;

const CenteredContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  max-width: 140rem;
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

  &:hover,
  &:focus {
    background: initial;
  }

  &:hover,
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
  /*  */
`;

const linkTypography = css`
  font-size: 1.8rem;
  padding: 0.9rem 2rem;
`;

const NavLink = styled.a`
  ${linkTypography}
`;

const AuthArea = styled.div`
  ${flexCenter}
`;

const LoginLink = styled.a`
  ${linkTypography}
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
          <Link href="/categories" passHref>
            <NavLink>Categories</NavLink>
          </Link>

          {/* Blog */}
          <Link href="/blog" passHref>
            <NavLink>Blog</NavLink>
          </Link>
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
        </AuthArea>
      </CenteredContainer>
    </Root>
  );
};

export default Navbar;
