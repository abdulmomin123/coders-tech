import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/Cart';

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
  background: #fff;
  margin-left: auto;
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(105%)')};
  transition: transform 0.3s ease-out;
`;

const TopPart = styled.div``;

const Container = styled.div``;

const OrderDetailsText = styled.p``;

const CloseBtn = styled.button``;

const CloseIcon = styled.svg``;

const TextPrimary = styled.p``;

const ProductsContainer = styled.div``;

const BottomPart = styled.div``;

const PriceGroup = styled.div``;

const Price = styled.span``;

const TotalPrice = styled.span``;

const CheckoutBtn = styled.button``;

const Cart = () => {
  // Consuming context
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

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
        <TopPart>
          {/* Order details text and the close button */}
          <Container>
            {/* Text */}
            <OrderDetailsText>Order Details</OrderDetailsText>

            {/* Close icon */}
            <CloseBtn>
              <CloseIcon>
                <use href="" />
              </CloseIcon>
            </CloseBtn>
          </Container>

          {/* My cart text */}
          <TextPrimary>My Cart</TextPrimary>
        </TopPart>

        {/* Cart product previews */}
        <ProductsContainer>
          <p></p>
        </ProductsContainer>

        {/* Bottom part */}
        <BottomPart>
          {/* Order info text */}
          <TextPrimary>Order Info</TextPrimary>

          {/* Subtotal */}
          <PriceGroup>
            Subtotal
            <Price>$199.00</Price>
          </PriceGroup>

          {/* Shipping Cost */}
          <PriceGroup>
            Shipping Cost
            <Price>+$10.00</Price>
          </PriceGroup>

          {/* Total */}
          <PriceGroup>
            Total
            <TotalPrice>$209.00</TotalPrice>
          </PriceGroup>

          {/* Checkout button */}
          <CheckoutBtn>Checkout ($209.00)</CheckoutBtn>
        </BottomPart>
      </ShoppingCart>
    </Root>
  );
};

export default Cart;
