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

  @media only screen and (max-width: 46.875em) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }

  @media only screen and (max-width: 31.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 20.9375em) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 2rem;
  }
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
          priceId,
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
            priceId={priceId}
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
