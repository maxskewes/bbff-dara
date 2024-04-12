import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Text, Image, Flex, Button } from '@chakra-ui/react';
import { nav_obj } from '../assets/nav_obj';
import { FiMenu } from 'react-icons/fi';

const HeaderSm = () => {
  const SmLink = ({ key, title, href }) => {
    return (
      <Link key={key} href={href}>
        <MenuItem
          // bgColor={'#00024a'}
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
    <div>
      <Flex
        h={12}
        justifyContent='space-between'
        alignItems='center'
        px={2}
        sx={{
          bgGradient: 'radial(#0000c9, #00024a)',
        }}
      >
        <Image
          src='/images/bridgetown-bluegrass.svg'
          alt='bridgetown bluegrass'
          width={['70%', '55%']}
          marginLeft={['14%', '24%']}
          marginBottom={1}
        />
        <Menu>
          <MenuButton
            as={Button}
            bg={'transparent'}
            color={'#4a8fff'}
            rightIcon={<FiMenu />}
          />
          <MenuList
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
      </Flex>
    </div>
  );
};

export default HeaderSm;
