import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { CATEGORIES } from '../constants';
import { capitalize } from '../helpers';
import { getNumProducts } from '../lib/firebase/firebase';
import { ProductPreviewType } from '../Types';
import ButtonPrimary from './ButtonPrimary';
import Overlay from './Overlay';
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

const Products = styled.div`
  position: relative;
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

interface Props {
  furnitureProducts: ProductPreviewType[];
}

const ProductsCarousel: FC<Props> = ({ furnitureProducts }) => {
  // State
  const [currentProducts, setCurrentProducts] = useState(furnitureProducts);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState<number>(Infinity);
  const [isLoading, setIsLoading] = useState(false);

  const updateCategory = (target: HTMLButtonElement) =>
    setSelectedCategory(target.textContent!.toLowerCase());

  return (
    <Root>
      {/* Category buttons */}
      <CategoryButtonsContainer>
        {CATEGORIES.map(category => (
          <CategoryBtn
            key={category}
            onClick={async ({ target }) => {
              updateCategory(target as HTMLButtonElement);

              try {
                setIsLoading(true);

                // Fetch the first 8 products of the newly selected
                // category
                const [products] = await getNumProducts(category);

                setCurrentPage(1);
                setMaxPage(3);
                setLastVisible(undefined);
                setCurrentProducts(products);
                setIsLoading(false);
              } catch (_) {
                setIsLoading(false);
              }
            }}
            isSelected={selectedCategory === category}
          >
            {capitalize(category)}
          </CategoryBtn>
        ))}
      </CategoryButtonsContainer>

      {/* Products grid */}
      <Products>
        {/* Products */}
        <ProductsGrid
          products={currentProducts.slice(
            (currentPage - 1) * 8,
            8 * currentPage
          )}
        />

        {/* Overlay */}
        <Overlay isLoading={isLoading} scale={2.1} />
      </Products>

      {/* Pagination buttons */}
      <PaginationButtons>
        {/* Left button */}
        <PaginationBtn
          disabled={currentPage <= 1 || isLoading}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <Icon isLeft={true}>
            <use href="/chevron-right.svg#icon" />
          </Icon>
        </PaginationBtn>

        {/* Current page text */}
        <PageNumber>{currentPage}</PageNumber>

        {/* Right button */}
        {currentPage < maxPage && (
          <PaginationBtn
            disabled={currentPage >= maxPage || isLoading}
            onClick={async () => {
              try {
                if (currentProducts.length - currentPage * 8 > 0)
                  return setCurrentPage(currentPage + 1);

                setIsLoading(true);

                // Fetch next 8 products
                const [products, lastDoc] = await getNumProducts(
                  selectedCategory,
                  lastVisible
                );
                const [latestProducts, latestDoc] =
                  currentPage <= 1
                    ? await getNumProducts(selectedCategory, lastDoc)
                    : [products, lastDoc];

                if (latestProducts.length < 8) setMaxPage(currentPage + 1);

                setLastVisible(latestDoc);
                setCurrentProducts([...currentProducts, ...latestProducts]);
                setIsLoading(false);
                setCurrentPage(currentPage + 1);
              } catch (_) {
                setIsLoading(false);
              }
            }}
          >
            <Icon>
              <use href="/chevron-right.svg#icon" />
            </Icon>
          </PaginationBtn>
        )}
      </PaginationButtons>

      {/* Go to shop button */}
      <ButtonPrimary type="link" href="/shop">
        Go to Shop
      </ButtonPrimary>
    </Root>
  );
};

export default ProductsCarousel;
