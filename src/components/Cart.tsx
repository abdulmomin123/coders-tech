import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CartContext, CartItemsContext } from '../contexts/Cart';
import { formatPrice } from '../helpers';
import CartProdPreview from './CartProdPreview';

const Root = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isOpen }) => (isOpen ? 'rgba(0,0,0,.2)' : 'transparent')};
  backdrop-filter: blur(1px);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.3s, background 0.3s, backdrop-filter 0.3s;
  z-index: 2;
`;

const ShoppingCart = styled.div<{ isOpen: boolean }>`
  width: 40rem;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  padding: 4rem 2.5rem 2.5rem 2.5rem;
  background: #fff;
  margin-left: auto;
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(105%)')};
  transition: transform 0.3s ease-out;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const OrderDetailsText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  color: #333333;
`;

const CloseBtn = styled.button`
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const CloseIcon = styled.svg`
  width: 2.2rem;
  height: 2.2rem;
  fill: #fff;
`;

const TextPrimary = styled.p`
  font-size: 2.6rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  color: #040d28;
`;

const CartIcon = styled.svg`
  place-self: center;
  width: 10rem;
  height: 10rem;
  fill: #7a7a7a;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 3rem;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const BottomPart = styled.div`
  align-self: end;
  padding-top: 1.5rem;
`;

const PriceGroup = styled.div<{ isTotal?: boolean }>`
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ isTotal }) => (isTotal ? '4rem' : 'none')};
  color: #7d7d7e;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Price = styled.span`
  color: #333333;
`;

const TotalPrice = styled.span`
  font-size: 2.3rem;
  font-weight: 500;
  color: #000;
`;

const CheckoutBtn = styled.button`
  font-size: 1.7rem;
  font-weight: 500;
  text-transform: uppercase;
  width: 100%;
  padding: 2rem;
  margin-top: 3.8rem;
  color: #f1f4ff;
  background: #003fff;
  border-radius: 1.8rem;
  transition: background 0.2s;

  &:hover {
    background: #002db3;
  }
`;

const Cart = () => {
  // Consuming context
  const cartItems = useContext(CartItemsContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );
  const shippingCost = subtotal ? 10 : 0;

  useEffect(() => {
    isCartOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial');
  }, [isCartOpen]);

  return (
    <Root
      onClick={({ target }) => {
        const cart = (target as HTMLElement).closest('.cart');

        if (!cart) setIsCartOpen(false);
      }}
      isOpen={isCartOpen}
    >
      <ShoppingCart isOpen={isCartOpen} className="cart">
        {/* Top part */}
        <div>
          {/* Order details text and the close button */}
          <Container>
            {/* Text */}
            <OrderDetailsText>Order Details</OrderDetailsText>

            {/* Close icon */}
            <CloseBtn onClick={() => setIsCartOpen(false)}>
              <CloseIcon>
                <use href="/close.svg#icon" />
              </CloseIcon>
            </CloseBtn>
          </Container>

          {/* My cart text */}
          <TextPrimary>My Cart</TextPrimary>
        </div>

        {/* Cart product previews */}
        {cartItems.length ? (
          <ProductsContainer>
            {cartItems.map(({ id, name, price, quantity, thumbnail, href }) => (
              <CartProdPreview
                key={id}
                id={id}
                name={name}
                price={price}
                quantity={quantity}
                thumbnail={thumbnail}
                href={href}
              />
            ))}
          </ProductsContainer>
        ) : (
          <CartIcon>
            <use href="/cart.svg#icon" />
          </CartIcon>
        )}

        {/* Bottom part */}
        <BottomPart>
          {/* Order info text */}
          <TextPrimary>Order Info</TextPrimary>

          {/* Subtotal */}
          <PriceGroup>
            Subtotal
            <Price>{formatPrice(subtotal)}</Price>
          </PriceGroup>

          {/* Shipping Cost */}
          <PriceGroup>
            Shipping Cost
            <Price>+{formatPrice(shippingCost)}</Price>
          </PriceGroup>

          {/* Total */}
          <PriceGroup isTotal={true}>
            Total
            <TotalPrice>{formatPrice(subtotal + shippingCost)}</TotalPrice>
          </PriceGroup>

          {/* Checkout button */}
          <CheckoutBtn disabled={!cartItems.length}>
            Checkout ({formatPrice(subtotal + shippingCost)})
          </CheckoutBtn>
        </BottomPart>
      </ShoppingCart>
    </Root>
  );
};

export default Cart;
