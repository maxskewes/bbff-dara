import { Button, Text, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import useEventbrite from 'react-eventbrite-popup-checkout';
import FormContainer from './FormContainer';

const EventbriteButton = () => {
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
      <Box width='100%' pt={4}>
      <Flex
        p={6}
        px={[4, 6, 10, 16, 20]}
        boxShadow={'2xl'}
        bg='white'
        borderRadius={6}
        w={'full'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
      >
          <Text textAlign={'center'} text>Click below to purchase tickets.</Text>
          {/* guard for null - resolves when Eventbrite loads */}
          {modalButtonCheckout && (
            <Button
              id={modalButtonCheckout.id}
              type='button'
              width={['100%','80%']}
              bgGradient='linear(to-l, blue.900 0%, blue.600 50%, blue.900 90%)'
              _hover={{
                bgGradient:
                  'linear(to-l, blue.600 0%, blue.400 50%, blue.600 90%)',
              }}
              my={8}
            >
              <Text
                color={'yellow'}
                fontWeight={600}
                letterSpacing={1.5}
                textTransform={'uppercase'}
              >
                Get Tickets
              </Text>
            </Button>
          )}

          <Text textAlign={'center'}>You will be redirected to Eventbrite's website.</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default EventbriteButton;
