import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Header></Header>
      <Box as="section" height="100vh" overflowY="auto" bg="#EAEBF7">
        <Container pt={{ base: '6', lg: '8' }} pb={{ base: '12', lg: '24' }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
