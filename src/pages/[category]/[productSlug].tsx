import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import ProductFullPreview from '../../components/ProductFullPreview';
import { allProducts } from '../../seedData';
import { slugify } from '../../helpers';
import { FullProduct } from '../../Types';

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all the products

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
  return (
    <Root>
      <ProductFullPreview product={product} />
    </Root>
  );
};

export default product;
