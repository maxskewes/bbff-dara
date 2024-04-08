import React from 'react';
import { Text, Image, Box, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';
import { PageHeadingBoxLg, PageHeadingBoxSm } from '../../components/PageHeadingBox';

const LineUp = () => {
  const ArtistBox = ({ bandname, synop }) => {
    return (
      <Center p={4} color={'white'} flexDirection={'column'}>
        <Text fontSize={'2xl'} textAlign={'center'} textTransform={'uppercase'} fontWeight={600}>
          {bandname}
        </Text>
        <Text fontSize={'md'} textAlign={'center'}>
          {synop}
        </Text>
      </Center>
    );
  };

  const PosterBox = ({ year }) => {
    return (
      <Box paddingY={['1rem', '2rem', null, '3.5rem']}>
        <PageHeadingBoxLg p={['.25rem', '.5rem', '1rem']} textAlign={'center'}>
          {year}
        </PageHeadingBoxLg>
        <Image src={`/images/lineups/lineup${year}.png`} alt={`Line Up ${year}`} />
      </Box>
    );
  };

  return (
    <PageContainer heading={"THIS YEAR'S LINEUP"}>
      {/* <Text> click on bandname for more information</Text> */}
      <SimpleGrid
        columns={[1, null, 3]}
        spacing={1}
        maxW={['1200px']}
        px={[12]}
        alignItems={'flex-start'}
      >
        <ArtistBox
          bandname={'Alder Street Band'}
          synop={
            "boot-stompin', gritty and bourbon flavored - reprises ranging from Iron Maiden to Bill Monroe"
          }
        />
        <ArtistBox
          bandname={'Jackstraw'}
          synop={
            "Portland's own Iconic Bluegrass Band - out of their comfort zone of their 20+ year residency at the Laruelthirst Public House"
          }
        />
        <ArtistBox
          bandname={'Fog Holler'}
          synop={'the next generation of the many shades of grass'}
        />
        <ArtistBox
          bandname={'Band of Comerados'}
          synop={
            'feel-good jamgrass with intimate ornamentaion, dual vocal parts and intense improvisational jams'
          }
        />
        <ArtistBox
          bandname={'Blue Flags & Black Grass'}
          synop={
            'emulating string Bands of the 1920s and ‘30s - blending Ragtime, Viper Jazz, Country Blues, Old-Time, Jug Band and Bluegrass'
          }
        />
        <ArtistBox
          bandname={'The Muddy Souls'}
          synop={
            'a leading progressive/jamgrass band featuring original songs, virtuosic improvisation, tight vocal harmonies, and a high-octane groove'
          }
        />
        <ArtistBox
          bandname={'The High Seagrass'}
          synop={
            'bluegrass marauders pickin’ and singin’ hard driving traditional prowess with bold improvisational exploration'
          }
        />
        <ArtistBox
          bandname={'Thunder Ridge'}
          synop={'Straight-Ahead Bluegrass - traditional five-piece band inspired by the masters'}
        />
        <ArtistBox
          bandname={'Amanda Richards & The Good Long Whiles'}
          synop={
            'three part harmony Gothic-Americana on rhythm guitar, bass, lap steel electric banjo'
          }
        />
        <ArtistBox
          bandname={'Dadweed'}
          synop={'Human Band featuring four specimens from Vancouver, B.C.'}
        />
        <ArtistBox
          bandname={'The Lewis and Clarke Expedition'}
          synop={'Duo featuring Linda Leavitt and Tom Nechville'}
        />
        <ArtistBox
          bandname={'Skillethead'}
          synop={
            'Original, Traditional, Modern - the best of bluegrass old and new with driving fiddle tunes and layered harmonies'
          }
        />
        <ArtistBox
          bandname={'Sunny South'}
          synop={
            'Traditional Fiery Bluegrass with tight harmonies and wonderful musicianship for over 30 years'
          }
        />
        <ArtistBox
          bandname={'Party McFly'}
          synop={
            "If you don't like this duo of virtuosic pickin' and bowing', make like a tree, and fuck off"
          }
        />
      </SimpleGrid>

      <Box color='white' textAlign={'center'} letterSpacing={3} m={2} maxW={'800px'}></Box>

      <PosterBox year={'2022'} />

      <Box color={'white'} textAlign={'center'}>
        <Text
          fontSize={['18px', null, '24px', '28px', '32px']}
          fontWeight={600}
          pt={['1rem', '2rem', null, '3.5rem']}
        >
          * * * * *
        </Text>
        <Text fontSize={['18px', null, '24px', '28px', '32px']} fontWeight={600}>
          2020 and 2021 Cancelled/Postponed
        </Text>
        <Text fontSize={['18px', null, '24px', '28px', '32px']} fontWeight={600} lineHeight={2}>
          * * * * *
        </Text>
      </Box>

      <PosterBox year={'2019'} />
      <PosterBox year={'2018'} />
      <PosterBox year={'2017'} />
    </PageContainer>
  );
};

export default LineUp;
