import { createContext, FC, useState } from 'react';
import { CartItem } from '../Types';

export const CartItemsContext = createContext<CartItem[]>([]);
export const CartItemsSetter = createContext<(cartItems: CartItem[]) => void>(
  () => {}
);
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (_: boolean) => {},
});

const CartProvider: FC = ({ children }) => {
  // State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartItemsContext.Provider value={cartItems}>
      <CartItemsSetter.Provider value={setCartItems}>
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
          {children}
        </CartContext.Provider>
      </CartItemsSetter.Provider>
    </CartItemsContext.Provider>
  );
};

export default CartProvider;
