import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import ProductFullPreview from '../../components/ProductFullPreview';
import { allProducts } from '../../seedData';
import { slugify } from '../../helpers';
import { FullProduct } from '../../Types';

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all category names

  // Fetch all the products of all categories

  return {
    paths: allProducts.map(({ category, name }) => ({
      params: { category, productSlug: slugify(name) },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the given products details
  const productSlug = params!.productSlug as string;
  const product = allProducts.find(
    ({ name }) => slugify(name) === slugify(productSlug)
  )!;

  return {
    props: { product },
    revalidate: 60,
  };
};

const Root = styled.div``;

interface Props {
  product: FullProduct;
}

const product: FC<Props> = ({ product }) => {
  useEffect(() => {
    document.body.style.background = '#eff0f5';
    document.querySelector('html')!.style.scrollBehavior = 'smooth';

    return () => {
      document.body.style.background = 'initial';
      document.querySelector('html')!.style.scrollBehavior = 'initial';
    };
  }, []);

  return (
    <Root>
      <ProductFullPreview product={product} />
    </Root>
  );
};

export default product;
