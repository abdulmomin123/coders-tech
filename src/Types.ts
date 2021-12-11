export interface CartItem {
  image: string;
  title: string;
  price: string;
  quantity: number;
}

export type Categories =
  | 'all'
  | 'lighting'
  | 'sofas'
  | 'lounge chairs'
  | 'furniture';
