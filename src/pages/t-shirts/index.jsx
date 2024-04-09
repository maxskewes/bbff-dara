import React from 'react';
import { Box, Text, SimpleGrid, Flex, Image } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';

const Tshirts = () => {
  return (
    <PageContainer heading={'T-Shirts'}>
      <Box color={'white'}>
        <Text textAlign={'center'}>This Year's Design</Text>
        <SimpleGrid columns={[2]} spacing={[6]}>
          <Box
            width={'full'}
            maxW={[1200]}
            p={[6]}
            m={[2]}
            borderRadius={'2xl'}
            bgImage="linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
          >
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <Box w={[300]} h={[300]}>
                <Image
                  w={'full'}
                  h={'full'}
                  py={[2]}
                  src={'/images/tshirts/2024navy'}
                  alt={'2024 Tshirt Design - Zombie Hand with Banjo Picks'}
                  objectFit={'cover'}
                />
              </Box>
              <Text fontSize={['xs']} textAlign={'center'} pb={2}>
                White Ink on Navy
              </Text>
            </Flex>
          </Box>

          <Box
            width={'full'}
            maxW={[1200]}
            p={[6]}
            m={[2]}
            borderRadius={'2xl'}
            bgImage="linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
          >
            <Flex
              color={'white'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box w={[300]} h={[300]}>
                <Image
                  w={'full'}
                  h={'full'}
                  py={[2]}
                  src={'/images/tshirts/2024heather'}
                  alt={'2024 Tshirt Design - Zombie Hand with Banjo Picks'}
                  objectFit={'cover'}
                />
              </Box>
              <Text fontSize={['xs']} textAlign={'center'} pb={2}>
                Royal Ink on Heather Sapphire
              </Text>
            </Flex>
          </Box>

          <Flex
            color={'white'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text textAlign={'center'}>2022</Text>
            <Box
              width={'full'}
              maxW={[1200]}
              p={[6]}
              m={[2]}
              borderRadius={'2xl'}
              bgImage="linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
            >
              <Box w={[300]} h={['auto']}>
                <Image
                  w={'full'}
                  h={'full'}
                  py={[2]}
                  src={'/images/tshirts/2022.png'}
                  alt={'2022 Tshirt Design'}
                  objectFit={'cover'}
                />
              </Box>
            </Box>
          </Flex>

          <Flex
            color={'white'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text textAlign={'center'}>2019</Text>
            <Box
              width={'full'}
              maxW={[1200]}
              p={[6]}
              m={[2]}
              borderRadius={'2xl'}
              bgImage="linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
            >
              <Box w={[300]} h={[300]}>
                <Image
                  w={'full'}
                  h={'full'}
                  py={[2]}
                  src={'/images/tshirts/2022'}
                  alt={'2022 Tshirt Design'}
                  objectFit={'cover'}
                />
              </Box>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </PageContainer>
  );
};

export default Tshirts;
