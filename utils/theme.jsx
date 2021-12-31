import { extendTheme } from '@chakra-ui/react';

const theme = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

export const color = {
  navbarBg: {
    dark: 'gray.900',
    light: 'blue.600'
  },

  linkBlockBg: {
    dark: 'teal.400',
    light: 'blue.900'
  },

  linkBlockFg: {
    dark: 'white',
    light: 'white'
  },

  textColor: {
    dark: 'white',
    light: 'black'
  },

  textBlockBgColor: {
    dark: 'gray.700',
    light: 'gray.200'
  }
};

export default extendTheme({ theme });
