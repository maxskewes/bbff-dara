'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box, Icon, Text, Image, Flex, Hide } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { nav_obj } from '../assets/nav_obj';
import { FiMenu } from 'react-icons/fi';

const HeaderSm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const SmLink = ({ key, href, title }) => {
    return (
      <Link key={key} href={href}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          minW={'100vw'}
          color='#00024a'
          _hover={{ color: 'white' }}
        >
          <Text
            p={0.5}
            fontWeight={600}
            letterSpacing={1.5}
            textDecoration={'none'}
          >
            {title}
          </Text>
        </Flex>
      </Link>
    );
  };

  // const SmLinkContainer = ({ isOpen }) => {
  //   return isOpen ? (
  //     <motion.div
  //       initial={{ opacity: 0, y: -40 }}
  //       animate={{
  //         opacity: 1,
  //         y: 0,
  //       }}
  //       transition={{
  //         duration: 0.3,
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           bgGradient: 'radial(#c2daff 0%, #0000c9 100%)',
  //           display: 'flex',
  //           flexDirection: 'column',
  //           justifyContent: 'space-around',
  //           alignItems: 'center',
  //           width: '100vw',
  //           height: 'auto',
  //         }}
  //         ref={menuRef}
  //       >
  //         {nav_obj.map((nav, i) => {
  //           return <SmLink key={i} title={nav.title} href={nav.route} />;
  //         })}
  //       </Box>
  //     </motion.div>
  //   ) : null;
  // };

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
          cursor={'pointer'}
        />
      </Flex>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Box
            ref={menuRef}
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
        </motion.div>
      )}
    </>
  );
};

export default HeaderSm;
