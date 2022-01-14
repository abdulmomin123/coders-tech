import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';
import { featuredProdTitleStyles } from '../styles/globalStyles';
import ViewNowBtn from './ViewNowBtn';

const Root = styled.div`
  position: relative;
  height: 30rem;
  display: flex;
  align-items: center;
  margin-top: 13rem;
  background: #f4f5f7;

  @media only screen and (max-width: 37.5em) {
    padding: 2rem;
  }

  @media only screen and (max-width: 34.0625em) {
    height: auto;
    display: grid;
    gap: 1rem;
    padding: 3rem;
  }
`;

const LeftSide = styled.div`
  margin-left: 10%;

  @media only screen and (max-width: 41.875em) {
    margin-left: 5%;
  }

  @media only screen and (max-width: 34.0625em) {
    margin-left: 0;
  }
`;

const Title = styled.h2`
  font-size: 3.4rem;
  ${featuredProdTitleStyles}
  margin-bottom: 3rem;

  & > :first-child {
    color: #222;
  }
`;

const ImageContainer = styled.div<{ width: number; height: number }>`
  position: absolute;
  bottom: 1rem;
  right: 10%;
  width: ${({ width }) => `${width / 10}rem`};
  height: ${({ height }) => `${height / 10}rem`};

  @media only screen and (max-width: 41.875em) {
    right: 5%;
  }

  @media only screen and (max-width: 37.5em) {
    width: ${({ width }) => `${width / 10 - 3}rem`};
    height: ${({ height }) => `${height / 10 - 3}rem`};
  }

  @media only screen and (max-width: 34.0625em) {
    position: initial;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

interface Props {
  title: string;
  href: string;
  img: string;
  alt: string;
  width: number;
  height: number;
}

const FeaturedProdBanner: FC<Props> = ({
  title,
  href,
  img,
  alt,
  width,
  height,
}) => {
  return (
    <Root>
      {/* Title and view now button */}
      <LeftSide>
        {/* Title */}
        <Title>
          {title
            .split(' ')
            .map((el, i) =>
              i === 0 ? (
                <strong key={i}>{el} </strong>
              ) : (
                <React.Fragment key={i}>{`${el} `}</React.Fragment>
              )
            )}
        </Title>

        {/* View now button */}
        <ViewNowBtn href={href} />
      </LeftSide>

      {/* Product image */}
      <ImageContainer width={width} height={height}>
        <Image
          src={img}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
        />
      </ImageContainer>
    </Root>
  );
};

export default FeaturedProdBanner;
