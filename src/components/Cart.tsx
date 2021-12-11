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
  z-index: 1;
`;

const ShoppingCart = styled.div<{ isOpen: boolean }>`
  width: 40rem;
  height: 100%;
  background: #fff;
  margin-left: auto;
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(105%)')};
  transition: transform 0.3s ease-out;
`;

const Cart = () => {
  // Consuming context
  const { isOpen, setIsOpen } = useContext(CartContext);

  return (
    <Root
      onClick={({ target }) => {
        const cart = (target as HTMLElement).closest('.cart');

        if (!cart) setIsOpen(false);
      }}
      isOpen={isOpen}
    >
      <ShoppingCart isOpen={isOpen} className="cart">
        <p>cart</p>
      </ShoppingCart>
    </Root>
  );
};

export default Cart;
