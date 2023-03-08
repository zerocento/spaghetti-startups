import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/Poppins/400.css';
import '@fontsource/Poppins/500.css';

import React from 'react';
import theme from '../styles/theme';
import { AuthContextProvider } from '../context/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
