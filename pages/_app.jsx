/** For more information, see:
 * @link https://nextjs.org/docs/advanced-features/custom-app
 *
 * By utilizing this custom _app.js , it enables persisting
 * layout feature in NextJS
 *
 * Component = page (as structured in ./pages/)
 * Router = router object (to get route / path properties )
 * pageProps = page props to be received by component
 * */
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import MainLayout from '../layouts/main';
import theme from '../utils/theme.jsx'
import '../styles/globals.css';

const App = ({ Component, router, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='content' content='personal blog, blog, technology' />
        <title>Yeyee&apos;s Site</title>
      </Head>

      <MainLayout router={router}>
        <Component key={router.route} {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
