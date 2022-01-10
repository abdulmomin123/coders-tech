import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import ProductFullPreview from '../../components/ProductFullPreview';
import { FullProduct } from '../../Types';
import { doc, getDoc } from 'firebase/firestore';
import {
  firestore,
  getFullProduct,
  getProducts,
} from '../../lib/firebase/firebase';
import { CurrentProductsSetter } from '../../contexts/currentProduct';

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all category names
  const { categories } = (
    await getDoc(doc(firestore, 'products', 'categories'))
  ).data() as { categories: string[] };

  const paths = (
    await Promise.all(
      categories.map(async category => await getProducts(category))
    )
  )
    .reduce((acc, category) => [...acc, ...category], [])
    .reduce(
      (acc, { category, id }) => [...acc, { category, id }],
      [] as {
        category: string;
        id: string;
      }[]
    )
    .map(({ category, id }) => ({
      params: { category, id },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the given products full details
  const product = await getFullProduct(
    params!.category as string,
    params!.id as string
  );

  return {
    props: { result: JSON.stringify(product) },
    revalidate: 60,
  };
};

const Root = styled.div``;

interface Props {
  result: string;
}

const product: FC<Props> = ({ result }) => {
  const setCurrentProduct = useContext(CurrentProductsSetter);

  const product = JSON.parse(result) as FullProduct;

  useEffect(() => {
    // Set current product context
    setCurrentProduct(product);

    document.body.style.background = '#eff0f5';
    document.querySelector('html')!.style.scrollBehavior = 'smooth';

    return () => {
      document.body.style.background = 'initial';
      document.querySelector('html')!.style.scrollBehavior = 'initial';
    };
  }, []);

  return (
    <Root>
      <Head>
        <title>{product.name}</title>
      </Head>

      <ProductFullPreview product={product} />
    </Root>
  );
};

export default product;
