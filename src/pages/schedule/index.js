import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';

const Schedule = () => {
  return (
    <PageContainer heading={'Schedule'}>
      <Box color='white' textAlign={'center'} letterSpacing={3} m={12}>
        <Heading size={'xl'}>
          The 2024 festival schedule is yet to be announced.
        </Heading>
        <Heading size={'xl'}>
          Please look our previous year's schedules to know what to expect.
        </Heading>
      </Box>
    </PageContainer>
  );
};

export default Schedule;
