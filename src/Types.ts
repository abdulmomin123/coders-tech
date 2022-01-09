import { FieldValue } from 'firebase/firestore';

interface MinimalProduct {
  name: string;
  price: number;
  oldPrice?: number;
}

interface BaseProduct extends MinimalProduct {
  id: string;
  category: string;
  thumbnail: string;
  priceId: string;
}

export interface CartItem extends BaseProduct {
  quantity: number;
}

export interface SearchResultType extends MinimalProduct {
  objectID: string;
  category: string;
  image: string;
}

export interface ProductPreviewType extends BaseProduct {
  image: string;
  createdAt: { seconds: number };
}

export interface FullProduct extends BaseProduct {
  images: string[];
  description: string;
  reviews: Review[];
  questions: Question[];
}

export interface ReviewProductType {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface RawProduct extends MinimalProduct {
  image: string;
  description: string;
  images: string[];
  createdAt: FieldValue;
}

export interface Reply {
  name: string;
  image: string;
  feedback: string;
  replies: Reply[];
  date: { seconds: number };
}

export interface Review extends Reply {
  id: string;
  rating: number;
}

export interface Question extends Reply {
  id: string;
}

export interface User {
  uid: string;
  name: string;
  email: string;
  image: string;
  toBeReviewed: ReviewProductType[];
}

export interface NotificationType {
  type: 'error' | 'success';
  text: string;
}
