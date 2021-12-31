import { Box, Text } from '@chakra-ui/react'

const Header = (props) => {
  return (
    <Box {...props} mt={10} mb={30}>
      <Text as='strong'>Yeyee&apos;s Blog</Text>
    </Box>
  )
}

export default Header
