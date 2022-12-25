import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/Poppins/400.css';
import '@fontsource/Poppins/500.css';

import React from 'react';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
