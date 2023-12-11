import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdGuitar = () => {
  return (
    <motion.div
      initial={{ y: 40 }}
      animate={{

        y: [20, -40, 20, -40, 20, -20],
      }}
      transition={{
        duration: 5,
      }}
    >
      <Box
        w={'16%'}
        sx={{
          position: 'relative',
        }}
      >
        <motion.img
          style={{ originY: 0.17 }}
          animate={{ rotateX: 1440 }}
          transition={{
            duration: 5,
          }}
          className='bird-instruments-color'
          src='/images/birds-instruments/guitar-wings.svg'
          alt='bird-guitar-wings'
          width={'100%'}
          sx={{ position: 'relative' }}
        />
        <Image
          className='bird-instruments-color'
          src='/images/birds-instruments/guitar-body.svg'
          alt='bird-guitar-body'
          width={'100%'}
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
      </Box>
    </motion.div>
  );
};

export default MotionBirdGuitar;
