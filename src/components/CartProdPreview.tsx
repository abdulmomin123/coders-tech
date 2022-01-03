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
import { CartItem } from '../Types';

const displayGrid = css`
  display: grid;
`;

const Root = styled.div`
  ${displayGrid}
  grid-template-columns: max-content 1fr;
  gap: 2.5rem;
`;

const ImageContainer = styled.div`
  border-radius: 2rem;
  overflow: hidden;
`;

const Details = styled.div`
  ${displayGrid}
  grid-template-rows: max-content 1fr;
`;

const fontSize = css`
  font-size: 1.8rem;
`;

const Name = styled.p`
  ${fontSize}
  font-weight: 500;
  line-height: 1.25;
  color: #080f20;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 1.7rem;
  color: #5a5a5a;
  letter-spacing: 1px;
`;

const alignItems = css`
  align-items: center;
`;

const Buttons = styled.div`
  align-self: end;
  display: flex;
  ${alignItems}
  justify-content: space-between;
`;

const QuantityButtons = styled.div`
  ${fontSize}
  ${displayGrid}
  grid-auto-flow: column;
  ${alignItems}
  gap: 1.5rem;
  color: #989898;
`;

const placeItems = css`
  place-items: center;
`;

const padding = css`
  padding: 1rem;
`;

const borderRadius = css`
  border-radius: 50%;
`;

const transition = css`
  transition: background 0.2s;
`;

const Button = styled.button`
  ${displayGrid}
  ${placeItems}
  ${padding}
  border: 2px solid #e8e8e8;
  ${borderRadius}
  ${transition}

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Icon = styled.svg`
  width: 1.1rem;
  height: 1.1rem;
  fill: #989898;
`;

const DeleteBtn = styled.button`
  ${displayGrid}
  ${placeItems}
  ${padding}
  background: #f1f1f3;
  ${borderRadius}
  ${transition}

  &:hover {
    background: #e6e6e6;
  }
`;

const DeleteIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: #5f5c6e;
`;

const CartProdPreview: FC<CartItem> = ({
  id,
  name,
  price,
  category,
  thumbnail,
  quantity,
}) => {
  // Consuming context
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(CartItemsSetter);
  const { setIsCartOpen } = useContext(CartContext);

  const href = `/${category}/${id}`;
  const closeCart = () => setIsCartOpen(false);

  return (
    <Root>
      {/* Product image */}
      <ImageContainer>
        <Link href={href}>
          <a onClick={closeCart}>
            <Image
              src={`/products/${thumbnail}`}
              alt={name}
              width={120}
              height={120}
            />
          </a>
        </Link>
      </ImageContainer>

      {/* Details */}
      <Details>
        <Link href={href}>
          <a onClick={closeCart}>
            {/* Name */}
            <Name>{name}</Name>

            {/* Price */}
            <Price>{formatPrice(price)}</Price>
          </a>
        </Link>

        {/* Buttons */}
        <Buttons>
          {/* Quantity increase decrease buttons */}
          <QuantityButtons>
            {/* Minus button */}
            <Button
              disabled={quantity <= 1}
              onClick={() => {
                setCartItems(
                  cartItems.map(item =>
                    item.id === id
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                  )
                );
              }}
            >
              <Icon>
                <use href="/minus.svg#icon" />
              </Icon>
            </Button>

            {/* Quantity */}
            {quantity}

            {/* Plus button */}
            <Button
              disabled={quantity >= 100}
              onClick={() => {
                setCartItems(
                  cartItems.map(item =>
                    item.id === id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  )
                );
              }}
            >
              <Icon>
                <use href="/plus.svg#icon" />
              </Icon>
            </Button>
          </QuantityButtons>

          {/* Delete button */}
          <DeleteBtn
            onClick={() =>
              setCartItems(cartItems.filter(({ id: prodId }) => id !== prodId))
            }
          >
            <DeleteIcon>
              <use href="/trash.svg#icon" />
            </DeleteIcon>
          </DeleteBtn>
        </Buttons>
      </Details>
    </Root>
  );
};

export default CartProdPreview;
