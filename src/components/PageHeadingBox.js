import React from 'react';
import { Text } from '@chakra-ui/react';

export const PageHeadingBoxLg = ({ children, p }) => {
  return (
    <Text
      fontSize={['24px', null, '28px', '32px', '36px']}
      fontWeight={600}
      p={p}
      color={'white'}
      textAlign={'center'}
      letterSpacing={[2, null, null, 3]}
    >
      {children}
    </Text>
  );
};

export const PageHeadingBoxSm = ({ children }) => {
  return (
    <Text
      fontSize={['18px', null, '24px', '28px', '32px']}
      fontWeight={600}
      p={1}
      color={'white'}
      textAlign={'center'}
      letterSpacing={[1.5, null, null, 2]}
    >
      {children}
    </Text>
  );
};
