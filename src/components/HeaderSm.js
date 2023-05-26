'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Icon, Text, Image, Flex, Hide } from '@chakra-ui/react';
import { ImMusic } from 'react-icons/im';
import { nav_obj } from '../assets/nav_obj';
import NavigationBar from './NavigationBar';

const HeaderSm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
          <Flex
            sx={{
              bgGradient: 'radial(#0000c9, #00024a)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src='/images/static-header-nobg.svg'
              alt='Site Header'
              sx={{ width: 'auto', height: 'auto', position: 'relative' }}
            />
          </Flex>
        </Box>
        <Hide above='md'>
          <Box sx={{ position: 'absolute', top: '40%', right: 0 }}>
            <MenuToggle handleToggle={handleToggle} isOpen={isOpen} />
          </Box>
        </Hide>
      </Box>
      <Hide below='md'>
        <NavigationBar />
      </Hide>
      <Hide above='md'>
        <SmLinkContainer isOpen={isOpen} />
      </Hide>
    </Box>
  );
};

const MenuToggle = ({ handleToggle, isOpen }) => {
  return (
    <Box onClick={handleToggle} m={2} borderRadius={6}>
      {isOpen ? (
        <Icon as={ImMusic} bgColor={'#4a8fff'} color={'#090173'} w={8} h={8} p={1} />
      ) : (
        <Icon as={ImMusic} color={'#4a8fff'} w={8} h={8} p={1} borderRadius={6}/>
      )}
    </Box>
  );
};

const SmLink = ({ key, href, title }) => {
  return (
    <Link key={key} href={href}>
      <Text>{title}</Text>
    </Link>
  );
};

const SmLinkContainer = ({ isOpen }) => {
  return isOpen ? (
    <Box
      sx={{
        backgroundColor: '#3b3b3b',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100vw',
        height: 'auto',
      }}
    >
      {nav_obj.map((nav, i) => {
        return <SmLink key={i} title={nav.title} href={nav.route} />;
      })}
    </Box>
  ) : null;
};

export default HeaderSm;
