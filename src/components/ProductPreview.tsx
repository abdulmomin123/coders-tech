import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext } from 'react';
import styled, { css } from 'styled-components';
import {
  CartContext,
  CartItemsContext,
  CartItemsSetter,
} from '../contexts/Cart';
import { capitalize, formatPrice } from '../helpers';

const position = css`
  position: relative;
`;

const transition = css`
  transition: transform 0.2s;
`;

const Root = styled.a`
  ${position}
  text-align: left;

  img {
    ${transition}
  }

  &:hover > :first-child > :last-child {
    transform: translate(-50%, 0);
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const fontWeight = css`
  font-weight: 500;
`;

const textStyles = css`
  text-transform: uppercase;
  ${fontWeight}
`;

const fontSize = css`
  font-size: 1.6rem;
`;

const positionAbs = css`
  position: absolute;
`;

const Status = styled.div<{ status: 'new' | 'sale' }>`
  ${fontSize}
  ${textStyles}
  ${positionAbs}
  top: 0;
  right: 2rem;
  padding: 0.4rem 1.5rem;
  color: #fff;
  background: ${({ status }) =>
    status === 'new' ? '#6bb75d' : status === 'sale' ? '#e04243' : 'initial'};
  transform: translateY(-50%);
`;

const ImageContainer = styled.div`
  ${position}
  margin-bottom: 2.5rem;
  overflow: hidden;
`;

const Buttons = styled.div`
  ${positionAbs}
  bottom: 3px;
  left: 50%;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  color: #262626;
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 3px solid var(--accent-color);
  transform: translate(-50%, 110%);
  ${transition}
`;

const letterSpacing = css`
  letter-spacing: 1px;
`;

const Button = styled.button`
  ${textStyles}
  font-size: 1.35rem;
  ${letterSpacing}
  padding: 0.6rem 2rem;
  line-height: 1;

  &:not(:last-of-type) {
    border-right: 2px solid #ebebeb;
  }
`;

const HeartIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: currentColor;
`;

const Name = styled.h3`
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.3;
  ${letterSpacing}
  margin-bottom: 1.5rem;
  color: #636262;
`;

const Price = styled.span<{ isDiscounted?: boolean }>`
  ${fontSize}
  ${fontWeight}
  text-decoration: ${({ isDiscounted }) =>
    isDiscounted ? 'line-through' : 'none'};
  color: ${({ isDiscounted }) => (isDiscounted ? '#bbbaba' : '#252525')};
  ${({ isDiscounted }) => isDiscounted && 'margin-left: 1.5rem;'}
`;

interface Props {
  name: string;
  images: string[];
  href: string;
  price: number;
  discountedPrice?: number;
  status?: 'new' | 'sale';
}

const ProductsPreview: FC<Props> = ({
  name,
  images,
  href,
  price,
  discountedPrice,
  status,
}) => {
  // Consuming context
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(CartItemsSetter);
  const { setIsCartOpen } = useContext(CartContext);

  return (
    <Link href={href} passHref>
      <Root>
        {/* Image container */}
        <ImageContainer>
          {/* Product image */}
          <Image src={images[0]} alt={name} width={270} height={350} />

          {/* Add to cart and favorite button */}
          <Buttons onClick={e => e.preventDefault()}>
            {/* Heart button */}
            <Button>
              <HeartIcon>
                <use href="/heart.svg#icon" />
              </HeartIcon>
            </Button>

            {/* Add to cart button */}
            <Button
              onClick={() => {
                const existingProduct = cartItems.find(
                  ({ name: prodName }) => prodName === name
                );

                if (!cartItems.length) setIsCartOpen(true);

                if (existingProduct) {
                  existingProduct.quantity++;
                  return setCartItems([...cartItems]);
                }

                setCartItems([
                  ...cartItems,
                  { image: '', name, price, quantity: 1 },
                ]);
              }}
            >
              Add To Cart
            </Button>
          </Buttons>
        </ImageContainer>

        {/* Product status */}
        {status && <Status status={status}>{capitalize(status)}</Status>}
        {discountedPrice && <Status status="sale">Sale</Status>}

        {/* Product name */}
        <Name>{name}</Name>

        {/* Product price & discounted price */}
        <div>
          {/* Current price */}
          <Price>{formatPrice(price)}</Price>

          {/* Discounted price */}
          {discountedPrice && (
            <Price isDiscounted={true}>{formatPrice(discountedPrice)}</Price>
          )}
        </div>
      </Root>
    </Link>
  );
};

export default ProductsPreview;
