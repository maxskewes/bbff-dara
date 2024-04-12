import React from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../../components/PageContainer';
import { Flex, Box, SimpleGrid } from '@chakra-ui/react';
import PageTextBox from '../../components/PageTextBox';

const Sponsors = () => {
  const SponsorLogoBox = ({ link, pic, alt }) => {
    return (
      <Flex w={'full'} h={'full'} justifyContent={'center'} alignItems={'center'}>
        <Box w={['300px']}>
          <a href={`https://www.${link}`} target='_blank' rel='noreferrer noopener'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={`images/sponsors/${pic}`}
              alt={`${alt} logo/link`}
              width='100%'
            />
          </a>
        </Box>
      </Flex>
    );
  };

  return (
    <div>
      <PageContainer heading={'Sponsors'}>
        <PageTextBox>
          Our festival is made possible by our generous sponsors. They are what enable us to pay
          musicians a wage worthy of their talent, as well as make donations to our supported
          charities. Please support them in any way you can. Click on the logos to be redirected to
          their website.
        </PageTextBox>

        <SponsorLogoBox link={'rainierbeer.com'} pic={'R-rainier.png'} alt={'Rainier Beer'} />

        <SimpleGrid columns={[1, null, 3]} spacing={10} py={4} px={2}>
          <SponsorLogoBox
            link={'eartrumpetlabs.com'}
            pic={'eartrumpet.png'}
            alt={'Ear Trumpet Labs'}
          />

          <SponsorLogoBox link={'audixusa.com'} pic={'audix.jpg'} alt={'Audix Microphones'} />
          <SponsorLogoBox
            link={'giganticbrewing.com'}
            pic={'gigantic-color.png'}
            alt={'Gigantic Brewing'}
          />
          <SponsorLogoBox
            link={'breakside'}
            pic={'breakside-color.png'}
            alt={'Breakside Brewery'}
          />

          <SponsorLogoBox
            link={'hopworksbeer.com'}
            pic={'hub-color.png'}
            alt={'Hopworks Brewery'}
          />
          <SponsorLogoBox
            link={'stonecirclecider.com'}
            pic={'stone-circle.png'}
            alt={'Stone Circle Cider'}
          />
          <SponsorLogoBox link={'travelmag.com'} pic={'travelmag-color.png'} alt={'Travelmag'} />
          <SponsorLogoBox
            link={'stjosefswinery.com'}
            pic={'st-josefs.png'}
            alt={"St. Josef&apos's Winery"}
          />
          <SponsorLogoBox
            link={'sanctuaryhall.com'}
            pic={'sanctuary-hall.png'}
            alt={'Sanctuary Hall'}
          />
        </SimpleGrid>
        <Box w={['100%', null, '600px', '800px', '1000px']} p={[0, 6]}>
          <Flex w={'full'} h={'full'} justifyContent={'center'} alignItems={'center'}>
            <a href={`https://www.oregonbluegrass.org`} target='_blank' rel='noreferrer noopener'>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={`images/sponsors/oba.png`}
                alt={`Oregon Bluegrass Association logo/link`}
                width='100%'
              />
            </a>
          </Flex>
        </Box>
      </PageContainer>
    </div>
  );
};

export default Sponsors;
