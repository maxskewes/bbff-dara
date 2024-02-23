import React from 'react';
import PageContainer from '../../components/PageContainer';
import { Box, Text } from '@chakra-ui/react';
import {
  PageHeadingBoxLg,
  PageHeadingBoxSm,
} from '../../components/PageHeadingBox';
import EventbriteButton from '../../components/EventbriteButton';

const Tickets = () => {
  const TicketsInfo = ({ children }) => {
    return (
      <Text
        color='white'
        textAlign={'center'}
        letterSpacing={3}
        fontSize={['14px', null, '18px', '20px', '24px']}
        fontWeight={600}
        p={[2, null, 4]}
      >
        {children}
      </Text>
    );
  };

  return (
    <PageContainer heading='Event Tickets'>
      <Box maxW={['400px', null, '500px','600px', '800px']} pb={8}>
        <EventbriteButton />
      </Box>
    </PageContainer>
  );
};

export default Tickets;
