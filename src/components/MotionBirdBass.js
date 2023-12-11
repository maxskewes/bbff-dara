import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdBass = () => {
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
        w={'24%'}
        sx={{
          position: 'relative',
        }}
      >
        <motion.img
          style={{ originY: 0.16 }}
          animate={{ rotateX: 1440 }}
          transition={{
            duration: 5,
          }}
          className='bird-instruments-color'
          src='/images/birds-instruments/bass-wings.svg'
          alt='bird-bass-wings'
          width={'100%'}
          sx={{ position: 'relative' }}
        />
        <Image
          className='bird-instruments-color'
          src='/images/birds-instruments/bass-body.svg'
          alt='bird-bass-body'
          width={'100%'}
          sx={{ position: 'absolute', left: 0, top: 0 }}
        />
      </Box>
    </motion.div>
  );
};

export default MotionBirdBass;
