import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import { firestore, getUserFromEmail } from '../../../lib/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { stripe } from '../../../lib/stripe/stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Return error if it's not a post request
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // Successfully constructed event
    console.log('✅ Success:', event.id);
  } catch (err) {
    // On error, log and return the error message
    console.error(`❌ Error message: ${(err as any).message}`);
    return res.status(400).send(`Webhook Error: ${(err as any).message}`);
  }

  // When the user subscribes
  if (event.type === 'checkout.session.completed') {
    const data = event.data.object as Stripe.Checkout.Session;

    // Customer email
    const { email } = data.customer_details!;

    // User info from database
    const user = await getUserFromEmail(email!);

    if (!user) return res.json({ received: true });

    const lineItems = await stripe.checkout.sessions.listLineItems(data.id, {
      limit: 80,
    });

    lineItems.data.forEach(async ({ price }) => {
      // Retrieve product details
      const product = await stripe.products.retrieve(price!.product as string);

      // Add the product to users toBeReviewed list in DB
      setDoc(doc(firestore, 'users', user.uid, 'toBeReviewed', product.id), {
        name: product.name,
        category: price!.nickname,
        image: product.images[0],
      });
    });
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
};

export default cors(webhookHandler as any);
