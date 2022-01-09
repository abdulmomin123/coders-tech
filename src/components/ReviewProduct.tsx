import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ReviewProductType } from '../Types';

const Root = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1.5rem;
`;

const ImageContainer = styled.a`
  border: 1px solid #ddd;
  border-radius: 1rem;
  overflow: hidden;
`;

const Name = styled.h2`
  font-size: 2.5rem;
  line-height: 1.2;
  color: #535353;
`;

interface Props {
  product: ReviewProductType;
}

const ReviewProduct: FC<Props> = ({
  product: { id, name, category, image },
}) => {
  return (
    <Root>
      <Link href={`/${category}/${id}`} passHref>
        <ImageContainer>
          {/* Image */}
          <Image src={image} alt={name} width={100} height={100} />
        </ImageContainer>
      </Link>

      {/* Name */}
      <Name>{name}</Name>
    </Root>
  );
};

export default ReviewProduct;
