import { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Box, Center } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
} from '@chakra-ui/react';

const PromoVideoModal = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const StartVideo = () => {
    return (
        <ReactPlayer
          url='https://www.youtube.com/watch?v=TLzTBULRAME'
          playing
          controls
        />
    );
  };

  return (
    <>
    {/* <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'xs'}>
      <ModalContent top={[0]} left={[0]} > */}
        {isPlaying ? <StartVideo /> : null}
      {/* </ModalContent>
    </Modal> */}
  </>
  );
};

export default PromoVideoModal;
