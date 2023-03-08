import React from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FiHelpCircle, FiSearch, FiSettings } from 'react-icons/fi';
import { Logo } from './Logo';

const Header = () => {
  return (
    <Box as="nav" bg="white">
      <Container
        py={{
          base: '3',
          lg: '4',
        }}
      >
        <Flex justify="space-between" alignItems={'center'}>
          <Logo />

          <HStack spacing="4">
            <ButtonGroup spacing="6">
              <Button>Registrati</Button>
              <Button variant="outline">Accedi</Button>
            </ButtonGroup>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
