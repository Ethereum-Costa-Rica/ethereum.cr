import { Flex, Text, Wrap, WrapItem, useToast, useClipboard } from "@chakra-ui/react";
import  ButtonDonations  from "./ButtonDonations";

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
          <ButtonDonations />
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default Footer;