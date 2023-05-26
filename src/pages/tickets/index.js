import React from 'react';
import PageContainer from '../../components/PageContainer';
import { Heading } from '@chakra-ui/react';
import PageTextBox from '../../components/PageTextBox';

const Tickets = () => {
  return (
    <PageContainer heading='Tickets'>
      <Heading as='h3' size='lg'>
        October 7th 2023
      </Heading>
      <Heading as='h4' size='md'>
        Hosted at UCC's First Congregational Church on SW Park and Madison
      </Heading>
      <Heading as='h4' size='md'>
        Tickets are not currently on-sale for this year's event.
      </Heading>
      <Heading as='h4' size='md'>
        Please stay tuned for announcements including when they become available
        and for this year's line-up!
      </Heading>
    </PageContainer>
  );
};

export default Tickets;
