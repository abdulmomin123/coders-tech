import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext } from 'react';
import styled, { css } from 'styled-components';
import {
  CartContext,
  CartItemsContext,
  CartItemsSetter,
} from '../contexts/Cart';
import { formatPrice } from '../helpers';
import { ProductPreviewType } from '../Types';

const position = css`
  position: relative;
`;

const transition = css`
  transition: transform 0.2s;
`;

const Root = styled.a`
  ${position}
  text-align: left;
  max-width: 27rem;

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

const ProductPreview: FC<ProductPreviewType> = ({
  id,
  name,
  image,
  price,
  href,
  oldPrice,
  thumbnail,
  createdAt,
}) => {
  // Consuming context
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(CartItemsSetter);
  const { setIsCartOpen, hasCartOpened, setHasCartOpened } =
    useContext(CartContext);

  const status = oldPrice
    ? 'sale'
    : Date.now() - new Date(createdAt).getTime() <= 604800000
    ? 'new'
    : null;

  return (
    <Link href={href} passHref>
      <Root>
        {/* Image container */}
        <ImageContainer>
          {/* Product image */}
          <Image src={image} alt={name} width={270} height={350} />

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
                const newCartItems = [...cartItems];
                const existingProduct = newCartItems.find(
                  ({ id: prodId }) => prodId === id
                );

                if (!hasCartOpened) setIsCartOpen(true), setHasCartOpened(true);
                if (existingProduct && existingProduct.quantity >= 100) return;

                if (existingProduct) {
                  existingProduct.quantity++;
                  return setCartItems(newCartItems);
                }

                setCartItems([
                  ...cartItems,
                  { id, name, price, href, thumbnail, quantity: 1 },
                ]);
              }}
            >
              Add To Cart
            </Button>
          </Buttons>
        </ImageContainer>

        {/* Product status */}
        {status && <Status status={status}>{status}</Status>}

        {/* Product name */}
        <Name>{name}</Name>

        {/* Product price & discounted price */}
        <div>
          {/* Current price */}
          <Price>{formatPrice(price)}</Price>

          {/* Discounted price */}
          {oldPrice && (
            <Price isDiscounted={true}>{formatPrice(oldPrice)}</Price>
          )}
        </div>
      </Root>
    </Link>
  );
};

export default ProductPreview;
