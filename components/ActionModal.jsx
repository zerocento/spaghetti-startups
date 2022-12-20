import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const ActionModal = ({ title, image, subtitle, text }) => (
  <Flex
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
  >
    <Image src={image} />
    <Heading>{title}</Heading>
    <Text>{subtitle}</Text>
    <Text>{text}</Text>
  </Flex>
);

export default ActionModal;
