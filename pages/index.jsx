import { Box, Text, Link, Image } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'

import ProfilePic from '../components/profile-pic'
import TextBox from '../components/text-block'

// generate static page props on build
export async function getStaticProps() {
  const postHeaderLink = 'http://localhost/getPostHeaders.php'
  const postHeaderRes = await fetch(postHeaderLink)
  const postHeaders = await postHeaderRes.json()

  const postImageLink = 'http://localhost/getPostImages.php'
  const postImageRes = await fetch(postImageLink)
  const postImages = await postImageRes.json()

  return {
    props: {
      postHeaders,
      postImages
    }
  }
}

const Page = ({ postHeaders, postImages }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      p={4}
      flexDir='column'
      alignItems='center'
      minW='100vw'
    >
      <Head>
        <title>Yeyee&apos; Blog - Home</title>
      </Head>

      <ProfilePic />

      <Box w='90%' maxW='800px' mt={8}>
        {postHeaders.map((postHeader) => {
          return (
            <TextBox key={postHeader.id} width='100%' p={3} m={6}>
              <NextLink href={`/posts/${postHeader.id}`}>
                <Link>
                  <Text as='strong' fontSize='1.4em'>
                    {postHeader.title}
                  </Text>
                </Link>
              </NextLink>

              <Box display="flex" alignItems="center" justifyContent="space-around">
              {postImages
                .filter( (image) => image.postId.toString() === postHeader.id.toString())
                .filter( (image) => image.imageName.includes("header") )
                .map( (image) => {
                  return (
                    <Image
                      key={image.imageName}
                      alt='Profile'
                      src={ `/images/${image.imageName}` }
                      borderRadius='large'
                      maxW="40%"
                    />
                  )
                })
              }
              </Box>

              <Text as='p'>{postHeader.summary}</Text>
            </TextBox>
          )
        })}
      </Box>
    </Box>
  )
}

export default Page
