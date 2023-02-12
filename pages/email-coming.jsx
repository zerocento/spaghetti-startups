import { Box, Text } from '@chakra-ui/react';
import { querystring } from '@firebase/util';
import { useRouter } from 'next/router';
import React from 'react';
import { UserAuth } from '../context/authContext';

/* -------------------------------------------------------------------------------- */
/* ! 
{
  mode: 'resetPassword',
  oobCode: 'PflIUTcF8xU7NnVDoxasLRgl5JdiDid3kcytLA25asgAAAGGRrCMgw',
  apiKey: 'AIzaSyCB0xpz5XhRRdEFAByHRrJGzlXMItkCW9k',
  lang: 'it'
} 
/* -------------------------------------------------------------------------------- */

export default function emailVerificationIncoming() {
  const router = useRouter();
  console.log(router.query.mode);
  if (router.query.mode == 'resetPassword') {
    router.push({
      pathname: '/reset-password',
      query: {
        oobCode: router.query.oobCode,
      },
    });
  }
  if (router.query.mode == 'verifyEmail') {
    const { handleVerifyEmail } = UserAuth();
    handleVerifyEmail(router.query.oobCode);
  }
  return (
    <Box>
      <Text></Text>
    </Box>
  );
}
