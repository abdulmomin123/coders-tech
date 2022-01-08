import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import { getUserFromEmail } from '../../../lib/firebase/firebase';
import { stripe } from '../../../lib/stripe/stripe';

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

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
  const sig = req.headers['stripe-signature']!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${(err as any).message}`);
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

    // Add the purchased products to users toBeReviewed list in DB
    const lineItems = await stripe.checkout.sessions.listLineItems(data.id, {
      limit: 80,
    });

    lineItems.data.forEach(item => console.log(item.price?.product));
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
};

export default cors(webhookHandler as any);
