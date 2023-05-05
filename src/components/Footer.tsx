import { Flex, Box, Text, Button, Wrap, WrapItem, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Wrap justify='space-between' px="90px" pt={10} pb={10} backgroundColor="#EDF2F7">
        <WrapItem>
        <Flex direction="column">
            <Flex alignItems="center" mb={-3}>
              <Text fontSize='4xl'>Ethereum<Text fontSize='4xl' color="red" ml={2} as='b'>Costa Rica</Text>
              </Text>
            </Flex>
            <Text fontSize='xl' mb={5}>Creado con amor por la comunidad</Text>
            <Text fontSize='lg'>2023</Text>
          </Flex>
        </WrapItem>
        <WrapItem>
          <Button mt="32px" maxW="142px" color="red" colorScheme='red' variant='outline'>Donar con crypto</Button>
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default Footer;