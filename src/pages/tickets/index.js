import React from 'react';
import PageContainer from '../../components/PageContainer';
import { Box, Heading } from '@chakra-ui/react';
import PageTextBox from '../../components/PageTextBox';
import {
  PageHeadingBoxLg,
  PageHeadingBoxSm,
} from '../../components/PageHeadingBox';

const Tickets = () => {
  const TicketsInfo = ({ children }) => {
    return (
      <Heading size={['sm', null, 'md']} p={4}>
        {children}
      </Heading>
    );
  };

  return (
    <PageContainer heading='Tickets'>
      <Box
        color='white'
        textAlign={'center'}
        letterSpacing={3}
        maxW={'800px'}
        pb={8}
      >
        <TicketsInfo>
          Tickets are not currently on-sale for this year's event,
          but will become availible through this website.
        </TicketsInfo>
        <TicketsInfo>
          Please stay tuned for announcements including when they become
          available and for this year's line-up.
        </TicketsInfo>
        <PageHeadingBoxLg p={4}>May 4th 2024</PageHeadingBoxLg>
        <PageHeadingBoxSm>
          UCC's First Congregational Church <br />
          SW Park and Madison <br />
          Portland, OR
        </PageHeadingBoxSm>
      </Box>
    </PageContainer>
  );
};

export default Tickets;
