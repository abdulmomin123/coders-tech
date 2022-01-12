import Head from 'next/head';
import { doc, getDoc } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import CategoryGrid from '../components/CategoryGrid';
import { firestore, getNumProducts } from '../lib/firebase/firebase';
import { categoryAndShopPagesStyles } from '../styles/globalStyles';
import { ProductPreviewType } from '../Types';

export const getStaticProps: GetStaticProps = async () => {
  // Fetch all category names
  const { categories } = (
    await getDoc(doc(firestore, 'products', 'categories'))
  ).data() as { categories: string[] };

  // Fetch first 8 products of each category
  const results = await Promise.all(
    categories.map(async category => {
      const [products] = await getNumProducts(category);

      return { category, products };
    })
  );

  return {
    props: { result: JSON.stringify(results) },
    revalidate: 1,
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

const CategoryGrids = styled.div`
  display: grid;
  gap: 8rem;
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
      <Head>
        <title>Shopnik | Shop</title>
      </Head>

      {/* Title */}
      <TitleContainer>
        <Title>Shop</Title>

        <Text>Shop the best furniture ever!</Text>
      </TitleContainer>

      <CategoryGrids>
        {categories.map(({ category, products }) => (
          <CategoryGrid
            key={category}
            name={category}
            products={products}
            isShopPage={true}
          />
        ))}
      </CategoryGrids>
    </Root>
  );
};

export default shop;
