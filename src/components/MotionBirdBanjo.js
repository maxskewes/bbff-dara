import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdBanjo = () => {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{
      
        y: [-40, 20, -40, 20, -40, -20],
      }}
      transition={{
        duration: 5,
      }}
    >
      <Box
        w={'17vw'}
        sx={{
          position: 'relative',
        }}
      >
        <motion.img
          style={{ originY: 0.07 }}
          animate={{ rotateX: 1440 }}
          transition={{
            duration: 5,
          }}
          className='bird-instruments-color'
          src='/images/birds-instruments/banjo-wings.svg'
          alt='bird-banjo-wings'
          width={'100%'}
          sx={{ position: 'relative' }}
        />
        <Image
           className='bird-instruments-color'
          src='/images/birds-instruments/banjo-body.svg'
          alt='bird-banjo-body'
          width={'100%'}
          sx={{ position: 'absolute', left: -1, top: 1 }}
        />
      </Box>
    </motion.div>
  );
};

export default MotionBirdBanjo;
