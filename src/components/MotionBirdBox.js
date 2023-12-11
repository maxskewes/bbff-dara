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
      initial={{ opacity: 1 }}
      animate={{
        opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      }}
      transition={{
        duration: 5.2,
      }}
      sx={{ zIndex: 3, width: '100vw', height: 'auto', top: 0, left: 0 }}
    >
      {/* <Box sx={{ paddingTop: 0 }}> */}
        <motion.div
          initial={{
            x: 1000,
            y: 0,
          }}
          animate={{
            x: 0,
            // y: [-40, 20, -40, 0],
          }}
          transition={{
            duration: 5,
          }}
          sx={{ width: '100vw' }}
        >
          <Flex width={'100vw'} maxWidth='800px' minH={'400px'}
          flexDirection={'row'} justifyContent={'space-around'}>
            <MotionBirdFiddle />
            <MotionBirdBanjo />
            <MotionBirdGuitar />
            <MotionBirdMando />
            <MotionBirdBass />
          </Flex>
        </motion.div>
      {/* </Box> */}
    </motion.div>
  );
};

export default MotionBirdBox;
