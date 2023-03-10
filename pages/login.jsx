import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/router';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Flex,
  FormErrorMessage,
  IconButton,
  Image,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import {
  VStack,
  Grid,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ActionButton, SeparatorText } from '../components';

import Link from 'next/link';
import { UserAuth } from '../context/authContext';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { signIn } = UserAuth();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  async function onSubmit({ email, password }) {
    try {
      const userCredential = await signIn(email, password);
      console.log(userCredential);
      if (!userCredential.user.emailVerified) {
        setIsEmailError(true);
      } else {
        router.replace('/home');
      }
    } catch (error) {
      if (
        error.code == 'auth/user-not-found' ||
        error.code == 'auth/wrong-password'
      ) {
        alert('Credenziali Errate');
      }
      if (error.code == 'auth/too-many-requests') {
        alert('Hai eseguito troppi tentativi, riprova');
      }
    }
  }
  return (
    <Box
      bg="#000051"
      backgroundImage={['', '/img/login_image_desktop.svg']}
      backgroundSize={'cover'}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'center'}
      w={['100vw']}
      h={['100%', '100vh']}
      p={4}
      boxSizing={'border-box'}
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={6}
        h={'100%'}
      >
        <Flex
          bg="#FFFFFF"
          borderRadius={'4px'}
          w="100%"
          h="100%"
          justifyContent={'center'}
          alignItems={'center'}
          p={['20px', '']}
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
              Effettua il login al tuo Account!
            </Heading>
            <Box
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              mb={10}
              mt={0}
              mx={'auto'}
              maxW={'400px'}
            >
              {isEmailError && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>Ouch!</AlertTitle>
                  <AlertDescription>
                    Il tuo account non ?? stato attivato correttamente.{' '}
                    <Link href="/resend">
                      <Text as="u" color={'#000046'}>
                        Richiedi un&apos;altra mail di conferma
                      </Text>
                    </Link>
                  </AlertDescription>
                </Alert>
              )}
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
                    required: 'Il campo ?? obbligatorio',
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
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
              <ActionButton
                text="Accedi Subito!"
                margin={50}
                disabled={false}
              />
              <SeparatorText text="OPPURE" />
              <HStack mt={'20px'}>
                <Button
                  w={'100%'}
                  leftIcon={<BsGoogle />}
                  bg={'#FFFFFF'}
                  color={'#1A237E'}
                  fontSize={'16px'}
                  border={'1px'}
                  borderColor="#1A237E"
                  padding={'9px, 16px, 9px, 16px'}
                  _hover={{ borderColor: '#1A237E' }}
                >
                  Google
                </Button>
                <Button
                  w={'100%'}
                  leftIcon={<FaFacebookF />}
                  bg={'#FFFFFF'}
                  color={'#1A237E'}
                  fontSize={'16px'}
                  border={'1px'}
                  borderColor="#1A237E"
                  padding={'9px, 16px, 9px, 16px'}
                  _hover={{ borderColor: '#1A237E' }}
                >
                  Facebook
                </Button>
              </HStack>
              <Text
                textAlign={'center'}
                fontSize={'16px'}
                color={'#000051'}
                mt="5"
              >
                Non hai ancora un account?
              </Text>
              <Text
                textAlign={'center'}
                fontSize={'16px'}
                color={'#000051'}
                position={'relative'}
                zIndex={10}
              >
                Cosa aspetti ,{' '}
                <Link href={'/signup'}>
                  <Text as={'u'} color="#1A237E">
                    Registrati?
                  </Text>
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Grid>
      <Image
        src="/img/login_image_mobile.svg"
        display={['', 'none']}
        mt={'-107px'}
      ></Image>
    </Box>
  );
}
