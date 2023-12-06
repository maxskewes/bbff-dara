import Stripe from "stripe";
import { NextApiResponse } from "next";

export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.prices.list({
        limit: 4,
    });

    return NextApiResponse.json(prices.data.reverse())
}