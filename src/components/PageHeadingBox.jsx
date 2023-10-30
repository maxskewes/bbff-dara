import React from 'react';
import { Heading } from '@chakra-ui/react';

export const PageHeadingBoxLg = ({ children, p }) => {
  return (
    <Heading
      size={['lg', 'xl', '2xl', '2xl', '3xl']}
      p={p}
      color={'white'}
      textAlign={'center'}
      letterSpacing={[2, null, null, 3]}
    >
      {children}
    </Heading>
  );
};

export const PageHeadingBoxSm = ({ children }) => {
  return (
    <Heading
      size={['xs', 'sm', 'md', 'lg', 'xl']}
      p={1}
      color={'white'}
      textAlign={'center'}
      letterSpacing={[1.5, null, null, 2]}
    >
      {children}
    </Heading>
  );
};
