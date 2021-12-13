interface Product {
  id: string;
  name: string;
  price: number;
  href: string;
  thumbnail: string;
}

export interface ProductPreviewType extends Product {
  image: string;
  oldPrice?: number;
  createdAt: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Categories =
  | 'all'
  | 'lighting'
  | 'sofas'
  | 'lounge chairs'
  | 'furniture';
