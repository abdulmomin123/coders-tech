interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
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

interface BaseProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  thumbnail: string;
}

export interface ProductPreviewTypee extends BaseProduct {
  oldPrice?: number;
  image: string;
  createdAt: string;
}

export interface CartItemm extends BaseProduct {
  quantity: string;
}

export interface Review {
  //
}

export interface Question {
  //
}

export interface Reply {
  //
}

export interface FullProduct extends BaseProduct {
  images: string[];
  description: string;
  reviews: Review[];
  question: Question[];
  replies: Reply[];
}

export interface NotificationType {
  type: 'error' | 'success';
  text: string;
}

export interface User {
  name: string;
  email: string;
  image: string;
  uid: string;
}
