import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const PageContainer = ({ heading, children }) => {
  return (
    <Flex
      flexDirection={'column'}
      sx={{
        margin: ['.5rem', '1rem', '1.25rem', '2rem'],
        paddingBottom: ['0', null, '1rem', '1.5rem', '2rem'],
        minH: '500px',
        maxWidth: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Heading sx={{ paddingBottom: '1rem' }}>{heading}</Heading>
      {children}
    </Flex>
  );
};

export default PageContainer;
