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
