import React from 'react';
import { Text, Image, Box } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';
import {
  PageHeadingBoxLg,
  PageHeadingBoxSm,
} from '../../components/PageHeadingBox';

const LineUp = () => {
  const PosterBox = ({ year }) => {
    return (
      <Box paddingY={['1rem', '2rem', null, '3.5rem']}>
        <PageHeadingBoxLg p={['.25rem', '.5rem', '1rem']} textAlign={'center'}>
          {year}
        </PageHeadingBoxLg>
        <Image
          src={`/images/lineups/lineup${year}.png`}
          alt={`Line Up ${year}`}
        />
      </Box>
    );
  };

  return (
    <PageContainer
      heading={'The 2024 lineup and festival schedule is yet to be announced.'}
    >
      <Box
        color='white'
        textAlign={'center'}
        letterSpacing={3}
        m={2}
        maxW={'800px'}
      >
        <PageHeadingBoxSm>
          Scroll down to peruse previous year's schedules of a sampling of what
          to expect.
        </PageHeadingBoxSm>
      </Box>

      <PosterBox year={'2022'} />

      <Box color={'white'} textAlign={'center'}>
        <Text
          fontSize={['18px', null, '24px', '28px', '32px']}
          fontWeight={600}
          pt={['1rem', '2rem', null, '3.5rem']}
        >
          * * * * *
        </Text>
        <Text
          fontSize={['18px', null, '24px', '28px', '32px']}
          fontWeight={600}
        >
          2020 and 2021 Cancelled/Postponed
        </Text>
        <Text
          fontSize={['18px', null, '24px', '28px', '32px']}
          fontWeight={600}
          lineHeight={2}
        >
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
