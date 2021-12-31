import { Box, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import { NavbarDesktop, NavbarMobile } from '../components/navbar';
import Header from '../components/header';
import ThemeToggleButton from '../components/theme-toggle-button';
import AnimatedBox from '../components/animated-box';
import { color } from '../utils/theme';

const MainLayout = ({ children }) => {
  const path = useRouter().pathname;
  const headerColor = useColorModeValue(
    color.textColor.light,
    color.textColor.dark
  );

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          display='flex'
          bg={useColorModeValue(color.navbarBg.light, color.navbarBg.dark)}
          minW='100vw'
          flexDir='row'
          alignItems='center'
          m={0}
          pr={3}
          justifyContent='flex-end'
        >
          <NavbarDesktop />

          <Box
            display={{ base: 'flex', md: 'none' }}
            alignItems='center'
            justifyContent='space-between'
            flexGrow={1}
          >
            <Header fontSize='1.4em' m={3} mt={0} mb={0} p={0} color='white' />
            <NavbarMobile />
          </Box>
          <ThemeToggleButton />
        </Box>

        <Box
          as='main'
          display='flex'
          minW='100vw'
          alignItems='center'
          justifyContent='center'
          flexDir='column'
        >
          <Header
            display={{ base: 'none', md: 'block' }}
            fontSize='2.3em'
            color={headerColor}
            m={0}
          />
          <AnimatedBox
            key={path}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Box
              minH='100vh'
              minW='100vw'
              display='flex'
              justifyContent='center'
            >
              {children}
            </Box>
          </AnimatedBox>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;
