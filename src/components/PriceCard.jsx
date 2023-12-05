import axios from 'axios';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';

const PriceCard = ({ price }) => {
  // POST request
  const handlePurchase = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      '/api/payment',
      {
        priceId: price.id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    window.location.assign(data);
  };

  return (
    <Box>
      <Text>{price.nickname}</Text>

      <Box>
        <Image>
          <img
            src={'/images/dummy-images/local-image.png'}
            alt={'images must be added locally with price api'}
          />
        </Image>
      </Box>

      <Box>
        <h1 className='text-5xl font-bold'>
          {(price.unit_amount / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h1>
      </Box>

      <Box>
        <Button onClick={handlePurchase}>Purchase</Button>
      </Box>
    </Box>
  );
};

export default PriceCard;

// <div className='auto-rows-fr shadow-2xl flex flex-col grow-1 justify-center items-center text-center m-4 p-4 max-w-[1040px]'>
// <div className='py-4 font-bold'>
//   {/* Nickname is set under Pricing/Additional/Price Description */}
//   <h4 className='text-3xl'>{price.nickname}</h4>

// </div>

// <div className='pt-4 w-full flex justify-center'>
//   <img
//     className='max-h-[200px] object-fit'
//     src={'/images/local-image.png'}
//     alt={'images must be added locally with price api'}
//   />
// </div>

// <div className='flex flex-col text-center pt-4'>
//   <h1 className='text-5xl font-bold'>

//     {(price.unit_amount / 100).toLocaleString('en-US', {
//           style: 'currency',
//           currency: 'USD'
//     })}
//   </h1>
// </div>
// <div className='w-full pt-8'>
//   <button
//     className='p-2 w-full text-center rounded-lg bg-blue-700 text-sm font-medium text-white shadow-md hover:bg-blue-500 hover:text-blue-900'
//     onClick={handlePurchase}
//   >
//     Purchase
//   </button>
// </div>
// </div>
