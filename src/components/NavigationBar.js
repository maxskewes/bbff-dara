import { Box, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { nav_obj } from '../assets/nav_obj'
import { cormorantGaramond, specialElite  } from "../assets/fonts";




const NavigationBar = () => {
  
  const SiteLink = ({ title, route }) => {
    return (
      <Link href={route}>
        <h2 sx={{ color: '#f2f2f2', fontFamily: 'specialElite' }}>{title}</h2>
      </Link>
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: '#3b3b3b',
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
  );
};

export default NavigationBar;
