import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';

const PriceCard = ({ price }) => {
  const { product, unit_amount } = price;

  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      backgroundColor={'whiteAlpha.400'}
      p={8}
      borderRadius={8}
    >
      <Heading color='white' textAlign={'center'} m={2} maxW={'80%'}>
        {product.name}
      </Heading>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        flexGrow={1}
      >


        <Image
          src={product.images[0]}
          alt={product.description}
          maxWidth={'300px'}
          m={4}
        />
      </Flex>
      <Text color='white' m={2} textAlign={'center'}>
        {product.description}
      </Text>
      <Heading color='white' m={2}>
        {(unit_amount / 100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Heading>

      <Button m={8}>Purchase</Button>
    </Flex>
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
