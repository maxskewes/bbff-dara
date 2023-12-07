import React from 'react';
import { Box, Center, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MotionBirdFiddle from './MotionBirdFiddle';
import MotionBirdBanjo from './MotionBirdBanjo';
import MotionBirdGuitar from './MotionBirdGuitar';
import MotionBirdMando from './MotionBirdMando';
import MotionBirdBass from './MotionBirdBass';
import MotionBirdBox from './MotionBirdBox';

const Birds = () => {
  return (
    // <Flex width={'100vw'} h={'800px'} flexDirection={'row'} justifyContent={'center'}>
    <Center minW={'100vw'} minH={'500px'} flexDirection={'row'} justifyContent={'space-evenly'}>
      {/* <MotionBirdFiddle />
      <MotionBirdBanjo />
      <MotionBirdGuitar />
      <MotionBirdMando />
      <MotionBirdBass /> */}
      <MotionBirdBox />
    </Center>
    // </Flex>
  );
};

export default Birds;
