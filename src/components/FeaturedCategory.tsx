import { FC, useState } from 'react';
import styled from 'styled-components';
import { mockProducts } from '../seedData';
import ProductPreview from './ProductPreview';
import ViewNowBtn from './ViewNowBtn';

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.2fr;
  gap: 3rem;
  padding: 6rem 0;

  &:not(:last-of-type) {
    border-bottom: 2px solid #ebebeb;
  }
`;

const LeftSide = styled.div``;

const Name = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #202600;
`;

const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 4rem;
  color: #828282;
`;

const ProductGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
`;

const PaginationButton = styled.button<{ isLeft?: boolean }>`
  position: absolute;
  top: 17.5rem;
  ${({ isLeft }) => (isLeft ? 'left: 0;' : 'right: 0;')}
  padding: 2.5rem .8rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  transform: translateY(-50%);
  transition: background 0.2s;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ChevronIcon = styled.svg<{ isLeft?: boolean }>`
  width: 2rem;
  height: 2rem;
  fill: #fff;
  ${({ isLeft }) => isLeft && 'transform: rotate(180deg);'};
`;

interface Props {
  name: string;
  description: string;
}

const FeaturedCategory: FC<Props> = ({ name, description }) => {
  // State
  const [currentPage, setCurrentPage] = useState(1);

  const maxNumOfPages = Math.ceil(mockProducts['furniture'].length / 3);

  return (
    <Root>
      {/* Left side */}
      <LeftSide>
        {/* Name */}
        <Name>{name}</Name>

        {/* Description */}
        <Description>{description}</Description>

        {/* View now button */}
        <ViewNowBtn href={`/${name.toLowerCase()}`}>Shop Now</ViewNowBtn>
      </LeftSide>

      {/* Products grid */}
      <ProductGrid>
        {/* Left button */}
        {currentPage > 1 && (
          <PaginationButton
            isLeft={true}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ChevronIcon isLeft={true}>
              <use href="chevron-right.svg#icon" />
            </ChevronIcon>
          </PaginationButton>
        )}

        {/* Product previews */}
        {mockProducts['furniture']
          .slice((currentPage - 1) * 3, currentPage * 3)
          .map(
            ({
              id,
              name,
              category,
              image,
              price,
              oldPrice,
              thumbnail,
              createdAt,
            }) => (
              <ProductPreview
                key={id}
                id={id}
                name={name}
                category={category}
                image={image}
                price={price}
                oldPrice={oldPrice}
                thumbnail={thumbnail}
                createdAt={createdAt}
              />
            )
          )}

        {/* Right button */}
        {currentPage < maxNumOfPages && (
          <PaginationButton onClick={() => setCurrentPage(currentPage + 1)}>
            <ChevronIcon>
              <use href="chevron-right.svg#icon" />
            </ChevronIcon>
          </PaginationButton>
        )}
      </ProductGrid>
    </Root>
  );
};

export default FeaturedCategory;
