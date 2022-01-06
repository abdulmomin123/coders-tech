import Stripe from 'stripe';
import { Stripe as StripeClient, loadStripe } from '@stripe/stripe-js';
import { getProducts } from '../firebase/firebase';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

let stripePromise: Promise<StripeClient | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }

  return stripePromise;
};

export const uploadProducts = async () => {
  // Getting all products
  const furnitureProds = await getProducts('furniture');
  const lightingProds = await getProducts('lighting');
  const rugsProds = await getProducts('rugs');
  const bathroomProds = await getProducts('bathroom');

  const products = [
    ...furnitureProds,
    ...lightingProds,
    ...rugsProds,
    ...bathroomProds,
  ];

  for (let product of products) {
    // const res = await stripe.products.del(id);
    const { id, name, price } = product;

    // Create product
    const stripeProduct = await stripe.products.create({
      id,
      name: name,
    });

    // Add price of the product
    await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(price * 100),
      currency: 'usd',
    });
  }
};
