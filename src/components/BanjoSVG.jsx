import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const BanjoSVG = () => {
  return (
    // <motion.div
    //   initial={{ x: 2000, y: -20 }}
    //   animate={{
    //     x: 300,
    //     y: [-40, 20, -40, 20, -40, -20],
    //   }}
    //   transition={{
    //     duration: 5,
    //   }}
    // sx={{ position: 'relative', top: '50px', left: '30px' }}
    // <Box flexDirection={'column'} position={'relative'}>

    // <motion.img
    //   style={{ originY: 0.1 }}
    //   animate={{ rotateX: 1440 }}
    //   transition={{
    //     duration: 5,
    //   }}
    //   className='bird-instruments-color'
    //   src='/images/birds-instruments/bird-banjo-wings.svg'
    //   alt='bird-banjo-wings'
    //   width={'50px'}
    //   height={'auto'}

    // />

    //   <Image
    //     className='bird-instruments-color'
    //     src='/images/birds-instruments/bird-banjo-body.svg'
    //     alt='bird-banjo-body'
    //     width={'120px'}
    //     height={'auto'}
    //     sx={{ position: 'absolute', top: '-1', left: '-5px'}}
    //   />
    //   </Box>
    // </motion.div>

    <Flex flexDirection={'column'} position={'relative'}>
      <motion.img
        style={{ originY: 0.1 }}
        animate={{ rotateX: 1440 }}
        transition={{
          duration: 5,
        }}
        className='bird-instruments-color'
        src='/images/new-birds/banjo-wing.svg'
        alt='bird-banjo-wings'

    
        sx={{ position: 'absolute', top: '-20', left: '-5px' }}
      />
      <img
          position={'relative'}
        className='bird-instruments-color'
        src='/images/new-birds/banjo-body.svg'
        alt='bird-banjo-body'
  
        sx={{ position: 'absolute', top: '-20', left: '-5px' }}
      />
    </Flex>
  );
};

export default BanjoSVG;
