import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { products } from '../seedData';
import { Categories } from '../Types';
import ProductPreview from './ProductPreview';

const Root = styled.section`
  text-align: center;
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

const displayGrid = css`
  display: grid;
`;

const CategoryButtonsContainer = styled.div`
  ${displayGrid}
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 6.5rem;
  margin-bottom: 4rem;
`;

const textTransform = css`
  text-transform: uppercase;
`;

const fontWeight = css`
  font-weight: 500;
`;

const CategoryBtn = styled.button<{ isSelected: boolean }>`
  font-size: 1.7rem;
  ${fontWeight}
  ${textTransform}
  padding-bottom: 0.8rem;
  color: ${({ isSelected }) => (isSelected ? '#37499d' : 'initial')};
  border-bottom: 2px solid
    ${({ isSelected }) => (isSelected ? '#37499d' : 'transparent')};
  transition: color 0.2s, border 0.2s;

  &:hover {
    color: #37499d;
    border-bottom: 2px solid #37499d;
  }
`;

const ProductGrid = styled.div`
  ${displayGrid}
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  row-gap: 6rem;
  margin-bottom: 7rem;
`;

const PaginationButtons = styled.div`
  ${displayGrid}
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const transitionBg = css`
  transition: background 0.2s;
`;

const PaginationBtn = styled.button`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  ${transitionBg}

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

const PageNumber = styled.span`
  font-size: 2.1rem;
  ${fontWeight}
`;

const Icon = styled.svg<{ isLeft?: boolean }>`
  width: 2rem;
  height: 2rem;
  fill: #000;
  ${({ isLeft }) => isLeft && 'transform: rotate(180deg);'}
`;

const position = css`
  position: relative;
`;

const ShopButtonContainer = styled.div`
  ${position}
`;

const Line = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  height: 2px;
  width: 100%;
  background: #ebebeb;
  transform: translateY(-50%);
`;

const bgWhite = css`
  background: #fff;
`;

const InnerContainer = styled.div`
  ${position}
  display: inline-block;
  padding: 0 3rem;
  ${bgWhite}
`;

const ShopBtn = styled.a`
  font-size: 1.8rem;
  ${textTransform}
  padding: 1.3rem 3rem;
  ${bgWhite}
  border: 1px solid var(--accent-color);
  ${transitionBg}

  &:hover {
    background: var(--accent-color);
  }
`;

const ProductsCarousel = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState<Categories>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const updateCategory = (target: HTMLButtonElement) =>
    setSelectedCategory(target.textContent!.toLowerCase() as Categories);

  return (
    <Root>
      {/* Category buttons */}
      <CategoryButtonsContainer>
        <CategoryBtn
          onClick={({ target }) => updateCategory(target as HTMLButtonElement)}
          isSelected={selectedCategory === 'all'}
        >
          All
        </CategoryBtn>
        <CategoryBtn
          onClick={({ target }) => updateCategory(target as HTMLButtonElement)}
          isSelected={selectedCategory === 'lighting'}
        >
          Lighting
        </CategoryBtn>
        <CategoryBtn
          onClick={({ target }) => updateCategory(target as HTMLButtonElement)}
          isSelected={selectedCategory === 'sofas'}
        >
          Sofas
        </CategoryBtn>
        <CategoryBtn
          onClick={({ target }) => updateCategory(target as HTMLButtonElement)}
          isSelected={selectedCategory === 'lounge chairs'}
        >
          Lounge Chairs
        </CategoryBtn>
        <CategoryBtn
          onClick={({ target }) => updateCategory(target as HTMLButtonElement)}
          isSelected={selectedCategory === 'furniture'}
        >
          Furniture
        </CategoryBtn>
      </CategoryButtonsContainer>

      {/* Products grid */}
      <ProductGrid>
        {products.map(
          ({
            id,
            name,
            image,
            price,
            href,
            oldPrice,
            thumbnail,
            createdAt,
          }) => (
            <ProductPreview
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              href={href}
              oldPrice={oldPrice}
              thumbnail={thumbnail}
              createdAt={createdAt}
            />
          )
        )}
      </ProductGrid>

      {/* Pagination buttons */}
      <PaginationButtons>
        {/* Left button */}
        <PaginationBtn
          onClick={() => {
            if (currentPage <= 1) return;

            setCurrentPage(currentPage - 1);
          }}
        >
          <Icon isLeft={true}>
            <use href="/chevron-right.svg#icon" />
          </Icon>
        </PaginationBtn>

        {/* Current page text */}
        <PageNumber>{currentPage}</PageNumber>

        {/* Right button */}
        <PaginationBtn
          onClick={() => {
            if (currentPage > 5) return;

            setCurrentPage(currentPage + 1);
          }}
        >
          <Icon>
            <use href="/chevron-right.svg#icon" />
          </Icon>
        </PaginationBtn>
      </PaginationButtons>

      {/* Go to shop button */}
      <ShopButtonContainer>
        <Line />

        <InnerContainer>
          <Link href="/shop" passHref>
            <ShopBtn>Go to Shop</ShopBtn>
          </Link>
        </InnerContainer>
      </ShopButtonContainer>
    </Root>
  );
};

export default ProductsCarousel;
