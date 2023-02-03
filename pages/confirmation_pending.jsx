import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export default function confirmation_pending() {
  const router = useRouter();
  const propValue = router.query.prop;
  return (
    <Flex
      height={'100vh'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src="/img/email_sent_icon.svg" w={['171px', '450px']} mb="5" />
      <Text
        as={'h1'}
        fontWeight="700"
        fontSize={['31px', '39px']}
        lineHeight={['47px', '59px']}
        textAlign="center"
      >
        Ci Sei quasi!
      </Text>
      <Box maxW={'80%'}>
        <Text
          fontWeight="700"
          fontSize={'16'}
          lineHeight="24px"
          textAlign="center"
        >
          Abbiamo inviato una mail di conferma al tuo indirizzo
        </Text>
        <Text
          fontWeight="400"
          fontSize={'16'}
          lineHeight="24px"
          textAlign={'center'}
        >
          Clicca sul link nella mail per confermare il tuo account ed entrare in
          Spaghetti Startups!
        </Text>
      </Box>
    </Flex>
  );
}
