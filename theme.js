import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});

export default theme;
