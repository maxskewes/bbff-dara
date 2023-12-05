import React from 'react';
import { Box } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';
import { PageHeadingBoxSm } from '../../components/PageHeadingBox';

const Schedule = () => {
  return (
    <PageContainer heading={'Schedule'}>
      <Box color='white' textAlign={'center'} letterSpacing={3} m={12}>
        <PageHeadingBoxSm>
          The 2024 festival schedule is yet to be announced.
        </PageHeadingBoxSm>
        <PageHeadingBoxSm>
          Please look our previous year's schedules to know what to expect.
        </PageHeadingBoxSm>
      </Box>
    </PageContainer>
  );
};

export default Schedule;
