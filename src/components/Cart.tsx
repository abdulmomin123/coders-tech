import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { CartContext, CartItemsContext } from '../contexts/Cart';
import { NotificationContextSetter } from '../contexts/Notification';
import { UserContext } from '../contexts/User';
import { formatPrice } from '../helpers';
import { getSession, getStripe } from '../lib/stripe/stripe';
import CartProdPreview from './CartProdPreview';
import LoadingAnimation from './LoadingAnimation';

const fullWidth = css`
  width: 100%;
`;

const fullHeight = css`
  height: 100%;
`;

const Root = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  ${fullWidth}
  ${fullHeight}
  background: ${({ isOpen }) => (isOpen ? 'rgba(0,0,0,.2)' : 'transparent')};
  backdrop-filter: blur(1px);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.3s, background 0.3s, backdrop-filter 0.3s;
  z-index: 2;
`;

const displayGrid = css`
  display: grid;
`;

const ShoppingCart = styled.div<{ isOpen: boolean }>`
  width: 40rem;
  ${fullHeight}
  ${displayGrid}
  grid-template-rows: max-content 1fr max-content;
  padding: 4rem 2.5rem 2.5rem 2.5rem;
  background: #fff;
  margin-left: auto;
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(105%)')};
  transition: transform 0.3s ease-out;
`;

const displayFlex = css`
  display: flex;
`;

const justifyContent = css`
  justify-content: space-between;
`;

const Container = styled.div`
  ${displayFlex}
  align-items: center;
  ${justifyContent}
  margin-bottom: 4rem;
`;

const fontWeight = css`
  font-weight: 500;
`;

const darkColor = css`
  color: #333333;
`;

const OrderDetailsText = styled.p`
  font-size: 2rem;
  ${fontWeight}
  letter-spacing: 1px;
  text-align: center;
  ${darkColor}
`;

const transition = css`
  transition: background 0.2s;
`;

const CloseBtn = styled.button`
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ${transition}

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
  ${fontWeight}
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
  ${displayGrid}
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
  ${displayFlex}
  ${justifyContent}
  margin-top: ${({ isTotal }) => (isTotal ? '4rem' : 'none')};
  color: #7d7d7e;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Price = styled.span`
  ${darkColor}
`;

const TotalPrice = styled.span`
  font-size: 2.3rem;
  ${fontWeight}
  color: #000;
`;

const CheckoutBtn = styled.button`
  font-size: 1.7rem;
  ${fontWeight}
  text-transform: uppercase;
  ${fullWidth}
  padding: 2rem;
  margin-top: 3.8rem;
  color: #f1f4ff;
  background: #003fff;
  border-radius: 1.8rem;
  ${transition}

  &:hover {
    background: #002db3;
  }
`;

const Cart = () => {
  // Consuming context
  const cartItems = useContext(CartItemsContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const user = useContext(UserContext);
  const setNotification = useContext(NotificationContextSetter);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );

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
            {cartItems.map(
              ({ id, name, category, price, priceId, quantity, thumbnail }) => (
                <CartProdPreview
                  key={id}
                  id={id}
                  name={name}
                  category={category}
                  price={price}
                  priceId={priceId}
                  quantity={quantity}
                  thumbnail={thumbnail}
                />
              )
            )}
          </ProductsContainer>
        ) : (
          <CartIcon>
            <use href="/empty-cart.svg#icon" />
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

          {/* Total */}
          <PriceGroup isTotal={true}>
            Total
            <TotalPrice>{formatPrice(subtotal)}</TotalPrice>
          </PriceGroup>

          {/* Checkout button */}
          <CheckoutBtn
            disabled={!cartItems.length || isLoading}
            onClick={async () => {
              try {
                setIsLoading(true);

                const session = await getSession(
                  user ? user.email : '',
                  cartItems.map(({ priceId, quantity }) => ({
                    price: priceId,
                    quantity,
                  })),
                  router.asPath,
                  'all'
                );

                if ((session as any).statusCode === 500) {
                  return setNotification({
                    type: 'error',
                    text: 'Something went wrong.',
                  });
                }

                // Redirect to Checkout
                const stripe = await getStripe();

                const { error } = await stripe!.redirectToCheckout({
                  sessionId: session.id,
                });

                if (error)
                  setNotification({
                    type: 'error',
                    text: 'Something went wrong.',
                  });

                setIsLoading(false);
              } catch (_) {
                setIsLoading(false);
                setNotification({
                  type: 'error',
                  text: 'Something went wrong.',
                });
              }
            }}
          >
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              `Checkout (${formatPrice(subtotal)})`
            )}
          </CheckoutBtn>
        </BottomPart>
      </ShoppingCart>
    </Root>
  );
};

export default Cart;
