import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Text, Image, Flex, Button, Box } from '@chakra-ui/react';
import { nav_obj } from '../assets/nav_obj';
import { FiMenu } from 'react-icons/fi';

const HeaderSm = () => {
  const SmLink = ({ key, title, href }) => {
    return (
      <Link key={key} href={href}>
        <MenuItem
          bgColor={'transparent'}
          color={'white'}
          justifyContent={'center'}
          fontWeight={700}
          letterSpacing={1.5}
          textTransform={'uppercase'}
          textDecoration={'none'}
          _hover={{
            textDecoration: 'none',
            bgColor: '#0800ff',
            color: '#70c4ff',
          }}
        >
          <Text textDecoration={'none'}>{title}</Text>
        </MenuItem>
      </Link>
    );
  };

  return (
    <Box
      pb={1}
      pt={1.5}
      px={[3]}
      width={'100vw'}
      sx={{
        bgGradient: 'radial(#0000c9, #00024a)',
      }}
    >
      <Menu>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <MenuButton
            as={Button}
            bg={'transparent'}
            color={'transparent'}
            rightIcon={<FiMenu />}
          />

          <Image
            w={'70%'}
            pl={'4%'}
            src='/images/header-small.svg'
            alt='bridgetown bluegrass'
            marginBottom={1}
          />

          <MenuButton
            as={Button}
            bg={'transparent'}
            color={'#4a8fff'}
            fontSize={['20px', '28px']}
            rightIcon={<FiMenu />}
          />
        </Flex>
        <MenuList
        border={0}
          minWidth={'100vw'}
          borderRadius={0}
          p={0}
          sx={{
            bgGradient: 'radial(#0000c9, #00024a)',
          }}
        >
          {nav_obj.map((nav, i) => {
            return <SmLink key={i} title={nav.title} href={nav.route} />;
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default HeaderSm;
