import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ViewNowBtn from './ViewNowBtn';
import { featuredProdTitleStyles } from '../styles/globalStyles';

const Root = styled.div`
  position: relative;
  padding: 3.5rem;
  background: #f4f5f7;
`;

const Texts = styled.div`
  letter-spacing: 1px;
  width: 75%;
  color: #232323;
  position: relative;
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
  color: #88888a;
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
  width: number;
  height: number;
}

const FeaturedProdPreview: FC<Props> = ({
  title,
  description,
  href,
  img,
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
        <Image src={img} width={width} height={height} layout="responsive" />
      </ImageContainer>
    </Root>
  );
};

export default FeaturedProdPreview;
