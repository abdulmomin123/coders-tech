import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';

const Root = styled.div<{ width: string; height: string; background: string }>`
  position: relative;
  padding: 3rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
`;

const Texts = styled.div`
  letter-spacing: 1px;
  width: 75%;
  color: #232323;
  position: relative;
  z-index: 1;
`;

const textTransform = css`
  text-transform: uppercase;
`;

const Title = styled.h2`
  ${textTransform}
  letter-spacing: 2px;
  margin-bottom: 0.5rem;

  & > :last-child {
    color: #222;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: #88888a;
`;

const ViewNow = styled.a`
  font-size: 1.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  ${textTransform}
  padding-bottom: 1rem;
  color: #222;
  border-bottom: 1px solid currentColor;
`;

const ImageContainer = styled.div<{ width: number; height: number }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${({ width }) => `${width / 10}rem`};
  height: ${({ height }) => `${height / 10}rem`};
`;

interface Props {
  title: string;
  description: string;
  href: string;
  img: string;
  width: string;
  height: string;
  imgWidth: number;
  imgHeight: number;
  background: string;
}

const FeaturedProdPreview: FC<Props> = ({
  title,
  description,
  href,
  img,
  width,
  height,
  imgWidth,
  imgHeight,
  background,
}) => {
  return (
    <Root width={width} height={height} background={background}>
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
        <Link href={href} passHref>
          <ViewNow>View Now</ViewNow>
        </Link>
      </Texts>

      {/* Product image */}
      <ImageContainer width={imgWidth} height={imgHeight}>
        <Image
          src={img}
          width={imgWidth}
          height={imgHeight}
          layout="responsive"
        />
      </ImageContainer>
    </Root>
  );
};

export default FeaturedProdPreview;
