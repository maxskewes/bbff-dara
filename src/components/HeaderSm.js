'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Icon, Text, Image, Flex, Hide } from '@chakra-ui/react';
import { IoIosMusicalNote, IoIosMusicalNotes } from 'react-icons/io';
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
    <Flex
      flexDirection={'column'}
      onClick={handleToggle}
      m={2}
      borderRadius={6}
      cursor={'pointer'}
      color={'#4a8fff'}
      _hover={{ color: 'white' }}
    >
      {isOpen ? (
        <Icon as={IoIosMusicalNote} w={8} h={8} p={1} />
      ) : (
        <Icon as={IoIosMusicalNotes} w={8} h={8} p={1} />
      )}
      <Text fontSize={'12px'} lineHeight={0.6}>
        menu
      </Text>
    </Flex>
  );
};

const SmLink = ({ key, href, title }) => {
  return (
    <Link key={key} href={href}>
      <Text
        p={0.5}
        fontWeight={600}
        letterSpacing={1.5}
        color='#090173'
        _hover={{ color: 'white' }}
      >
        {title}
      </Text>
    </Link>
  );
};

const SmLinkContainer = ({ isOpen }) => {
  return isOpen ? (
    <Box
      sx={{
        backgroundColor: '#4a8fff',
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
