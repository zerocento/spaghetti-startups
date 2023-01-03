import { Button } from '@chakra-ui/react';
import React from 'react';

export default function ActionButton({ text, margin, disabled }) {
  return (
    <Button
      type="submit"
      w={'100%'}
      bg="#1A237E"
      color={'#FFFFFF'}
      borderRadius={'4px'}
      fontSize={'18px'}
      fontFamily={'Poppins'}
      fontWeight={'500'}
      mt={margin + 'px'}
      padding={'8px, 16px, 9px, 16px'}
      _hover={{ background: '#1A237E', color: '#FFFFFF' }}
      _focus={{ background: '#1A237E', color: '#FFFFFF' }}
      isDisabled={disabled ? true : false}
    >
      {text}
    </Button>
  );
}
