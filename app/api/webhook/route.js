import { NextResponse } from "next/server";
import User from "../../../models/User";
import { connectMongoDB } from "../../../lib/mongodb";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export async function POST(request) {
  await connectMongoDB();

  // This is your Stripe CLI webhook secret for testing your endpoint locally.
  const webhookSecret =
    "whsec_03a6a040bab9505c4e5e60fee012069dcfa3c23142cc0ff7eda5b6f8c03ecd5f";

  const buf = await request.text();
  const sig = request.headers.get("stripe-signature");

  let event;

  event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

  const user = await User.findById(event.data.object.client_reference_id);

  // getting to the data we want from the event
  if (event.type === "checkout.session.completed") {
    switch (event.data.object.amount_total) {
      case 500:
        user.credits += 50;
        break;
      case 900:
        user.credits += 100;
        break;
      case 2000:
        user.credits += 250;
        break;
      default:
        break;
    }

    await user.save();

    return NextResponse.json(
      { message: "Payment successful" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Payment failed" }, { status: 400 });
  }
}
