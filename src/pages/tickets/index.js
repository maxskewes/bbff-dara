import React from 'react';
import PageContainer from '../../components/PageContainer';
import { Box, Heading } from '@chakra-ui/react';
import PageTextBox from '../../components/PageTextBox';

const Tickets = () => {
  return (
    <PageContainer heading='Tickets'>
      <Box color='white' textAlign={'center'} letterSpacing={3} maxW={'800px'} pb={8}>
        <Heading size='md' p={4}>
          Tickets are not currently on-sale for this year's event.
        </Heading>
        <Heading size='md' p={4}>
          Please stay tuned for announcements including when they become
          available and for this year's line-up.
        </Heading>
        <Heading size='lg' p={4}>
          May 4th 2024
        </Heading>
        <Heading size='md' p={4}>
          UCC's First Congregational Church <br />
          SW Park and Madison <br />
          Portland, OR
        </Heading>
      </Box>
    </PageContainer>
  );
};

export default Tickets;
