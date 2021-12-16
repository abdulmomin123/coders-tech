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
