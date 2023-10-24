import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const PageTextBox = ({ children }) => {
  return (
    <Center
      sx={{
        position: 'relative',
        padding: 1,
        margin: 1,
        marginBottom: 6,
      }}
    >
      <Box
        position={'absolute'}
        filter='auto' blur='10px'
        width={'100%'}
        height={'100%'}
        boxShadow='dark-lg'
        rounded='3xl'
        bg='blacker'
  opacity={.8}
      />
      <Box
        position={'relative'}
        maxWidth={'1000px'}
        p={0}
        my={4}
        mx={12}
        rounded='md'
        // bg='black'
      >
        <Text fontSize={['sm', 'md', null, 'lg']} color={'white'}>
          <span>&emsp;&emsp;</span>
          {children}
        </Text>
      </Box>
    </Center>
  );
};

export default PageTextBox;
