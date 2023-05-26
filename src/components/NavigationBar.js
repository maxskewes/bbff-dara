import { Box, Heading, Button, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { nav_obj } from '../assets/nav_obj';
import { cormorantGaramond, specialElite } from '../assets/fonts';

const NavigationBar = () => {
  const NavBarText = ({ children }) => {
    return (
      <Text fontSize={['16px', null, null, '18px', '20px']} color='#090173'>
        {children}
      </Text>
    );
  };

  const SiteLink = ({ title, route }) => {
    return (
      <Link href={route}>
        <NavBarText sx={{ color: '#090173', fontFamily: 'specialElite' }}>
          {title}
        </NavBarText>
      </Link>
    );
  };

  return (
    <Box position='relative'   zIndex={2}>
      <Box
        zIndex={2}
        sx={{
          padding: '.5em .5rem .25rem',
          backgroundColor: '#4a8fff',
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
fill='#4a8fff'
        src='/images/waves.svg'
        alt='Wave Border'
        position='absolute'
        top='-10px'
        zIndex={-1}
      />
    </Box>
  );
};

export default NavigationBar;
