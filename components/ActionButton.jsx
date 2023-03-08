import { Button } from '@chakra-ui/react';
import React from 'react';

const ActionButton = ({ text, margin, disabled, loading }) => {
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
      isLoading={loading}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
