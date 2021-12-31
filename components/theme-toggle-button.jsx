import {
  chakra,
  Button,
  useColorModeValue,
  useColorMode,
  shouldForwardProp
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

// make motion.div inherit chakra properties
const ChakraMotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop);
  }
});

const ThemeToggleButton = (props) => {
  const { toggleColorMode } = useColorMode();

  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const fg = useColorModeValue('yellow.300', 'blue.800');

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <ChakraMotionDiv
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ delay: 0, duration: 0.5 }}
        {...props}
      >
        <Button
          p={6}
          maxH='40px'
          maxW='40px'
          color={fg}
          onClick={toggleColorMode}
          borderRadius='lg'
          bgColor={useColorModeValue('blue.800', 'yellow.100')}
          _hover={{ bgColor: 'none' }}
        >
          {icon}
        </Button>
      </ChakraMotionDiv>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
