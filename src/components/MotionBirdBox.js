import { Flex } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionBirdFiddle from './MotionBirdFiddle';
import MotionBirdBanjo from './MotionBirdBanjo';
import MotionBirdGuitar from './MotionBirdGuitar';
import MotionBirdMando from './MotionBirdMando';
import MotionBirdBass from './MotionBirdBass';
import { useState } from 'react';

const MotionBirdBox = () => {
  const [birdsInDom, setBirdsInDom] = useState(true);
  setTimeout(() => {
    setBirdsInDom(false);
  }, 5000);

  return (
    <div id='bird-box'>
      {birdsInDom && (
        <Flex
          minWidth={'100vw'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <motion.div
            key='bird-box'
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 5.8,
            }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: '200%' }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 5,
              }}
              sx={{ zIndex: 3, width: '100%', height: 'auto', top: 0, left: 0 }}
            >
              <Flex
                width={'100vw'}
                maxWidth='800px'
                minH={'400px'}
                flexDirection={'row'}
                justifyContent={'space-around'}
              >
                <MotionBirdFiddle />
                <MotionBirdBanjo />
                <MotionBirdGuitar />
                <MotionBirdMando />
                <MotionBirdBass />
              </Flex>
            </motion.div>
          </motion.div>
        </Flex>
      )}
    </div>
  );
};

export default MotionBirdBox;
