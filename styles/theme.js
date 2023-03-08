import { defineStyleConfig, extendTheme } from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 500,
    borderRadius: '4px',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: '#1A237E',
      color: '#1A237E',
    },
    solid: {
      bg: '#1A237E',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

const Card = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    gap: 6,
  },
  // Two variants: rounded and smooth
  variants: {
    smooth: {
      padding: 6,
      borderRadius: '4px',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth',
  },
});

const theme = extendTheme(proTheme, {
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
  components: {
    Card,
    Button,
  },
});

export default theme;
