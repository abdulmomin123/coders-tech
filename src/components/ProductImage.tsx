import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  width: 33rem;
  height: 33rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  cursor: zoom-in;

  &:hover {
    div {
      position: absolute;
      top: -10%;
      left: -10%;
      width: 750px;
      height: 750px;
    }
  }
`;

interface Props {
  img: string;
  alt: string;
}

const ProductImage: FC<Props> = ({ img, alt }) => {
  return (
    <Root>
      <Image src={img} alt={alt} width={750} height={750} layout="responsive" />
    </Root>
  );
};

export default ProductImage;
