import React from 'react';
import { Heading, Image, Box } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';
import { PageHeadingBoxLg, PageHeadingBoxSm } from '../../components/PageHeadingBox';

const LineUp = () => {
  const PosterBox = ({ year }) => {
    return (
      <Box paddingY={['1rem', '2rem', null, '3.5rem']}>
        <PageHeadingBoxLg
          p={['.25rem', '.5rem', '1rem']}
          textAlign={'center'}
        >
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
    <PageContainer heading={'Line-Up and Schedule 2024'}>
      <Box
        color='white'
        textAlign={'center'}
        letterSpacing={3}
        m={12}
        maxW={'800px'}
      >
        <PageHeadingBoxSm>
          Stay tuned as the 2024 festival schedule is yet to be announced.
        </PageHeadingBoxSm>
        <PageHeadingBoxSm>
          Scroll down to peruse previous year's schedules of a sampling of what
          to expect.
        </PageHeadingBoxSm>
      </Box>

      <PosterBox year={'2022'} />

      <Box color={'white'} textAlign={'center'}>
        <Heading as='h3' size='lg' pt={['1rem', '2rem', null, '3.5rem']}>
          * * * * *
        </Heading>
        <Heading as='h3' size='lg'>
          2020 and 2021 Cancelled/Postponed
        </Heading>
        <Heading as='h3' size='lg' lineHeight={2}>
          * * * * *
        </Heading>
      </Box>

      <PosterBox year={'2019'} />
      <PosterBox year={'2018'} />
      <PosterBox year={'2017'} />
    </PageContainer>
  );
};

export default LineUp;
