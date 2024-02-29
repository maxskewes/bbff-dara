import { Box, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { nav_obj } from '../assets/nav_obj';

const NavigationBar = () => {
  const NavBarText = ({ children }) => {
    return (
      <Text
        fontSize={['16px', null, null, '18px', '20px']}
        fontWeight={600}
        letterSpacing={1.5}
        color='#090173'
        _hover={{ color: 'white' }}
      >
        {children}
      </Text>
    );
  };

  const SiteLink = ({ title, route }) => {
    return (
      <Link href={route}>
        <NavBarText>{title}</NavBarText>
      </Link>
    );
  };

  return (
    <Box position='relative' zIndex={2}>
      <Box
        paddingTop={2}
        px={[0, null, null, '5%', '10%']}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {nav_obj.map((nav, i) => {
          return <SiteLink key={i} title={nav.title} route={nav.route} />;
        })}
      </Box>
      <Image
        src='/images/waves.svg'
        alt='Wave Border'
        position='absolute'
        top='-16px'
        zIndex={-1}
        height={'60px'}
        minHeight={'60px'}
        maxHeight={'60px'}
      />
    </Box>
  );
};

export default NavigationBar;
