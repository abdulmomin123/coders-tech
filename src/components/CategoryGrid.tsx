import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { camelCaseToNormal } from '../helpers';
import { getNumProducts } from '../lib/firebase/firebase';
import { categoryNameStyles } from '../styles/globalStyles';
import { ProductPreviewType } from '../Types';
import ButtonPrimary from './ButtonPrimary';
import LoadingAnimation from './LoadingAnimation';
import ProductsGrid from './ProductsGrid';

const Root = styled.div``;

const CategoryNamePrimary = styled.h1`
  ${categoryNameStyles}
  padding-bottom: 1.5rem;
  margin-bottom: 5rem;
`;

const CategoryNameSecondary = styled.h2`
  ${categoryNameStyles}
  padding-bottom: 1rem;
  margin-bottom: 3rem;
`;

interface Props {
  name: string;
  products: ProductPreviewType[];
  isShopPage?: boolean;
}

const CategoryGrid: FC<Props> = ({ name, products, isShopPage }) => {
  // State
  const [currentProducts, setCurrentProducts] =
    useState<ProductPreviewType[]>(products);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMaxPage, setIsMaxPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCurrentProducts(products);
    setCurrentPage(1);
    setIsMaxPage(false);
    setLastVisible(undefined);
  }, [products]);

  return (
    <Root>
      {/* Category name */}
      {isShopPage ? (
        <CategoryNameSecondary>
          {camelCaseToNormal(name, ' ', true)}
        </CategoryNameSecondary>
      ) : (
        <CategoryNamePrimary>
          {camelCaseToNormal(name, ' ', true)}
        </CategoryNamePrimary>
      )}

      {/* Products */}
      <ProductsGrid products={currentProducts} />

      {/* Load more button */}
      {!isMaxPage && (
        <ButtonPrimary
          type="button"
          isDisabled={isLoading || isMaxPage}
          onClick={async () => {
            try {
              setIsLoading(true);

              const [products, lastDoc] = await getNumProducts(
                name,
                lastVisible
              );
              const [latestProducts, latestDoc] =
                currentPage <= 1
                  ? await getNumProducts(name, lastDoc)
                  : [products, lastDoc];

              if (latestProducts.length < 8) setIsMaxPage(true);

              setLastVisible(latestDoc);
              setCurrentProducts([...currentProducts, ...latestProducts]);
              setIsLoading(false);
              setCurrentPage(currentPage + 1);
            } catch (_) {
              setIsLoading(false);
            }
          }}
        >
          {isLoading ? <LoadingAnimation bg="#575757" /> : <>Load More</>}
        </ButtonPrimary>
      )}
    </Root>
  );
};

export default CategoryGrid;
