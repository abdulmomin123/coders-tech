import { GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import ButtonPrimary from '../components/ButtonPrimary';
import ProductsGrid from '../components/ProductsGrid';
import { camelCaseToNormal } from '../helpers';
import { mockProducts } from '../seedData';
import {
  categoryAndShopPagesStyles,
  categoryNameStyles,
} from '../styles/globalStyles';
import { ProductPreviewType } from '../Types';

export const getStaticProps: GetStaticProps = async () => {
  // Fetch all products
  const categories = [];

  for (let key in mockProducts)
    categories.push({
      categoryName: key as keyof typeof mockProducts,
      products: mockProducts[key as keyof typeof mockProducts],
    });

  return {
    props: { categories },
  };
};

const Root = styled.div`
  ${categoryAndShopPagesStyles}
  padding-top: 1.5rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 7rem;
  color: #333;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 2rem;
`;

const CategoriesGrid = styled.div`
  display: grid;
  gap: 8rem;
`;

const CategoryName = styled.h2`
  ${categoryNameStyles}
  padding-bottom: 1rem;
  margin-bottom: 3rem;
`;

interface Props {
  categories: {
    categoryName: keyof typeof mockProducts;
    products: ProductPreviewType[];
  }[];
}

const shop: FC<Props> = ({ categories }) => {
  return (
    <Root>
      {/* Title */}
      <TitleContainer>
        <Title>Shop</Title>

        <Text>Shop the best furniture ever!</Text>
      </TitleContainer>

      <CategoriesGrid>
        {categories.map(({ categoryName, products }) => (
          <div key={categoryName}>
            {/* Category name */}
            <CategoryName>
              {camelCaseToNormal(categoryName, ' ', true)}
            </CategoryName>

            {/* Products */}
            <ProductsGrid products={products} />

            {/* Load more button */}
            <ButtonPrimary type="button">Load More</ButtonPrimary>
          </div>
        ))}
      </CategoriesGrid>
    </Root>
  );
};

export default shop;
