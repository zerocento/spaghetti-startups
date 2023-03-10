import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';

import {
  Image,
  FormErrorMessage,
  Flex,
  IconButton,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';

import {
  VStack,
  Grid,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ActionModal, ActionButton } from '../../components';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { UserAuth } from '../../context/authContext';

export default function ResetPassword() {
  const router = useRouter();
  const { handleResetPassword } = UserAuth();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  async function onSubmit({ password }) {
    try {
      if (router.query.oobCode) {
        const oobCode = router.query.oobCode;
        return handleResetPassword(oobCode, password);
        // Localize the UI to the selected language as determined by the lang
        // parameter.

        // Verify the password reset code is valid.
      }
      //const res = await resetPassword({ password });
      //setConfirmationSent(true);
    } catch (error) {
      //setConfirmationSent(false);
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
              Imposta la nuova password
            </Heading>
            <Box as="form" onSubmit={handleSubmit(onSubmit)} mb={10}>
              <FormControl isInvalid={!!errors.password} mb={'15px'}>
                <FormLabel
                  htmlFor="password"
                  fontSize={'16px'}
                  color={'#000046'}
                >
                  Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'Crea una password'}
                    border="1px"
                    borderColor="#000046"
                    _hover={{ borderColor: '#000046' }}
                    {...register('password', {
                      required: 'Il campo ?? obbligatorio',
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/,
                        message: 'Il formato non ?? valido',
                      },
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton
                      aria-label="Search database"
                      fontSize={'20px'}
                      icon={
                        showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                      }
                      onClick={handleShowPassword}
                      bg={'transparent'}
                      _hover={{ background: 'transparent' }}
                      _focus={{ background: 'transparent' }}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Box mt={'30px'}>
                <Text fontSize={'14px'} color={'#000046'}>
                  La password deve contenere:
                </Text>
                <Grid templateColumns={'repeat(2, 1fr)'}>
                  <Flex alignItems={'center'}>
                    <BsDot fontSize={'30px'} color={'#FF6F00'} />
                    <Text color={'#000046'} fontSize={['14px', '16px']}>
                      8-16 caratteri
                    </Text>
                  </Flex>
                  <Flex alignItems={'center'}>
                    <BsDot fontSize={'30px'} color={'#FF6F00'} />
                    <Text color={'#000046'} fontSize={['14px', '16px']}>
                      Min 1 una lettera maiuscola
                    </Text>
                  </Flex>
                  <Flex alignItems={'center'}>
                    <BsDot fontSize={'30px'} color={'#FF6F00'} />
                    <Text color={'#000046'} fontSize={['14px', '16px']}>
                      Min 1 numero
                    </Text>
                  </Flex>
                  <Flex alignItems={'center'}>
                    <BsDot fontSize={'30px'} color={'#FF6F00'} />
                    <Text fontSize={['14px', '16px']} color={'#000046'}>
                      Min 1 una lettera minuscola
                    </Text>
                  </Flex>
                </Grid>
              </Box>

              <ActionButton text="Invia" margin={50} disabled={false} />
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
