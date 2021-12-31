import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

// forward props
const ChakraAnimatedDiv = chakra(motion.div, {
  shouldForwardProp: (propName) => {
    return shouldForwardProp(propName) || propName === 'transition';
  }
});

const AnimatedBox = ({ children, key, ...props }) => {
  return (
    <AnimatePresence exitBeforeEnter={false} initial={true}>
      <ChakraAnimatedDiv {...props} key={key}>
        {children}
      </ChakraAnimatedDiv>
    </AnimatePresence>
  );
};

export default AnimatedBox;
