import { Text, Image, Box, Center, SimpleGrid, Flex } from '@chakra-ui/react';
import PageContainer from '../../components/PageContainer';
import Link from 'next/link';

const LineUp = () => {
  const ArtistBox = ({ bandname, time, synop, to }) => {
    return (
      <Link href={`/schedule#${to}`}>
        <Center
          p={4}
          color={'white'}
          flexDirection={'column'}
          maxWidth={['300px']}
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
            {bandname}
          </Text>
          <Text
            fontSize={'xl'}
            textAlign={'center'}
            fontWeight={700}
            letterSpacing={[2]}
          >
            {time}
          </Text>
          <Text fontSize={'md'} textAlign={'center'} whiteSpace={'pre-wrap'}>
            {synop}
          </Text>
        </Center>
      </Link>
    );
  };

  const FullArtistBox = ({ bandname, pic, ensemble, children, sectionID }) => {
    return (
      <>
        <section id={`#${sectionID}`}></section>
        <Box
          position={'relative'}
          width={'full'}
          maxW={[1200]}
          p={[6]}
          m={[2]}
          borderRadius={'2xl'}
          bgImage="linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
        >
          {/* <Box
            position={'absolute'}
            right={3}
            bottom={3}
            pt={1}
            pb={2}
            px={3}
            borderRadius={'2xl'}
            bgGradient='linear(blue.900 0%, blue.600 50%, blue.900 90%)'
          >
            <Link href={'/schedule'}>
              <Text color={'white'}>back to lineup</Text>
            </Link>
          </Box> */}
          <Flex
            color={'white'}
            flexDirection={['column', null, 'row']}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Flex flexDirection={['column']} pr={[0, null, 6]}>
              <Text
                letterSpacing={[2]}
                fontSize={['2xl']}
                fontWeight={[600]}
                textAlign={'center'}
                whiteSpace={'pre-wrap'}
                maxW={[300]}
              >
                {bandname}
              </Text>
              <Box w={[300]} h={[300]}>
                <Image
                  w={'full'}
                  h={'full'}
                  py={[2]}
                  src={pic}
                  alt={`band photo of ${bandname}`}
                  objectFit={'cover'}
                />
              </Box>
              <Text
                fontSize={['xs']}
                textAlign={'center'}
                whiteSpace={'pre-wrap'}
                pb={2}
              >
                {ensemble}
              </Text>
            </Flex>

            <Flex
              flexDirection={'column'}
              alignItems={['center']}
              justifyContent={['center']}
              pb={[0, null, 6, 0]}
            >
              <Text fontSize={['md']} textAlign={'justify'}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                {children}
              </Text>
              <Box
                position={['relative', null, 'absolute']}
                bottom={[null, null, 3]}
                right={[null, null, 6]}
                textAlign={'center'}
                width={['full', 'auto']}
                mt={4}
                pt={1}
                pb={2}
                px={12}
                cursor={'pointer'}
                borderRadius={'2xl'}
                _hover={{
                  bgGradient: 'linear( blue.600 0%, blue.400 50%, blue.600 90%)',
                  color: 'white',
                }}
                bgGradient='linear(blue.900 0%, blue.600 50%, blue.900 90%)'
              >
                <Link href={'/schedule'}>
                  <Text color={'white'}>back to lineup</Text>
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };

  return (
    <PageContainer heading={"THIS YEAR'S LINEUP"}>
      <Text color={'whiteAlpha.700'}>click on band for biography</Text>
      <Text color={'whiteAlpha.700'} pb={[4]}>
        time slots subject to change
      </Text>
      <Box>
        <Box
          color={'white'}
          maxW={['1200px']}
          p={[8]}
          pb={[12]}
          mb={[8]}
          textAlign={'center'}
          alignItems={'flex-start'}
          borderRadius={'2xl'}
          bgImage="radial-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
        >
          <Text
            fontSize={['2xl']}
            fontWeight={600}
            letterSpacing={[1.5]}
            pb={[4]}
          >
            Chansel Stage
          </Text>

          <SimpleGrid columns={[1, null, 3]} spacing={1}>
            <ArtistBox
              bandname={'ALDER STREET'}
              time={'10:00pm'}
              synop={
                "Boot-Stompin', Gritty and Bourbon Flavored - reprises ranging from Iron Maiden to Bill Monroe"
              }
              to={'alder-street'}
            />
            <ArtistBox
              bandname={'JACKSTRAW'}
              time={'7:00pm'}
              synop={
                "Portland's own Iconic Bluegrass Band - out of their comfort zone of their 20+ year residency at the Laruelthirst Public House"
              }
              to={'jackstraw'}
            />
            <ArtistBox
              bandname={'FOG HOLLER'}
              time={'9:00pm'}
              synop={
                'Bluegrass Cats that Shred - original songs, topical in substance yet traditional in style "the next generation of the many shades of grass"'
              }
              to={'fog-holler'}
            />
            <ArtistBox
              bandname={'The HIGH SEAGRASS'}
              time={'8:00pm'}
              synop={
                'Bluegrass Marauders pickin’ and singin’ hard driving traditional prowess with bold improvisational exploration'
              }
              to={'high-seagrass'}
            />

            <ArtistBox
              bandname={'BAND of COMERADOS'}
              time={'6:00pm'}
              synop={
                'Feel-Good Jamgrass with intimate ornamentaion, dual vocal parts and intense improvisational jams'
              }
              to={'band-of-comerados'}
            />
            <ArtistBox
              bandname={'The MUDDY SOULS'}
              time={'5:00pm'}
              synop={
                'A leading Progressive/Jamgrass band featuring original songs, virtuosic improvisation, tight vocal harmonies, and a high-octane groove'
              }
              to={'muddy-souls'}
            />
            <ArtistBox
              bandname={'THUNDER RIDGE'}
              time={'4:00pm'}
              synop={
                'Straight-Ahead Bluegrass - traditional five-piece band inspired by the masters'
              }
              to={'thunder-ridge'}
            />
            <ArtistBox
              bandname={'SKILLETHEAD'}
              time={'3:00pm'}
              synop={
                'Original, Traditional, Modern - the best of bluegrass old and new with driving fiddle tunes and layered harmonies'
              }
              to={'skillethead'}
            />
            <ArtistBox
              bandname={'BLUE FLAGS & BLACK GRASS'}
              time={'2:00pm'}
              synop={
                'Emulating string Bands of the 1920s and ‘30s - blending Ragtime, Viper Jazz, Country Blues, Old-Time, Jug Band and Bluegrass'
              }
              to={'blue-flags-and-black-grass'}
            />
            <ArtistBox
              bandname={'Amanda Richards &\n The GOOD LONG WHILES'}
              time={'1:00pm'}
              synop={
                'Three part harmony Gothic-Americana on rhythm guitar, bass, lap steel electric banjo'
              }
              to={'good-long-whiles'}
            />
          </SimpleGrid>
        </Box>

        <Box
          color={'white'}
          maxW={['1200px']}
          p={[8]}
          pb={[12]}
          mb={[8]}
          textAlign={'center'}
          alignItems={'flex-start'}
          borderRadius={'2xl'}
          bgImage="radial-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.2)) , url('Background.jpg')"
        >
          <Text
            pb={[4]}
            fontSize={['2xl']}
            fontWeight={600}
            letterSpacing={[1.5]}
          >
            Chapel Stage
          </Text>

          <SimpleGrid columns={[1, null, 2]} spacing={1}>
            <ArtistBox
              bandname={'SUNNY SOUTH'}
              time={'4:30pm'}
              synop={
                'Traditional Fiery Bluegrass with tight harmonies and wonderful musicianship for over 30 years'
              }
              to={'sunny-south'}
            />
            <ArtistBox
              bandname={'DADWEED'}
              time={'3:30pm'}
              synop={'Acoustic Jazz/Folk/Soul/R&B through a Bluegrass lens'}
              to={'dadweed'}
            />
            <ArtistBox
              bandname={'PARTY McFLY'}
              time={'2:30'}
              synop={'Bluegrass Mando/Guitar Duo.'}
              to={'party-mcfly'}
            />
            <ArtistBox
              bandname={'The LOIS and CLARK EXPEDITION'}
              time={'1:30pm'}
              synop={
                'Banjo/Guitar Duo with vocal harmonies featuring Linda Leavitt and Tom Nechville'
              }
              to={'lois-and-clark-expedition'}
            />
          </SimpleGrid>
        </Box>
      </Box>

      <section id='alder-street' />
      <FullArtistBox
        bandname={'ALDER STREET'}
        pic={'/images/bandphotos/alder-street.jpg'}
        ensemble={
          'Ian Royer- Guitar\n Chris Kelley- Banjo\n Aaron Nelson- Bass\n Jake Beckwith- Fiddle\n Jesse Lawton- Mandolin\n Emily West- Drums'
        }
      >
        Alder Street is boot-stompin&apos;, gritty, and bourbon flavored. The
        band draws its inspiration from a variety of sources, evinced by
        original tunes that break the mold of traditional bluegrass, and
        reprises ranging from Iron Maiden to Bill Monroe. The band first formed
        for a benefit show from a hodgepodge of musicians living in
        Eugene&apos;s infamous Campbell Club Cooperative on Alder Street.Over
        the years Alder Street blossomed in Eugene's infamous local music scene.
      </FullArtistBox>

      <section id='jackstraw' />
      <FullArtistBox
        bandname={'JACKSTRAW'}
        pic={'/images/bandphotos/jackstraw.jpg'}
        ensemble={
          'Jon Neufeld - Guitar\n David Pugh - Mandolin\n Jesse Withers - Upright Bass\n Darrin Craig - Guitar'
        }
      >
        Jackstraw formed in 1997 when rhythm guitarist Darrin Craig and lead
        player Jon Neufeld met mandolin picker David Pugh and bassist Jesse
        Withers at Artichoke Music, a Portland instrument store. Six records and
        27 years later, the band has toured throughout the United States,
        playing roadhouses, clubs, listening rooms and festivals. Along the way,
        they&apos;ve shared bills with bluegrass greats such as Del McCoury and
        Tim O&apos;Brien and welcomed legends like Danny Barnes and Tony Furtado
        as temporary band mates. The band&apos;s devoted following includes
        bluegrass purists, alt-country fans, kids looking to dance, and people
        who know a good tune when they hear one. Jackstraw has developed a
        reputation over the years for their impeccable musicianship and
        hard-driving original songs.
      </FullArtistBox>

      <section id='fog-holler' />
      <FullArtistBox
        bandname={'FOG HOLLER'}
        pic={'/images/bandphotos/fog-holler.jpg'}
        ensemble={
          'Casey James Holmberg: Banjo\n Lillian Sawyer: Fiddle\n Tommy Schulz: Guitar\n Noa: Bass Fiddle'
        }
      >
        Fog Holler is a bluegrass band with an edge. What gives them that edge
        is a topic of hot debate. For some, it&apos;s musicianship - these
        bluegrass cats shred. For others, it&apos;s the songwriting, traditional
        in style but topical in substance. Sometimes, they undeniably snare
        people with the squad factor - folks see 4 grown adults in matching
        monochrome, and they get curious. The secret, according to Fog Holler,
        is simply that they write and play bluegrass in 2024, with similar
        intention but very different context from the genre&apos;s originators.
        Inspired by a range of influences from The Stanley Brothers to Buck
        Owens to Meshuggah, Fog Holler breathes fresh life into well worn forms
        like the murder ballad and the power waltz. Described by two-time Grammy
        Award Winner Cathy Fink as “The next generation of the many shades of
        grass”, Fog Holler&apos;s captivating tunes and coordinated outfits are
        quickly enthralling longtime bluegrass fans and newcomers alike.
      </FullArtistBox>

      <section id='muddy-souls' />
      <FullArtistBox
        bandname={'The MUDDY SOULS'}
        pic={'/images/bandphotos/muddy-souls.jpg'}
        ensemble={
          'Peter Romanelli - guitar/vocals\n Austen Slone - mandolin/vocals\n Jacob Camara - banjo/vocals\n Zachary Wallmark - bass'
        }
      >
        The Muddy Souls are a leading progressive/jamgrass band based in Eugene,
        OR featuring original songs, virtuosic improvisation, tight vocal
        harmonies, and a high-octane groove that always has the dance floor
        bouncing. Formed in 2018, the band has four albums of completely
        original music, and has played nearly 300 concerts across the Pacific
        Northwest, Canada and the Northeast including festival sets at
        Freshgrass, Bridge City Bluegrass, Oregon Country Fair, and Wintergrass.
        They are currently planning their first European Tour for 2025. A gem of
        the Northwest music scene the Muddy Souls are sure to get your feet
        dancing and your face grinning.
      </FullArtistBox>

      <section id='high-seagrass' />
      <FullArtistBox
        bandname={'The HIGH SEAGRASS'}
        pic={'/images/bandphotos/high-seagrass.jpg'}
        ensemble={'Mandolin\n Banjo\n Guitar\n Bass\n Squareneck Dobro'}
      >
        The High Seagrass are a swashbuckling band of bluegrass marauders
        pickin&apos; and singin&apos; at sea level. The 5-piece Pacific
        Northwest jamgrass band from Seattle, Washington is an organic offshoot
        of Ballard&apos;s long-running Conor Byrne Pub bluegrass jam formed by
        members inspired by both bluegrass and jamband music and culture. Their
        unique brand fuses hard driving traditional prowess with bold
        improvisational exploration. This group of accomplished musicians
        channels the Emerald City&apos;s musical roots with a well curated
        selection of bluegrass traditionals, rollicking originals, and
        re-imagined covers.
      </FullArtistBox>

      <section id='skillethead' />
      <FullArtistBox
        bandname={'SKILLETHEAD'}
        pic={'/images/bandphotos/skillethead.jpg'}
        ensemble={
          'Benji Nagel - Dobro, Guitar, Vocals\n Joe Schulte - Mandolin, Guitar, Vocals\n Aaron Moore - Bass, Vocals\n Garrett Miller - Banjo, Guitar, Vocals\n Casey Willis - Fiddle, Mandolinnic Guitar, Harps'
        }
      >
        Setting roots in the high and dry Central Oregon desert, Skillethead
        calls forth the best of bluegrass old and new. They ground themselves
        firmly in the bluegrass traditions of driving fiddle tunes, layered
        harmonies, and single mics, all the while weaving in inspiration and
        originality gleaned from genres far and wide. You can expect to hear a
        Stanley Brothers number right alongside a stirring original or a
        rollicking rock cover done in Skillethead's own unique fashion. The
        spectrum reaches far and wide, the bluegrass universe is expanding, and
        Skillethead is on that ride!
      </FullArtistBox>

      <section id='band-of-comerados' />
      <FullArtistBox
        bandname={'BAND of\n COMERADOS'}
        pic={`https://static.wixstatic.com/media/929c29_e087af56464f43e7a9aac992db099965~mv2.jpg/v1/fill/w_977,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC09211.jpg`}
        ensemble={
          'Ryan McMahon - Mandolin, Vocals\nDevon James - Guitar, Vocals\nKyle Donaldson - Guitar, Vocals\nJeffrey Leppert - Upright Bass'
        }
      >
        Since 2015 and extending far into the future, Band of Comerados plays
        music that makes you feel good. Call it bluegrass, jamgrass, folk, or
        indie, what sets the band apart is their intricate instrumentation, dual
        vocal parts, intense improvisational jams, and the fact that these guys
        have so much damn fun when they&apos;re playing live music!
      </FullArtistBox>

      <section id='good-long-whiles' />
      <FullArtistBox
        bandname={'The GOOD LONG WHILES'}
        pic={'/images/bandphotos/good-long-whiles.png'}
        ensemble={
          'Amanda Richards - Vocals/Guitar\n Steve Moore -  banjo/lap steel/vocals\n Christine McAllister - Bass'
        }
      >
        Amanda Richards & The Good Long Whiles are a three part harmony
        gothic-americana band based out of Portland, Oregon featuring Amanda
        Richards on lead vocals and rhythm guitar, Stephen Freeman Moore on lap
        steel and electric banjo, Christine McAllister on the bass and Don Lawry
        on drums. The group performs original music along with traditional folk
        and bluegrass in a throwback western style reinvisioned through the lens
        of somber indie rock with syrupy reverb and delay. Amanda is an
        award-winning songwriter, producer, director, playwright, actor and
        musician with a naturally large set of eyelashes. She has worked in the
        music industry for 20 years as an independent artist with 8 full length,
        self-released albums under her belt and a feature length film poised to
        release this year. Stephen Freeman Moore is a musician &#40;banjo,
        guitar, lap steel guitar and vocals&#41;, producer, composer, actor,
        music director and music instructor from San Diego, CA and we suspect he
        is secretly running a shelter for wayward banjos.
      </FullArtistBox>

      <section id='thunder-ridge' />
      <FullArtistBox
        bandname={'THUNDER RIDGE'}
        pic={
          'https://images.squarespace-cdn.com/content/v1/651317f72307517a6a58f036/3decfb8a-85c5-4874-bdff-1549507f0644/Photo+Gallery+2.jpg?format=1000w'
        }
        ensemble={
          'Drew Tucker - Mandolin/Vocals\n Chuck Holloway- Banjo\n Aaron Redner - Fiddle\n Casey Davidson - Bass'
        }
      >
        Thunder Ridge is a straight-ahead bluegrass band from Portland, OR. The
        traditional five-piece band is made up of banjo, guitar, mandolin, bass
        and fiddle. They will steal your heart with hard driving vocal harmonies
        and instrumentals. Allow them to take you down a path of yesteryear with
        a good old fashioned sound inspired by the masters of bluegrass, and
        sprinkled with a few originals!
      </FullArtistBox>

      <section id='blue-flags-and-black-grass' />
      <FullArtistBox
        bandname={'BLUE FLAGS & BLACK GRASS'}
        pic={'/images/bandphotos/blue-flags.jpg'}
        ensemble={
          'Flip McGuire - Banjo, Res-o-phonic Guitar, Kazoo\n Dumpster Joe - Res-o-phonic Guitar, Harps\n Elwood Johncox - Upright Bass\n Aaron Koch - Washboard\n Jeffrey Reynolds - Fiddle\n Andrew Alikhanov - Clarinet'
        }
      >
        Blue Flags & Black Grass is a combination of many flavors of acoustic
        American Roots Music. With the instrumentation of Banjo, Res-o-phonic
        Guitar, Fiddle, Washboard, Kazoo and Upright Bass, Blue Flags emulates
        the String Bands of the 1920s and &apos;30s. Their typical gig will
        blend Ragtime, Viper Jazz, Country Blues, Old-Time, Jug Band and
        Bluegrass. As well as performing classic standards and dusting off
        hidden gems, Blue Flags also features original songs by Flip
        &apos;Fats&apos; McGuire.
      </FullArtistBox>

      <section id={'dadweed'} />
      <FullArtistBox
        bandname={'DADWEED'}
        pic={'/images/bandphotos/dadweed.jpg'}
        ensemble={
          '2 Guitars and a Bass\n often swapped out for a dobro,\n pedal steel, mandolin, or banjo'
        }
      >
        From the jump, Dadweed have been eager to start something new within the
        Bluegrass genre, taking a non-traditional approach, but always finding
        ways to pay homage to the roots of the genre. Making their live
        performances fun and engaging for both lovers of Bluegrass, and for
        those not so interested or familiar with the genre Influenced by
        different generations of bluegrass, from Tony Rice to Billy Strings, all
        3 members are songwriters and have a great ear for serving songs, while
        also leaning into experimentation and the freewheeling exploration of
        finding new moments not only in their original music, but also for their
        arrangements of covers as well. Dadweed showcases two guitars and bass,
        which allows a lot of room for interplay and improvisation. Having less
        moving parts at any given moment than other Bluegrass lineups. All of
        the members being multi-instrumentalists also allows them to swap out a
        guitar for a dobro, pedal steel, mandolin, or banjo from time to time.
      </FullArtistBox>

      <section id={'lois-and-clark-expedition'} />
      <FullArtistBox
        bandname={'The LOIS & CLARK EXPEDITION'}
        pic={'/images/bandphotos/lois-and-clark-expedition.jpg'}
        ensemble={
          'Linda Leavitt - Guitar / Vocals\n Tom Nechville - Banjo / Vocals'
        }
      >
        Back in 2018, banjo music innovator Tom Nechville joined forces with his
        musical soulmate, Linda Leavitt and their mutual musical journey began.
        Linda&apos;s experience as a lead singer in several Portland-area
        bluegrass bands, including Mountain Honey, and her southern gospel
        bluegrass roots and soulful voice meet Tom&apos;s heartfelt baritone and
        his inventive multi-genre Scruggs/Melodic style banjo playing. Their mix
        draws from Bluegrass, Classic Country, originals and 70&apos;s one hit
        wonders. Join The Lois & Clark Expedition on their road of discovery.
      </FullArtistBox>

      <section id={'sunny-south'} />
      <FullArtistBox
        bandname={'SUNNY SOUTH'}
        pic={
          'https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/221001/7a1076f5b4e6f8ab00423673966fa92d4d5a5203/original/mike-s-017-a-cd.jpg/!!/b%3AW1sicmVzaXplIixbNjAwLG51bGwseyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsImZpdCI6Im91dHNpZGUifV1dXQ%3D%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg'
        }
        ensemble={
          'Dave Elliott - Mandolin/Vocals\n Mike Stahlman - Banjo/Vocals\n Steve Reischman - Rhythm Guitar/Vocals\n Aaron Stocek - Lead Guitar\n Dee Johnson - Bass'
        }
      >
        Sunny South is a bluegrass band playing in the Portland, Oregon region.
        Sunny South plays bluegrass with an emphasis on traditional style like
        Flatt and Scruggs, Doc Watson and Bill Monroe. Sunny South started
        playing in the 80's with Sonny Hammond as lead singer and band leader.
        They played all over the pacific northwest and produced two albums.
        After Sonny passed on, the band has continued playing bluegrass and
        honoring Sonny. Mike and Dave are founding members of Sunny South and
        have added Steve Reischman, Dee Johnson and Aaron Stocek to fill out the
        band. Sunny South is an experienced band, both professional and
        comfortable on the stage. They put on a great show that audiences enjoy.
      </FullArtistBox>

      <section id={'party-mcfly'} />
      <FullArtistBox
        bandname={'PARTY McFLY'}
        pic={'/images/bandphotos/party-mcfly.png'}
        ensemble={'Patrick Connell - Guitar\n Josiah Payne - Mandolin'}
      >
        Bluegrass Mando/Guitar Duo.
      </FullArtistBox>
    </PageContainer>
  );
};

export default LineUp;
