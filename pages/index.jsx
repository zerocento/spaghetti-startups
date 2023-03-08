import React from 'react';
import {
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Card,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { MainLayout } from '../components';
import { SearchIcon } from '@chakra-ui/icons';

export default function HomePage() {
  return (
    <MainLayout>
      <Stack spacing={{ base: '6', lg: '4' }}>
        <Flex
          w={'full'}
          bg="#000051"
          height={{ base: '200px', md: '240px', lg: '280px' }}
          p={{ base: 4 }}
          color="white"
          justifyContent={'center'}
          flexDir="column"
          backgroundImage={'/img/banner_home_background.svg'}
          backgroundPosition="right bottom"
          backgroundRepeat={'no-repeat'}
          backgroundSize="contain"
        >
          <Heading fontSize={{ base: '2xl', md: '4xl' }}>
            Il tuo prossimo investimento?
          </Heading>
          <Text fontSize="xl">Ti aiutiamo a scoprirlo</Text>
        </Flex>
        <Grid
          templateAreas={{
            base: `"search" "sort" "main"`,
            md: `"search sort"
            "filter main"`,
          }}
          templateColumns={{ base: 'repeat(4/1fr)', lg: 'repeat(12, 1fr)' }}
          gap={4}
          color="blackAlpha.700"
        >
          <GridItem colSpan={{ base: 4, md: 8 }} area={'search'}>
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input pr="220px" type="text" placeholder="Ricerca" />
              <InputRightElement width="200px" mr={2}>
                <Button h="36px" w="full">
                  Cerca
                </Button>
              </InputRightElement>
            </InputGroup>
          </GridItem>
          <GridItem bg="white" colSpan={4} area={'sort'} borderRadius={'4px'}>
            <Flex
              h="100%"
              justifyContent={'space-between'}
              alignItems="center"
              p={2}
            >
              <Text fontWeight={400} fontSize="sm" width={'50%'}>
                Ordina per:
              </Text>
              <Select
                width={'50%'}
                variant={'unstyled'}
                placeholder="Select option"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </GridItem>
          <GridItem
            bg="white"
            display={{ base: 'none', md: 'block' }}
            colSpan={4}
            area={'filter'}
          >
            Nav
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 8 }} area={'main'}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
              <Card minH="xs" />
              <Card minH="xs" />
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Stack>
    </MainLayout>
  );
}
