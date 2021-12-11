import { useState } from 'react';
import styled from 'styled-components';
import { Categories } from '../Types';

const Root = styled.section`
  text-align: center;
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

const CategoryButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 6.5rem;
  margin-bottom: 3rem;
`;

const CategoryBtn = styled.button<{ isSelected: boolean }>`
  font-size: 1.7rem;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 0.8rem;
  color: ${({ isSelected }) => (isSelected ? '#37499d' : 'initial')};
  border-bottom: 2px solid
    ${({ isSelected }) => (isSelected ? '#37499d' : 'transparent')};
  transition: color 0.2s, border 0.2s;
  cursor: pointer;

  &:hover {
    color: #37499d;
    border-bottom: 2px solid #37499d;
  }
`;

const ProductGrid = styled.div``;

const PaginationBtn = styled.button``;

const ShopBtn = styled.button``;

const ProductsCarousel = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState<Categories>('all');

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

      {/* Pagination buttons */}

      {/* Go to shop button */}
    </Root>
  );
};

export default ProductsCarousel;
