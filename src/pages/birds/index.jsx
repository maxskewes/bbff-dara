import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import PageContainer from '../../components/PageContainer';
import MotionBirdBox from '../../components/MotionBirdBox';

const Birds = () => {
  return (
    <PageContainer heading={'Bird Box'}>
      <Box
        position={'relative'}
        width='100%'
        backgroundColor={'white'}
        height='400px'
        minH={'400px'}
      >
        <Box position={'absolute'} width='100%' m={4} p={4}>
          {/* <MotionBirdBox /> */}
        </Box>
        <Box>
          <Center margin='auto'>
            <Box margin='auto'>
              <h1> Let's have an aul' hoon.</h1>
            </Box>
          </Center>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Birds;
