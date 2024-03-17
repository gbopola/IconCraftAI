import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let { priceId, userId } = await request.json();

  const session = await stripe.checkout.sessions.create({
    client_reference_id: userId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/generate",
    cancel_url: "http://localhost:3000/generate",
  });

  return NextResponse.json(session.url);
}
