import React, { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { useRouter } from 'next/router';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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
import { ActionButton, SeparatorText, withUserSession } from '../components';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signup } from '../lib/api/signup';

function Signup() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const watchEmail = watch('password');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (value.password.length > 0) {
        setShowPasswordCheck(true);
      } else setShowPasswordCheck(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  async function onSubmit({ email, password }) {
    const response = await signup({ email, password });
    const error = await response.json();

    if (error.code === 'auth/email-already-exists') {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
      router.push({
        pathname: '/auth/confirmation_pending',
        query: { prop: email },
      });
    }
  }

  return (
    <Box
      bg="#000051"
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
              Crea il tuo account oggi!
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
                    L&apos;indirizzo email inserito risulta già iscritto a
                    Spaghetti Startups.
                    <Link href="/privacy-policy">
                      <Text as="u" color={'#000046'}>
                        Per favore, effettua la login
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
                    required: 'Il campo è obbligatorio',
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
                      required: 'Il campo è obbligatorio',
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Il formato non è valido',
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
              {showPasswordCheck && (
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
              )}
              <ActionButton
                text="Registrati Subito!"
                disabled={isSubmitting}
                margin={50}
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
              <Text fontSize={'12px'} color={'#000046'} mt={'15px'}>
                Registrandoti dai il tuo consenso alle{' '}
                <Link href="/privacy-policy">
                  <Text as="u">Privacy Policy</Text>{' '}
                </Link>{' '}
                e alle{' '}
                <Link href="/condizioni-di-servizio">
                  {' '}
                  <Text as="u">Condizioni di servizio </Text>{' '}
                </Link>
              </Text>
              <Text
                textAlign={'center'}
                fontSize={'16px'}
                color={'#000051'}
                mt="5"
              >
                Sei gia dei nostri? ,{' '}
                <Link href={'/login'}>
                  <Text as={'u'} color="#1A237E">
                    Accedi?
                  </Text>
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>

        <VStack
          alignItems={'center'}
          justifyContent={'center'}
          w={'100%'}
          h={'100%'}
        >
          <Image
            src="/img/signup_image.svg"
            w={['100%', '70%']}
            mt={['-60px', '0']}
            alt="Picture of the author"
          />
        </VStack>
      </Grid>
    </Box>
  );
}

export default withUserSession(Signup);
