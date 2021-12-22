import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import ProductFullPreview from '../../components/ProductFullPreview';

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all the products slug
  return {
    paths: [{ params: { category: 'sofa', productSlug: 'test' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productSlug = params!.productSlug as string;

  // Fetch the given products details

  return {
    props: {},
    revalidate: 60,
  };
};

const Root = styled.div``;

interface Props {
  //
}

const product: FC<Props> = ({}) => {
  return (
    <Root>
      <ProductFullPreview />
    </Root>
  );
};

export default product;
