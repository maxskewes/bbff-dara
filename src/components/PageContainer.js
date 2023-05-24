import { Container, Flex } from '@chakra-ui/react';
import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <Flex
      flexDirection={'column'}
      sx={{
        margin: '2rem',
        minH: '500px',
        minWidth: '100vw',
        maxWidth: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      
  

      {children}

    </Flex>
  );
};

export default PageContainer;
