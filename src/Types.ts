export interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export type Categories =
  | 'all'
  | 'lighting'
  | 'sofas'
  | 'lounge chairs'
  | 'furniture';

export interface ProductPreviewType {
  name: string;
  images: string[];
  href: string;
  price: number;
  discountedPrice?: number;
  status?: 'new' | 'sale';
}
