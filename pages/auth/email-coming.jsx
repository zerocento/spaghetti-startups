import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { UserAuth } from '../../context/authContext';

export default function emailVerificationIncoming() {
  const router = useRouter();

  if (router.query.mode == 'resetPassword') {
    return router.push({
      pathname: '/reset-password',
      query: {
        oobCode: router.query.oobCode,
      },
    });
  }
  if (router.query.mode == 'verifyEmail') {
    const { handleVerifyEmail } = UserAuth();
    return handleVerifyEmail(router.query.oobCode);
  }

  return (
    <Box>
      <Text></Text>
    </Box>
  );
}
