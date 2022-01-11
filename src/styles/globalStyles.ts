import { createGlobalStyle, css } from 'styled-components';
import { cssVariables } from './cssVariables';

const inputStyles = css`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  color: inherit;
`;

const liteFont = css`
  font-weight: 300;
`;

const boldFont = css`
  font-weight: 500;
`;

export const featuredProdTitleStyles = css`
  ${liteFont}
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;

  strong {
    ${boldFont}
  }
`;

export const authPagesStyles = css`
  min-height: 70vh;
  display: grid;
  align-items: start;
  justify-content: center;
  padding: 5rem 3rem 3rem 3rem;
`;

export const categoryAndShopPagesStyles = css`
  max-width: 120rem;
  padding: 3rem 0 8rem 0;
  margin: 0 auto;
`;

const displayIB = css`
  display: inline-block;
`;

export const categoryNameStyles = css`
  ${displayIB}
  color: #363636;
  border-bottom: 5px solid var(--accent-color);
`;

const fontSize = css`
  font-size: 1.6rem;
`;

export const authFormsStyles = css`
  ${fontSize}
  text-align: center;
  width: 400px;
  border-radius: 4px;
  padding: 2.5rem 4rem;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;

export const scrollBarStyles = css`
  ::-webkit-scrollbar {
    width: 9px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 5px;
  }
`;

// General styling of the app
export const GlobalStyles = createGlobalStyle`
${css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    ${cssVariables}
  }

  html {
    font-family: 'Rubik', sans-serif;
    font-size: 62.5%;
    ${liteFont}
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;

    /* Media queries */
    @media only screen and (min-width: 120.0625em) {
      font-size: 68.75%; // 1rem = 11px 11/16 = 68.75%
    }

    @media only screen and (max-width: 75em) {
      font-size: 56.25%; // 1rem = 9px 9/16 = 56.25%
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 50%; // 1rem = 8px 8/16 = 50%
    }

    ${scrollBarStyles}
  }

  input,
  textarea,
  select,
  button {
    ${inputStyles}

    &:focus {
      outline: none;
    }
  }

  input,
  textarea,
  select {
    &::placeholder {
      ${inputStyles}
    }
  }

  img {
    width: 100%;
  }

  li {
    list-style: none;
  }

  img,
  span,
  a {
    ${displayIB}
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  p {
    ${fontSize}
  }

  h1 {
    font-size: 4rem;
    ${boldFont}
  }

  h2 {
    font-size: 3rem;
    ${boldFont}
  }

  h3 {
    font-size: 2.5rem;
    ${boldFont}
  }

  h4 {
    font-size: 2rem;
    ${boldFont}
  }
`}
`;
