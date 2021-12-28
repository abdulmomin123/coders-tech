interface BaseProduct {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  thumbnail: string;
}

export interface CartItem extends BaseProduct {
  quantity: number;
}

export interface ProductPreviewType extends BaseProduct {
  image: string;
  createdAt: string;
}

export interface FullProduct extends BaseProduct {
  images: string[];
  description: string;
  reviews: Review[];
  questions: Question[];
}

export interface Reply {
  name: string;
  image: string;
  feedback: string;
  date: string;
}

export interface Review extends Reply {
  id: string;
  rating: number;
  replies: Reply[];
}

export interface Question extends Reply {
  id: string;
  replies: Reply[];
}

export interface User {
  name: string;
  email: string;
  image: string;
  uid: string;
}

export interface NotificationType {
  type: 'error' | 'success';
  text: string;
}
