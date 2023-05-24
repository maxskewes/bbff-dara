import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdBass = () => {
  return (
    // <motion.div
    //   initial={{ x: 2600, y: 40 }}
    //   animate={{
    //     x: 950,
    //     y: [20, -40, 20, -40, 20, -20],
    //   }}
    //   transition={{
    //     duration: 5,
    //   }}
    // >
    <Flex flexDirection={'column'} position={'relative'}>
      <motion.img
        style={{ originY: 0.5 }}
        animate={{ rotateX: 1440 }}
        transition={{
          duration: 5,
        }}
        className='bird-instruments-color'
        src='/images/birds-instruments/bird-bass-wings.svg'
        alt='bird-bass-wings'
        width={'170px'}
        height={'auto'}
      />
      <Image
        className='bird-instruments-color'
        src='/images/birds-instruments/bird-bass-body.svg'
        alt='bird-bass-body'
        width={'135px'}
        height={'auto'}
        sx={{ position: 'absolute', top: '28px', left: '64px' }}
      />
    </Flex>
    // </motion.div>
  );
};

export default MotionBirdBass;
