'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Icon, Text, Image, Flex, Hide } from '@chakra-ui/react';
import { nav_obj } from '../assets/nav_obj';
import { FiMenu } from 'react-icons/fi';

const HeaderSm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Flex
        h={12}
        justifyContent='space-between'
        alignItems='center'
        px={2}
        sx={{
          bgGradient: 'radial(#0000c9, #00024a)',
        }}
      >
        <Image
          src='/images/bridgetown-bluegrass.svg'
          alt='bridgetown bluegrass'
          width={['70%', '55%']}
          marginLeft={['14%', '24%']}
          marginBottom={1}
        />
        <Icon
          as={FiMenu}
          w={8}
          h={8}
          py={1}
          onClick={handleToggle}
          isOpen={isOpen}
          color={'#4a8fff'}
        />
      </Flex>

      <SmLinkContainer isOpen={isOpen} />
    </>
  );
};

// const MenuToggle = ({ handleToggle, isOpen }) => {
//   return (
//     <Flex
//       flexDirection={'column'}
//       onClick={handleToggle}
//       m={2}
//       borderRadius={6}
//       cursor={'pointer'}
//       color={'#4a8fff'}
//       _hover={{ color: 'white' }}
//     >
//       {isOpen ? (
//         <Icon as={FiMenu} w={8} h={8} p={1} />
//       ) : (
//         <Icon as={FiMenu} w={8} h={8} p={1} />
//       )}
//     </Flex>
//   );
// };

const SmLink = ({ key, href, title }) => {
  return (
    <Link key={key} href={href}>
      <Text
        p={0.5}
        fontWeight={600}
        letterSpacing={1.5}
        color='#00024a'
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
        bgGradient: 'radial(#c2daff 0%, #0000c9 100%)',
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
