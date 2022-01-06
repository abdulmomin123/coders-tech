import Stripe from 'stripe';
import { Stripe as StripeClient, loadStripe } from '@stripe/stripe-js';
import { getProducts } from '../firebase/firebase';
import { firestore } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

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

export const getSession = async (
  lineItems: { price: string; quantity: number }[]
) =>
  await (
    await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lineItems),
    })
  ).json();

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
    const { category, id, name, price } = product;

    try {
      // Create product
      const stripeProduct = await stripe.products.create({
        id,
        name: name,
      });

      // Add price of the product
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: Math.round(price * 100),
        currency: 'usd',
      });

      // Add priceId to products in DB
      updateDoc(doc(firestore, 'products', 'categories', category, id), {
        priceId: stripePrice.id,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
