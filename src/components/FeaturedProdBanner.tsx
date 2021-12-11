import Image from 'next/image';
import React, { FC } from 'react';
import styled from 'styled-components';
import { featuredProdTitleStyles } from '../styles/globalStyles';
import ViewNowBtn from './ViewNowBtn';

const Root = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  margin-top: 20rem;
  background: #f4f5f7;
`;

const LeftSide = styled.div`
  margin-left: 10%;
`;

const Title = styled.h2`
  font-size: 3.4rem;
  ${featuredProdTitleStyles}
  margin-bottom: 3rem;

  & > :first-child {
    color: #222;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
`;

interface Props {
  title: string;
  href: string;
  img: string;
  width: number;
  height: number;
}

const FeaturedProdBanner: FC<Props> = ({ title, href, img, width, height }) => {
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
      <ImageContainer>
        <Image src={img} alt={title} width={width} height={height} />
      </ImageContainer>
    </Root>
  );
};

export default FeaturedProdBanner;
