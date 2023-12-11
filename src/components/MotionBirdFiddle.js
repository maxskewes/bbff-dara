import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdFiddle = () => {
  return (
    <motion.div
      initial={{  y: 40 }}
      animate={{
   
        y: [20, -40, 20, -40, 20, -20],
      }}
      transition={{
        duration: 5,
      }}
    >
      <Box
        w={'16vw'}
        sx={{
          position: 'relative',
        }}
      >
        <motion.img
          style={{ originY: 0.31 }}
          animate={{ rotateX: 1440 }}
          transition={{
            duration: 5,
          }}
          className='bird-instruments-color'
          src='/images/birds-instruments/fiddle-wings.svg'
          alt='bird-fiddle-wings'
          width={'100%'}
          sx={{ position: 'relative' }}
        />
        <Image
          className='bird-instruments-color'
          src='/images/birds-instruments/fiddle-body.svg'
          alt='bird-fiddle-body'
          width={'100%'}
          sx={{ position: 'absolute', top: 1, left: 0 }}
        />
      </Box>
    </motion.div>
  );
};

export default MotionBirdFiddle;
