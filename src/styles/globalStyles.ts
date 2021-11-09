import { createGlobalStyle, css } from 'styled-components';
import { cssVariables } from './cssVariables';

const inputStyles = css`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  color: inherit;
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
    font-weight: 300;
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
    display: inline-block;
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
    font-size: 1.6rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  h2 {
    font-size: 3rem;
    font-weight: 500;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 500;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
  }
`}
`;
