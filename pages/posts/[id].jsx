import Head from 'next/head'
import { Box, Text, Image } from '@chakra-ui/react'

import TextBox from '../../components/text-block'

// DYNAMICALLY GENERATE PATH AT BUILD TIME
export async function getStaticPaths() {
  const res = await fetch('http://localhost/getPostHeaders.php')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// DYNAMICALLY FETCH DATA AT BUILD TIME
export async function getStaticProps({ params }) {
  const postHeaderLink = 'http://localhost/getPostHeaders.php'
  const postHeaderRes = await fetch(postHeaderLink)
  const postHeaders = await postHeaderRes.json()

  const postLink = 'http://localhost/getPosts.php'
  const postRes = await fetch(postLink)
  const posts = await postRes.json()

  const postImageLink = 'http://localhost/getPostImages.php'
  const postImageRes = await fetch(postImageLink)
  const postImages = await postImageRes.json()

  return {
    props: {
      postHeaders,
      posts,
      postImages,
      params,
    }
  }
}

function Post({ posts, postHeaders, postImages, params }) {
  const postHeader = postHeaders.filter((postHeader) => postHeader.id.toString() === params.id.toString())[0]
  const postContent = posts.filter((post) => post.postId.toString() === params.id.toString())[0].content
  const images = postImages.filter((postImage) => postImage.postId.toString() === params.id.toString())

  return(
    <Box
      display='flex'
      p={4}
      flexDir='column'
      alignItems='center'
      maxW="800px"
    >
      <Head>
        <title>Posts - {postHeader.title}</title>
      </Head>

      <TextBox width='100%' p={3} m={6}>
        <Text as='strong' fontSize='1.4em'>
          {postHeader.title}
        </Text>

        <Box display="flex" justifyContent="space-around" m={3}>
          {images
            .filter( (image) => image.postId.toString() === params.id.toString())
            .filter( (image) => !image.imageName.includes("header"))
            .map( (image) => {
              return (
                <Image
                  key={image.imageName}
                  alt='Profile'
                  src={ `/images/${image.imageName}` }
                  borderRadius='large'
                  maxW="90%"
                />
              )
            })
          }
        </Box>

        <Text as='p'>{postContent}</Text>

      </TextBox>
    </Box>
  )
}

export default Post
