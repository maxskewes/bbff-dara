import Stripe from 'stripe';
import PageContainer from '../../components/PageContainer';
import PriceCard from '../../components/PriceCard';
import { SimpleGrid } from '@chakra-ui/react';

const Merch = ({ prices = [] }) => {
  return (
    <PageContainer heading='Merch Test'>
      <SimpleGrid columns={[1, 2]} spacing={8} maxW={1000} mb={100}>
        {prices &&
          prices.map((price) => <PriceCard price={price} key={price.id} />)}
      </SimpleGrid>
    </PageContainer>
  );
};

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product'],
  });
  // console.log(prices);

  return {
    props: {
      prices,
    },
  };
}

export default Merch;
