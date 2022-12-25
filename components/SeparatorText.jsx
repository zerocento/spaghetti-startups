import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function SeparatorText({ text }) {
  return (
    <HStack>
      <Box w={'100%'} h={'2px'} bg={'#000000'}></Box>
      <Text mx={'15px'} color={'#0000046'} fontSize={'16px'}>
        {text}
      </Text>
      <Box w={'100%'} h={'2px'} bg={'#000000'}></Box>
    </HStack>
  );
}
