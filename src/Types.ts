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
