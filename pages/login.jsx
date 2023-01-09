import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { IoCloseCircle } from 'react-icons/io5';
import { BsDot } from 'react-icons/bs';
import { useRouter } from 'next/router';

import {
  Center,
  Flex,
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
import ActionButton from '../components/ActionButton';
import SeparatorText from '../components/SeparatorText';
import Link from 'next/link';
import {
  getAuth,
  getIdToken,
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../lib/firebaseClientSetup';
import { UserAuth } from '../context/authContext';

export default function Login() {
  const { signIn } = UserAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  async function handleLogin(e) {
    e.preventDefault();
    const auth = getAuth(app);
    signIn(email, password);
    /*const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    
    const error = await response.json();
    console.log(error);
    */
  }
  return (
    <>
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
                Effettua il login al tuo Account!
              </Heading>
              <Box as="form" onSubmit={handleLogin} mb={10}>
                {isEmailError && (
                  <Flex w={'100%'}>
                    <IoCloseCircle color={'#CE0025'} fontSize={'28px'} />
                    <Text
                      color={'#CE0025'}
                      maxW="75%"
                      fontSize={'16px'}
                      ml={'15px'}
                      mb={'20px'}
                    >
                      L'indirizzo email inserito risulta già iscritto a
                      Spaghetti Startups.{' '}
                      <Link href="/privacy-policy">
                        <Text as="u">Per favore, effettua la login </Text>
                      </Link>{' '}
                    </Text>
                  </Flex>
                )}
                <FormControl mb={'15px'}>
                  <FormLabel fontSize={'16px'} color={'#000046'}>
                    E-mail
                  </FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={'Inserisci il tuo indirizzo mail'}
                    border="1px"
                    borderColor="#000046"
                    _hover={{ borderColor: '#000046' }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={'16px'} color={'#000046'}>
                    Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => handleChangePassword(e.target.value)}
                      placeholder={'Crea una password'}
                      border="1px"
                      borderColor="#000046"
                      _hover={{ borderColor: '#000046' }}
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
                </FormControl>
                <ActionButton
                  text="Accedi Subito!"
                  margin={50}
                  disabled={false}
                />
              </Box>
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
    </>
  );
}
