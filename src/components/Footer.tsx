import Link from 'next/link';
import styled from 'styled-components';

const Root = styled.footer`
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 1.8rem;
  padding: 2rem;
  margin-top: 3rem;
  background: var(--bg-primary);

  p,
  a {
    font-size: 1.8rem;
    color: #333;
  }

  a {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid currentColor;
  }
`;

const Footer = () => {
  return (
    <Root>
      <Link href="/contact">
        <a>Contact us</a>
      </Link>

      <p>&copy; {`${new Date().getFullYear()}.`} All rights reserved.</p>

      <p>Built by Abdul Momin</p>
    </Root>
  );
};

export default Footer;
