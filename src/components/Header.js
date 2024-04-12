import { Box, Show, Hide } from '@chakra-ui/react';
import HeaderSm from './HeaderSm';
import HeaderLg from './HeaderLg';

const Header = () => {
  return (
    <Box
      sx={{
        bgGradient: 'radial(#0000c9, #00024a)',
      }}
    >
      <Hide above='md'>
        <HeaderSm />
      </Hide>
      <Show above='md'>
        <HeaderLg />
      </Show>
    </Box>
  );
};

export default Header;
