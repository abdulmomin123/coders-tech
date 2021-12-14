import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { gridCenter } from '../styles/utils';

const Root = styled.div`
  min-height: 85vh;
  ${gridCenter}
  align-items: start;
`;

const Title = styled.h1`
  color: #5a5a5a;
  margin-top: 2rem;
`;

const HomeLink = styled.a`
  font-size: 2.2rem;
  font-weight: 500;
  padding: 2rem 6rem;
  color: #fff;
  background: #2b2b2b;
  border-radius: 3rem;
  transition: background 0.2s;

  &:hover {
    background: #000;
  }
`;

const FourOFour = () => {
  return (
    <Root>
      {/* Title */}
      <Title>This Page Does Not Exist.</Title>

      {/* Image */}
      <Image
        src="/404.png"
        alt="A monkey holding a phone"
        width={400}
        height={464}
      />

      {/* Home link */}
      <Link href="/" passHref>
        <HomeLink>Go to Home</HomeLink>
      </Link>
    </Root>
  );
};

export default FourOFour;
