import { createContext, FC, useState } from 'react';
import { FullProduct } from '../Types';

export const CurrentProductContext = createContext<FullProduct | null>(null);
export const CurrentProductsSetter = createContext<
  (product: FullProduct) => void
>(() => {});

const CurrentProductsProvider: FC = ({ children }) => {
  const [product, setProduct] = useState<FullProduct | null>(null);

  return (
    <CurrentProductContext.Provider value={product}>
      <CurrentProductsSetter.Provider value={setProduct}>
        {children}
      </CurrentProductsSetter.Provider>
    </CurrentProductContext.Provider>
  );
};

export default CurrentProductsProvider;
