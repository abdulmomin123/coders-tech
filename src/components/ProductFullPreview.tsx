import { FC } from 'react';
import styled from 'styled-components';
import { FullProduct } from '../Types';

const Root = styled.div`
  max-width: 115rem;
  margin: 0 auto;
`;

interface Props {
  product: FullProduct;
}

const ProductFullPreview: FC<Props> = ({ product: { name } }) => {
  return (
    <Root>
      <h1>{name}</h1>
      {/* Category and product name */}

      {/* Product main details */}

      {/* Description */}

      {/* Reviews and questions */}
    </Root>
  );
};

export default ProductFullPreview;
