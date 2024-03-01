import React from 'react';
import { Button, Text, Center } from '@chakra-ui/react';

const ContactButton = ({ isLoading, disabled, onClick, children }) => {
  return (
    <Center pb={8}>
      <Button
        width={['200px', 'auto']}
        height={'auto'}
        bgGradient='linear(to-l, blue.900 0%, blue.600 50%, blue.900 90%)'
        isLoading={isLoading}
        disabled={disabled}
        onClick={onClick}
        cursor={'pointer'}
        _hover={{
          bgGradient: 'linear(to-l, blue.600 0%, blue.400 50%, blue.600 90%)',
        }}
      >
        <Text
          padding={[2]}
          color={'white'}
          fontWeight={600}
          letterSpacing={1.5}
          lineHeight={[1.5]}
          textTransform={'none'}
          whiteSpace={'normal'}
        >
          {children}
        </Text>
      </Button>
    </Center>
  );
};

export default ContactButton;
