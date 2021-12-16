import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import ButtonPrimary from '../../components/ButtonPrimary';
import ProductsGrid from '../../components/ProductsGrid';
import {
  camelCaseToNormal,
  capitalize,
  kebabCaseToCamelCase,
} from '../../helpers';
import { mockProducts } from '../../seedData';
import {
  categoryAndShopPagesStyles,
  categoryNameStyles,
} from '../../styles/globalStyles';
import { ProductPreviewType } from '../../Types';

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all the category names
  return {
    paths: Object.keys(mockProducts).map(category => ({
      params: { category: camelCaseToNormal(category, '-', false) },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch products of the given category
  const category = params!.category as string;

  return {
    props: {
      products:
        mockProducts[
          kebabCaseToCamelCase(category) as keyof typeof mockProducts
        ],
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
  products: ProductPreviewType[];
}

const index: FC<Props> = ({ category, products }) => {
  return (
    <Root>
      {/* Category name */}
      <CategoryName>{capitalize(category.replaceAll('-', ' '))}</CategoryName>

      {/* Products */}
      <ProductsGrid products={products} />

      {/* Load more button */}
      <ButtonPrimary type="button">Load More</ButtonPrimary>
    </Root>
  );
};

export default index;
