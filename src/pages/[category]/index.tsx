import { doc, getDoc } from 'firebase/firestore';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import CategoryGrid from '../../components/CategoryGrid';
import { camelCaseToNormal } from '../../helpers';
import { firestore, getNumProducts } from '../../lib/firebase/firebase';
import { categoryAndShopPagesStyles } from '../../styles/globalStyles';
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

  const [products] = await getNumProducts(category);

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

interface Props {
  category: string;
  products: string;
}

const index: FC<Props> = ({ category, products }) => {
  const parsedProducts = JSON.parse(products) as ProductPreviewType[];

  return (
    <Root>
      <CategoryGrid name={category} products={parsedProducts} />
    </Root>
  );
};

export default index;
