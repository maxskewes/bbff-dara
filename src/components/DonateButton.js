import { Button, Text, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import useEventbrite from 'react-eventbrite-popup-checkout';
import FormContainer from './FormContainer';

const DonateButton = ({ topText, buttonText, bottomText }) => {
  const handleOrderCompleted = React.useCallback(() => {
    console.log('Order was completed successfully');
  }, []);
  const modalButtonCheckout = useEventbrite({
    eventId: '805362008447',
    modal: true,
    onOrderComplete: handleOrderCompleted,
  });

  return (
    <div id='my-app'>
      {/* guard for null - resolves when Eventbrite loads */}
      {modalButtonCheckout && (
        <Button
          id={modalButtonCheckout.id}
          type='button'
          minWidth={['100%', '80%']}
          bgGradient='linear(to-l, red.900 0%, red.600 50%, red.900 90%)'
          _hover={{
            bgGradient: 'linear(to-l, red.600 0%, red.400 50%, red.600 90%)',
            color: 'white',
          }}
          color={'yellow'}
          my={8}
        >
          <Text
            fontWeight={600}
            letterSpacing={1.5}
            textTransform={'uppercase'}
          >
            Donate
          </Text>
        </Button>
      )}
    </div>
  );
};

export default DonateButton;
