import { Box, Grid } from '@chakra-ui/react';

const FormContainer = ({ children }) => {
  return (
    <Box width='100%' maxWidth={'1000px'} pt={4}>
      <Grid
        templateColumns='repeat(2, 1fr)'
        gap={4}
        p={6}
        pb={10}
        boxShadow={'2xl'}
        bg='white'
        borderRadius={6}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default FormContainer;
