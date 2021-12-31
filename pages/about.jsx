import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

import { color } from '../utils/theme';

import TextBox from '../components/text-block';

const Page = () => {
  const textColor = useColorModeValue(
    color.textColor.light,
    color.textColor.dark
  );

  const linkColor = useColorModeValue('blue.600', 'blue.300');

  return (
    <Box width='90%' maxW='800px' mt={6}>
      <Head>
        <title>Yeyee&apos; Blog - About</title>
      </Head>

      <TextBox width='100%' p={3}>
        <Text as='strong' fontSize='1.4em' color={textColor}>
          Hello, my name is Gabriel!
        </Text>

        <Text as='p'>
          currently a student at
          <Link
            color={linkColor}
            href='https://ukwms.ac.id/'
            target='_blank'
            _hover={{ bg: null}}
            borderRadius='lg'
          >
            {` Universitas Katolik Widya Mandala `}
          </Link>
          , with telecommunication as his main focus of study. He was born on
          29th January, 2000, in Surabaya, Indonesia. His interest in
          technologies had sparked since he was in kindergarten life, where he
          will spend most of his times after school in front of his Pentium 4
          computer.
          <br />
          <br />
          During his early teenage years, he dedicated himself to study musics,
          especially in playing classical Piano and Electric Guitar. Because of
          that, sometimes he occassionally does a job related to music from time
          to time. And until now, Gabriel is still active in music world.
          <br />
          <br />
          At some point in his 18 years of life, his interest for technologies
          grew more, thus, he decided to pursue the Electrical Engineering
          degree, because he likes the hardware part of computers and how
          computer programs interact with the user and the hardware, basically
          understanding how computers do things. Also, he has a huge interest in
          Machine Learning and he thinks it&apos;s beneficial for tech-geeks
          like us to understand it since it will be beneficial regardless of
          what your field of expertise in technology is.
          <br />
          <br />
          Currently, Gabriel is focusing on his last year of college, while also
          simultaneously helping in Electrical Instrumentation Laboratory as an
          assistant.
        </Text>
      </TextBox>

      <TextBox mt={3}>
        <Text as='strong' color={textColor} fontSize='1.4em'>
          Technologies
        </Text>
        <Box p={3} color={textColor}>
          <ul>
            <li>Linux</li>
            <li>PCB Design</li>
            <li>Git</li>
            <li>C / C++ for embedded systems</li>
            <li>Python</li>
            <li>R for data analysis</li>
            <li>Javascript</li>
            <li>HTML, CSS</li>
            <li>PHP</li>
            <li>React JS</li>
            <li>Rust (currently learning)</li>
          </ul>
        </Box>

        <Text as='strong' color={textColor} fontSize='1.4em'>
          Embedded System Technologies
        </Text>
        <Box color={textColor} p={3}>
          <ul>
            <li>AVR Microcontrollers</li>
            <li>Arduino Family</li>
          </ul>
        </Box>
      </TextBox>

      <TextBox>
        <Text as='strong' color={textColor} fontSize='1.4em'>
          About this page
        </Text>

        <Box p={2} color={textColor}>
          <ul>
            <li>
              <Link
                href='https://nextjs.org'
                color={linkColor}
                target='_blank'
              >
                {' NextJS '}
              </Link>
              - An improved React based framework that
              has the capabilities of SSG (Static Site Generation), automatic
              routing, and builtin API routing.
            </li>
            <li>
              <Link
                href='https://reactjs.org'
                color={linkColor}
                target='_blank'
              >
                {' React JS '}
              </Link>
              - A Javascript framework which emphasizes component reusability
            </li>
            <li>
              <Link
                href='https://chakra-ui.com/'
                color={linkColor}
                target='_blank'
              >
                {` Chakra UI `}
              </Link>
              - A component library built upon React JS for easier site creation
            </li>
            <li>
              <Link
                href='https://framer.com'
                color={linkColor}
                target='_blank'
              >
                {` Framer Motion `}
              </Link>
              - An animation & transition library for React based sites.
            </li>
          </ul>
        </Box>
      </TextBox>
    </Box>
  );
};

export default Page;
