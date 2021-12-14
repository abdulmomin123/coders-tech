import { createContext, FC, useEffect, useState } from 'react';
import { LOCAL_STORAGE_CART_ITEMS_KEY } from '../constants';
import { CartItem } from '../Types';

export const CartItemsContext = createContext<CartItem[]>([]);
export const CartItemsSetter = createContext<(cartItems: CartItem[]) => void>(
  () => {}
);
export const CartContext = createContext({
  isCartOpen: false,
  hasCartOpened: false,
  setIsCartOpen: (_: boolean) => {},
  setHasCartOpened: (_: boolean) => {},
});

const CartProvider: FC = ({ children }) => {
  // State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hasCartOpened, setHasCartOpened] = useState(false);

  // Hydrating cart items form localStorage
  useEffect(
    () =>
      setCartItems(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_ITEMS_KEY)!) || []
      ),
    []
  );

  // Saving cart items to localStorage
  useEffect(
    () =>
      localStorage.setItem(
        LOCAL_STORAGE_CART_ITEMS_KEY,
        JSON.stringify(cartItems)
      ),
    [cartItems]
  );

  return (
    <CartItemsContext.Provider value={cartItems}>
      <CartItemsSetter.Provider value={setCartItems}>
        <CartContext.Provider
          value={{ isCartOpen, setIsCartOpen, hasCartOpened, setHasCartOpened }}
        >
          {children}
        </CartContext.Provider>
      </CartItemsSetter.Provider>
    </CartItemsContext.Provider>
  );
};

export default CartProvider;
