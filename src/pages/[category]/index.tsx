import { doc, getDoc } from 'firebase/firestore';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import ButtonPrimary from '../../components/ButtonPrimary';
import ProductsGrid from '../../components/ProductsGrid';
import { camelCaseToNormal, capitalize } from '../../helpers';
import { firestore, getFirstEight } from '../../lib/firebase/firebase';
import {
  categoryAndShopPagesStyles,
  categoryNameStyles,
} from '../../styles/globalStyles';
import { ProductPreviewType } from '../../Types';

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all category names
  const { categories } = (
    await getDoc(doc(firestore, 'products', 'categories'))
  ).data() as { categories: string[] };

  const paths = categories.map(category => ({
    params: { category: camelCaseToNormal(category, '-', false) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch first 8 products of each category
  const category = params!.category as string;

  const products = await getFirstEight(category);

  return {
    props: {
      products: JSON.stringify(products),
      category,
    },
    revalidate: 60,
  };
};

const Root = styled.div`
  ${categoryAndShopPagesStyles}
`;

const CategoryName = styled.h1`
  ${categoryNameStyles}
  padding-bottom: 1.5rem;
  margin-bottom: 5rem;
`;

interface Props {
  category: string;
  products: string;
}

const index: FC<Props> = ({ category, products }) => {
  const parsedProducts = JSON.parse(products) as ProductPreviewType[];

  return (
    <Root>
      {/* Category name */}
      <CategoryName>{capitalize(category.replaceAll('-', ' '))}</CategoryName>

      {/* Products */}
      <ProductsGrid products={parsedProducts} />

      {/* Load more button */}
      <ButtonPrimary type="button">Load More</ButtonPrimary>
    </Root>
  );
};

export default index;
