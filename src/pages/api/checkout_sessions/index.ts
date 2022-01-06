import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { stripe } from '../../../lib/stripe/stripe';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // If it's not a post request
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const line_items = req.body;

    // Create Checkout Sessions from body params
    const params: Stripe.Checkout.SessionCreateParams = {
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: `${req.headers.origin}/`,
      cancel_url: `${req.headers.origin}/`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    res.status(200).json(checkoutSession);
  } catch (err) {
    // Handling error
    res.status(500).json({
      statusCode: (err as any).statusCode || 500,
      message: (err as any).message,
    });
  }
};

export default handler;
