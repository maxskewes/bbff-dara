import axios from 'axios';
import { useState, useEffect } from 'react';
import PageContainer from '../../components/PageContainer';
import PriceCard from '../../components/PriceCard';
import { PriceObject } from '../../config/stripe';

const Merch = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get({PriceObject});
    setPrices(data);
    console.log(data);
  };

  return (
    <PageContainer heading='Merch'>
    <section className='p-8 bg-white'>
      <div className='mx-auto max-w-4xl text-center mt-10 items-center'>
        <h2 className='text-3xl font-semibold leading-7 text-blue-700'>Merchandise</h2>
        <p className='mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Title Here
        </p>
        <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center'>
          A space for subheading
        </p>
      </div>

      <div className='grid  grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1040px] items-center mx-auto'>
        {prices && prices.map((price) => <PriceCard price={price} key={price.id} />)}
      </div>
    </section>
    </PageContainer>
  );
};

export default Merch;
