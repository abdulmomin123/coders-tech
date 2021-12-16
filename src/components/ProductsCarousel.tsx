import { useState } from 'react';
import styled, { css } from 'styled-components';
import { mockCategories } from '../constants';
import { capitalize } from '../helpers';
import { mockProducts } from '../seedData';
import ButtonPrimary from './ButtonPrimary';
import ProductsGrid from './ProductsGrid';

const Root = styled.section`
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

const ProductsCarousel = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState(mockCategories[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const updateCategory = (target: HTMLButtonElement) =>
    setSelectedCategory(target.textContent!.toLowerCase());

  return (
    <Root>
      {/* Category buttons */}
      <CategoryButtonsContainer>
        {mockCategories.map(category => (
          <CategoryBtn
            key={category}
            onClick={({ target }) =>
              updateCategory(target as HTMLButtonElement)
            }
            isSelected={selectedCategory === category}
          >
            {capitalize(category)}
          </CategoryBtn>
        ))}
      </CategoryButtonsContainer>

      {/* Products grid */}
      <ProductsGrid products={mockProducts['furniture']} />

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
      <ButtonPrimary type="button" href="/shop">
        Go to Shop
      </ButtonPrimary>
    </Root>
  );
};

export default ProductsCarousel;
