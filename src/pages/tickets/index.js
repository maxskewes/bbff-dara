import React from 'react';
import PageContainer from '../../components/PageContainer';
import { Box, Text, Flex } from '@chakra-ui/react';
import EventbriteButton from '../../components/EventbriteButton';
import DonateButton from '../../components/DonateButton';

const Tickets = () => {
  const TicketsInfo = ({ topText, bottomText, children }) => {
    return (
      <Box maxW={['400px', null, '500px', '600px', '800px']} pb={8}>
        <Box width='100%' pt={4}>
          <Flex
            p={6}
            px={[4, 6, 10, 16, 20]}
            boxShadow={'2xl'}
            bg='white'
            borderRadius={6}
            w={'full'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text textAlign={'center'} text>
              {topText}
            </Text>
            {children}
            <Text textAlign={'center'} maxWidth={['360px']}>
              {bottomText}
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  };

  return (
    <PageContainer heading='Event Tickets'>
      <Flex flexDirection={'column'} pb={[12]}>
        <TicketsInfo
          topText={'Click below to purchase tickets.'}
          bottomText={"You will be redirected to Eventbrite's website."}
        >
          <EventbriteButton />
        </TicketsInfo>

        <TicketsInfo
          topText={'Click below to donate.'}
          bottomText={
            <>
              You will be redirected to Eventbrite&lsquo;s website. Follow the
              ticket link to the pop-up window and scroll down to the{' '}
              <b>&ldquo;Donations&rdquo;</b> section. <br /> Thank you for your
              support.
            </>
          }
        >
          <DonateButton />
        </TicketsInfo>
      </Flex>
    </PageContainer>
  );
};

export default Tickets;
