import { Button, Text, Flex, Spacer, Box } from "@chakra-ui/react";
import Image from 'next/image';
import EthCrLogo from '../../public/eth-cr.svg';

const Footer = () => {
  return (
    <Flex
      paddingTop={10}
      px="90px"
      direction="column"
      justifyContent="space-evenly"
      backgroundColor="#EDF2F7"
      h="198px"
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Flex alignItems="center" mb={-3}>
            <Text fontSize='4xl'  color="red">Ethereum</Text>
            <Text fontSize='4xl' color="red" ml={2} as='b'>Costa Rica</Text>
          </Flex>
          <Text fontSize='xl' mb={5}>Creado con amor por la comunidad</Text>
          <Text fontSize='lg'>2023</Text>
        </Box>
        <Button color="red" colorScheme='red' variant='outline'>Donar con crypto</Button>
      </Flex>
    </Flex>
  );
};

export default Footer;