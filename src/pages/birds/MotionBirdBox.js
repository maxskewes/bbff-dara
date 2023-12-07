import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MotionBirdFiddle from './MotionBirdFiddle';
import MotionBirdBanjo from './MotionBirdBanjo';
import MotionBirdGuitar from './MotionBirdGuitar';
import MotionBirdMando from './MotionBirdMando';
import MotionBirdBass from './MotionBirdBass';

const MotionBirdBox = () => {
  return (
    <motion.div
    initial={{ opacity: 1}}
    animate={{
      opacity: [1, 1,1, 1, 1, 1, 1, 1, 1, 0],
    }}
    transition={{
      duration: 5.2,
    }}
    sx={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, left: 0}}
    >
      
    <Box sx={{ paddingTop: '-10rem' }}>
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
          y: [-40, 20, -40, 20, -40, -20],
        }}
        transition={{
          duration: 5,
        }}
        sx={{ width: '100vw' }}
      >
        <Flex width={'100%'} flexDirection={'row'} justifyContent={'space-between'}>
          <MotionBirdFiddle />
          <MotionBirdBanjo />
          <MotionBirdGuitar />
          <MotionBirdMando />
          <MotionBirdBass />
        </Flex>
      </motion.div>
    </Box>
    </motion.div>
  );
};

export default MotionBirdBox;
