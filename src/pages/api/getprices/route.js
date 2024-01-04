// import Stripe from "stripe";
// import { NextApiResponse } from "next/server";

// export async function GET(request) {
//     const stripe = new Stripe(process.env.local.STRIPE_SECRET_KEY)
//     const prices = await stripe.prices.list();

//     return NextApiResponse.json(prices.data.reverse())
// }