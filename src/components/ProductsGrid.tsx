import { FC } from 'react';
import styled from 'styled-components';
import { ProductPreviewType } from '../Types';
import ProductPreview from './ProductPreview';

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  row-gap: 6rem;
  margin-bottom: 7rem;
`;

interface Props {
  products: ProductPreviewType[];
}

const ProductsGrid: FC<Props> = ({ products }) => {
  return (
    <Root>
      {products.map(
        ({
          id,
          name,
          image,
          category,
          price,
          oldPrice,
          thumbnail,
          createdAt,
        }) => (
          <ProductPreview
            key={id}
            id={id}
            name={name}
            category={category}
            image={image}
            price={price}
            oldPrice={oldPrice}
            thumbnail={thumbnail}
            createdAt={createdAt}
          />
        )
      )}
    </Root>
  );
};

export default ProductsGrid;
