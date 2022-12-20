import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Image, FormErrorMessage } from '@chakra-ui/react';

import {
  VStack,
  Grid,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import ActionButton from '../components/ActionButton';

import { useForm } from 'react-hook-form';
import { requestResetLink } from '../lib/api/reset';
import ActionModal from '../components/ActionModal';

export default function RequestReset() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [confirmationSent, setConfirmationSent] = useState(false);

  async function onSubmit({ email }) {
    try {
      const res = await requestResetLink({ email });
      setConfirmationSent(true);
    } catch (error) {
      setConfirmationSent(false);
    }
  }

  if (confirmationSent) {
    return (
      <Box w={'w-screen'} h={'h-screen'} bg="white">
        <ActionModal
          image=""
          title="Ci sei quasi!"
          subtitle="Abbiamo mandato una mail di conferma al tuo indirizzo"
          text="Clicca sul link nella mail per confermare il tuo account ed entrare in Spaghetti Startups"
        />
      </Box>
    );
  }

  return (
    <Box
      bg="#001A72"
      w={['100%', '100vw']}
      h={['100%', '100vh']}
      p={4}
      boxSizing={'border-box'}
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={6}
        h={'100%'}
      >
        <Box
          bg="#FFFFFF"
          borderRadius={'4px'}
          w="100%"
          h="100%"
          p={[2, '10%']}
          pb={['20%', '0']}
        >
          <Box>
            {/*  -----------------------------------------------------------------------------------------------
                Here goes brand image
              --------------------------------------------------------------------------------------------------- */}
          </Box>
          <Box>
            <Heading
              textAlign={'center'}
              fontSize={'25px'}
              mb={'40px'}
              fontWeight={'500'}
              color={'#000046'}
            >
              Richiedi il reset della tua password
            </Heading>
            <Box as="form" onSubmit={handleSubmit(onSubmit)} mb={10}>
              <FormControl isInvalid={!!errors.email} mb={'15px'}>
                <FormLabel htmlFor="email" fontSize={'16px'} color={'#000046'}>
                  Email
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder={'Inserisci il tuo indirizzo mail'}
                  border="1px"
                  borderColor="#000046"
                  _hover={{ borderColor: '#000046' }}
                  {...register('email', {
                    required: 'Il campo è obbligatorio',
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <ActionButton text="Invia" margin={50} loading={isSubmitting} />
            </Box>
          </Box>
        </Box>

        <VStack
          alignItems={'center'}
          justifyContent={'center'}
          w={'100%'}
          h={'100%'}
        >
          <Image
            src="/img/iconSignup.png"
            w={['100%', '70%']}
            mt={['-100px', '0']}
            alt="Picture of the author"
          />
        </VStack>
      </Grid>
    </Box>
  );
}
