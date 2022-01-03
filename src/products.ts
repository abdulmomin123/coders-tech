import { serverTimestamp } from 'firebase/firestore';
import { RawProduct } from './Types';

export const PRODUCTS: {
  [key: string]: RawProduct[];
} = {
  furniture: [
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
  ],
  lighting: [],
  rugs: [],
  bathroom: [],
};
