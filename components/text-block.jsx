import { Box, useColorModeValue } from '@chakra-ui/react'
import { color } from '../utils/theme'

const TextBox = ({ children, props }) => {
  const bgColor = useColorModeValue(
    color.textBlockBgColor.light,
    color.textBlockBgColor.dark
  )

  return (
    <Box {...props} p={2} pl={4} bgColor={bgColor} mb={6} borderRadius='lg'>
      {children}
    </Box>
  )
}

export default TextBox
