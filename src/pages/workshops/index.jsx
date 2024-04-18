import React from 'react';
import { Text, Image, Box, Center, SimpleGrid, Flex } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';

const Workshops = () => {
  const WorkshopBox = ({ instrument, mentor, bandname, time }) => {
    return (
      <Center
        color={'white'}
        flexDirection={'column'}
        m={[4]}
        h={[220, 280, 220]}
        width={[220, null, 300]}
        borderRadius={'2xl'}
        bgImage="linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
      >
        <Text
          fontSize={['xl', '2xl']}
          textAlign={'center'}
          fontWeight={600}
          letterSpacing={[2]}
          whiteSpace={'pre-wrap'}
          maxW={[200, null, 280]}
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
          maxW={[200, null, 280]}
        >
          {bandname}
        </Text>
        <Text
          fontSize={['md', null, 'lg']}
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
    <PageContainer heading={'WORKSHOPS'}>
      <Text fontSize={['sm', null, 'md', 'xl']} fontWeight={600} letterSpacing={[2]} color={'white'}>
        $10 donation to mentor
      </Text>
      <Flex
        flexWrap={'wrap'}
        maxW={['1200px']}
        p={[4, null, 8]}
        mb={[8]}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <WorkshopBox
          instrument={'Bluegrass Vocal Harmony'}
          mentor={'Linda and Tom'}
          bandname={'of The Lois and Clark Expedition'}
          time={'12:00 - 1:00'}
        />
        <WorkshopBox
          instrument={'Bluegrass Guitar'}
          mentor={'Lonnie Ohta-Mayer'}
          bandname={'flatpicker extrodinare'}
          time={'12:00 - 1:00'}
        />

        <WorkshopBox
          instrument={'Bluegrass Fiddle'}
          mentor={'Lillian Sawyer'}
          bandname={'of Fog Holler'}
          time={'11:00 - 12:00'}
        />
        <WorkshopBox
          instrument={'Bluegrass Mandolin'}
          mentor={'Kaden Hurst'}
          bandname={'of Never Come Down'}
          time={'11:00 - 2:00'}
        />
        <WorkshopBox
          instrument={'Bluegrass Banjo'}
          mentor={'Chuck Holloway'}
          bandname={'of Thunder Ridge'}
          time={'12:00 - 1:00'}
        />
      </Flex>
    </PageContainer>
  );
};

export default Workshops;
