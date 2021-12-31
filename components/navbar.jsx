import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Link as ChakraLink,
  Text,
  MenuItem,
  MenuButton,
  MenuList,
  Menu,
  useColorModeValue
} from '@chakra-ui/react';

import LinkItem from '../components/link-item';
import { color } from '../utils/theme';

const ROUTES = [
  {
    id: 0,
    href: '/',
    children: 'Home'
  },
  {
    id: 2,
    href: '/about',
    children: 'About'
  }
];

export const NavbarDesktop = () => {
  return (
    <Box
      display={{ base: 'none', md: 'flex' }}
      p={3}
      alignItems='center'
      justifyContent='flex-end'
    >
      {ROUTES.map((route) => {
        return (
          <LinkItem href={route.href} key={route.id}>
            {route.children}
          </LinkItem>
        );
      })}

      <ChakraLink
        href='https://github.com/yeyee2901/personal-blog-nextjs'
        target='_blank'
      >
        <Text as='strong' color={color.linkBlockFg.light} fontSize='1.4em'>
          Page Source
        </Text>
      </ChakraLink>
    </Box>
  );
};

export const NavbarMobile = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton m={4}>
        <HamburgerIcon color={color.linkBlockFg.light} boxSize={8} />
      </MenuButton>

      <MenuList
        bgColor={useColorModeValue(color.navbarBg.light, color.navbarBg.dark)}
      >
        {ROUTES.map((route) => {
          return (
            <MenuItem key={route.id} display='flex' justifyContent='center'>
              <LinkItem href={route.href} key={route.id} minW='200px'>
                {route.children}
              </LinkItem>
            </MenuItem>
          );
        })}
        <MenuItem display='flex' justifyContent='center'>
          <Box p={2} m={2}>
            <ChakraLink
              href='https://github.com/yeyee2901/personal-blog-nextjs'
              target='_blank'
            >
              <Text
                as='strong'
                color={color.linkBlockFg.light}
                fontSize='1.3em'
              >
                Page Source
              </Text>
            </ChakraLink>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
