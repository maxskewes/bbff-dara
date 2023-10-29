import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import PageTextBox from './PageTextBox';

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
        {/* <Button
          position='relative'
          bgGradient='linear(to-l, #003e9b, #5949b4, #ad53cc 80%)'
          overflow='hidden'
          _before={{
            position: 'absolute',
            content: `""`,
            width: '100%',
            height: '100%',
            bgGradient: 'linear(to-r, #003e9b, #5949b4, #ad53cc 80%)',
            transition: '1s',
          }}
          _hover={{
            _before: { opacity: 0 },
          }}
        >
          　
          <Text zIndex='1' color={'white'}>
            CONNECT WALLET TO BUY
          </Text>
        </Button> */}

          <Heading size='2xl' color='white' letterSpacing={3} p={8} mx={12}>
            {heading}
          </Heading>

        {children}
      </Flex>
    </Box>
  );
};

export default PageContainer;
