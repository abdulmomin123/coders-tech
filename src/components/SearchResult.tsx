import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { SearchResultType } from '../Types';
import { formatPrice } from '../helpers';

const Root = styled.a`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.07);
  }
`;

const ImageContainer = styled.div``;

const Info = styled.div``;

const Name = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #444;
`;

const PriceContainer = styled.div`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1rem;
`;

const Price = styled.span`
  color: #333;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #b3b2b2;
`;

interface Props {
  result: SearchResultType;
}

const SearchResult: FC<Props> = ({
  result: { objectID, category, name, price, oldPrice, image },
}) => {
  return (
    <Link href={`/${category}/${objectID}`} passHref>
      <Root target="__blank">
        {/* Image */}
        <ImageContainer>
          <Image src={`/products/${image}`} alt={name} width={70} height={70} />
        </ImageContainer>

        {/* Info */}
        <Info>
          {/* Name */}
          <Name>{name}</Name>

          <PriceContainer>
            {/* Price */}
            <Price>{formatPrice(price)}</Price>

            {/* Old price */}
            {oldPrice && <OldPrice>{formatPrice(oldPrice)}</OldPrice>}
          </PriceContainer>
        </Info>
      </Root>
    </Link>
  );
};

export default SearchResult;
