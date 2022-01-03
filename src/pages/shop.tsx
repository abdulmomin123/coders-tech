import { doc, getDoc } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import ButtonPrimary from '../components/ButtonPrimary';
import ProductsGrid from '../components/ProductsGrid';
import { camelCaseToNormal } from '../helpers';
import { firestore, getFirstEight } from '../lib/firebase/firebase';
import {
  categoryAndShopPagesStyles,
  categoryNameStyles,
} from '../styles/globalStyles';
import { ProductPreviewType } from '../Types';

export const getStaticProps: GetStaticProps = async () => {
  // Fetch all category names
  const { categories } = (
    await getDoc(doc(firestore, 'products', 'categories'))
  ).data() as { categories: string[] };

  // Fetch first 8 products of each category
  const results = await Promise.all(
    categories.map(async category => {
      const products = await getFirstEight(category);

      return { category, products };
    })
  );

  return {
    props: { result: JSON.stringify(results) },
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

type Result = {
  category: string;
  products: ProductPreviewType[];
}[];

const shop: FC<{ result: string }> = ({ result }) => {
  const categories = (JSON.parse(result) as Result).filter(
    ({ products }) => products.length
  );

  return (
    <Root>
      {/* Title */}
      <TitleContainer>
        <Title>Shop</Title>

        <Text>Shop the best furniture ever!</Text>
      </TitleContainer>
      <CategoriesGrid>
        {categories.map(({ category, products }) => (
          <div key={category}>
            {/* Category name */}
            <CategoryName>
              {camelCaseToNormal(category, ' ', true)}
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
