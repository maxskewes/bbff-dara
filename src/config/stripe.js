import Stripe from "stripe";



export const priceobject = async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const prices = await stripe.prices.list({
      limit: 4,
  });
  console.log(prices.data)

  return (prices.data.reverse())
}