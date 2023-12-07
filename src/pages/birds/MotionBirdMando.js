import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdMando = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: [1, 1, 1, 1, 0.8, 0],
        y: [-40, 20, -40, 20, -40, -20],
      }}
      transition={{
        duration: 5,
      }}
    >
      <Box
        w={'18vw'}
        sx={{
          position: 'relative',
        }}
      >
        <motion.img
          style={{ originY: 0.353 }}
          animate={{ rotateX: 1440 }}
          transition={{
            duration: 5,
          }}
          src='/images/birds-instruments/mando-wings.svg'
          alt='bird-banjo-wings'
          width={'100%'}
          sx={{ position: 'relative' }}
        />

        <Image
          src='/images/birds-instruments/mando-body.svg'
          alt='bird-banjo-body'
          width={'100%'}
          sx={{ position: 'absolute', left: 0, top: 0 }}
        />
      </Box>
    </motion.div>
  );
};

export default MotionBirdMando;
