import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const PageContainer = ({ heading, children }) => {
  return (
    <Box position={'relative'}>
      <Flex
        flexDirection={'column'}
        bgGradient='linear(blue.900 0%, blue.600 50%, blue.900 90%)'
        sx={{
          padding: [2, 4, 6, 8],
          paddingBottom: ['0', null, '1rem', '1.5rem', '2rem'],
          minH: '500px',
          maxWidth: '100vw',
          justifyContent: 'flext-start',
          alignItems: 'center',
        }}
      >
        <Text
          fontSize={['18px', null, '24px', '28px', '32px']}
          fontWeight={600}
          color='white'
          letterSpacing={3}
          p={[2, null, 4, 6]}
          mx={12}
          textAlign={'center'}
        >
          {heading}
        </Text>
        {children}
      </Flex>
    </Box>
  );
};

export default PageContainer;
