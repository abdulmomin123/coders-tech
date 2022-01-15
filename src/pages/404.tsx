import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { gridCenter } from '../styles/utils';

const Root = styled.div`
  text-align: center;
  min-height: 85vh;
  ${gridCenter}
  align-items: start;
`;

const Title = styled.h1`
  line-height: 1.3;
  color: #5a5a5a;
  margin-top: 2rem;

  @media only screen and (max-width: 26.375em) {
    margin-top: 0;
  }
`;

const ImageContainer = styled.div`
  width: 40rem;
  height: 46.4rem;

  @media only screen and (max-width: 23.125em) {
    width: 30rem;
    height: 34.8rem;
  }
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
      <Head>
        <title>Shopnik | 404</title>
      </Head>

      {/* Title */}
      <Title>This Page Does Not Exist.</Title>

      {/* Image */}
      <ImageContainer>
        <Image
          src="/404.png"
          alt="A monkey holding a phone"
          width={400}
          height={464}
          layout="responsive"
        />
      </ImageContainer>

      {/* Home link */}
      <Link href="/" passHref>
        <HomeLink>Go to Home</HomeLink>
      </Link>
    </Root>
  );
};

export default FourOFour;
