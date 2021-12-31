import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { color } from '../utils/theme'

const LinkComponent = ({ children, href, ...props }) => {
  const currentPath = useRouter().pathname
  const isActive = currentPath === href
  const linkColor = useColorModeValue(
    color.linkBlockBg.light,
    color.linkBlockBg.dark
  )

  const activeBgColor = isActive ? linkColor : null

  return (
    <NextLink href={href}>
      <Link>
        <Box
          p={2}
          borderRadius='lg'
          bgColor={activeBgColor}
          textAlign='center'
          m={2}
          {...props}
        >
          <Text as='strong' color={color.linkBlockFg.light} fontSize='1.4em'>
            {children}
          </Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default LinkComponent
