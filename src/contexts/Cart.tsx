import { createContext, FC, useState } from 'react';
import { CartItem } from '../Types';

export const CartItemsContext = createContext<CartItem[]>([]);
export const CartItemsSetter = createContext<(cartItems: CartItem[]) => void>(
  () => {}
);
export const CartContext = createContext({
  isOpen: false,
  setIsOpen: (_: boolean) => {},
});

const CartProvider: FC = ({ children }) => {
  // State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartItemsContext.Provider value={cartItems}>
      <CartItemsSetter.Provider value={setCartItems}>
        <CartContext.Provider value={{ isOpen, setIsOpen }}>
          {children}
        </CartContext.Provider>
      </CartItemsSetter.Provider>
    </CartItemsContext.Provider>
  );
};

export default CartProvider;
