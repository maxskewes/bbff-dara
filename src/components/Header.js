import { Box, Show } from '@chakra-ui/react';
import HeaderSm from './HeaderSm';
import HeaderLg from './HeaderLg';

const Header = () => {
  return (
    <Box
      sx={{
        bgGradient: 'radial(#0000c9, #00024a)',
      }}
    >
      <Show below='sm'>
        <HeaderSm />
      </Show>
      <Show above='sm'>
      <HeaderLg />
      </Show>
    </Box>
  );
};

export default Header;
