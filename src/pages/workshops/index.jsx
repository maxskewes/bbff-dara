import React from 'react';
import { Text, Image, Box, Center, SimpleGrid, Flex } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';

const Workshops = () => {
  const WorkshopBox = ({ instrument, mentor, bandname, time }) => {
    return (
      <Center
        color={'white'}
        flexDirection={'column'}
        p={[6]}
        h={[220, null, 300]}
        borderRadius={'2xl'}
        bgImage="linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
      >
        <Text
          fontSize={['xl', '2xl']}
          textAlign={'center'}
          fontWeight={600}
          letterSpacing={[2]}
          whiteSpace={'pre-wrap'}
          maxW={[300]}
          textTransform={'uppercase'}
        >
          {instrument}
        </Text>
        <Text fontSize={'md'} textAlign={'center'}>
          with
        </Text>
        <Text
          fontSize={'xl'}
          textAlign={'center'}
          fontWeight={700}
          letterSpacing={[1]}
        >
          {mentor}
        </Text>
        <Text
          fontSize={'md'}
          fontWeight={700}
          textAlign={'center'}
          whiteSpace={'pre-wrap'}
          letterSpacing={[1]}
        >
          {`of ${bandname}`}
        </Text>
        <Text
          fontSize={'md'}
          textAlign={'center'}
          fontWeight={700}
          letterSpacing={[2]}
        >
          {time}
        </Text>
      </Center>
    );
  };

  return (
    <PageContainer>
      <SimpleGrid
        columns={[1, null, 3]}
        spacing={4}
        maxW={['1200px']}
        p={[2]}
        pb={[12]}
        mb={[8]}
        alignItems={'flex-start'}
      >
        <WorkshopBox
          instrument={'Bluegrass Vocal Harmony'}
          mentor={'Linda and Tom'}
          bandname={'The Lois and Clark Expedition'}
          time={'12:00 - 1:00'}
        />
        <WorkshopBox
          instrument={'Bluegrass Guitar'}
          mentor={'Lonnie Ohta-Mayer'}
          bandname={'Flatpicker Extrodinare'}
          time={'12:00 - 1:00'}
        />

        <WorkshopBox
          instrument={'Bluegrass Fiddle'}
          mentor={'Lillian Sawyer'}
          bandname={'Fog Holler'}
          time={'11:00 - 12:00'}
        />
        <WorkshopBox
          instrument={'Bluegrass Mandolin'}
          mentor={'Kaden Hurst'}
          bandname={'Never Come Down'}
          time={'11:00 - 2:00'}
        />
        <WorkshopBox
          instrument={'Bluegrass Banjo'}
          mentor={'Chuck Holloway'}
          bandname={'Thunder Ridge'}
          time={'12:00 - 1:00'}
        />
      </SimpleGrid>
    </PageContainer>
  );
};

export default Workshops;
