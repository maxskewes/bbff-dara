import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const PageTextBox = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: '1000px',
        mx: [0, null, '1rem', '2rem'],
        marginBottom: '2rem',
      }}
    >
      <Text>
        <span>&emsp;&emsp;</span>
        {children}
      </Text>
    </Box>
  );
};

export default PageTextBox;
