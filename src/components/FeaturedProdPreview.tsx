import React, { FC } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import ViewNowBtn from './ViewNowBtn';
import { featuredProdTitleStyles } from '../styles/globalStyles';

const posRelative = css`
  position: relative;
`;

const Root = styled.div`
  ${posRelative}
  padding: 4rem;
  background: #f4f5f7;

  @media only screen and (max-width: 46.875em) {
    padding: 3rem;
  }

  @media only screen and (max-width: 41.875em) {
    padding: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 3rem;
  }
`;

const Texts = styled.div`
  letter-spacing: 1px;
  width: 75%;
  color: #232323;
  ${posRelative}
  z-index: 1;
`;

const Title = styled.h2`
  ${featuredProdTitleStyles}

  & > :last-child {
    color: #222;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: #575757;
`;

const ImageContainer = styled.div<{ width: number; height: number }>`
  position: absolute;
  bottom: 0;
  right: 2rem;
  width: ${({ width }) => `${width / 10}rem`};
  height: ${({ height }) => `${height / 10}rem`};
`;

interface Props {
  title: string;
  description: string;
  href: string;
  img: string;
  alt: string;
  width: number;
  height: number;
}

const FeaturedProdPreview: FC<Props> = ({
  title,
  description,
  href,
  img,
  alt,
  width,
  height,
}) => {
  return (
    <Root>
      {/* Title */}
      <Texts>
        <Title>
          {title
            .split(' ')
            .map((el, i, arr) =>
              i === arr.length - 1 ? (
                <strong key={i}>{el}</strong>
              ) : (
                <React.Fragment key={i}>{`${el} `}</React.Fragment>
              )
            )}
        </Title>

        {/* Description */}
        <Description>{description}</Description>

        {/* View now btn */}
        <ViewNowBtn href={href} />
      </Texts>

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

export default FeaturedProdPreview;
