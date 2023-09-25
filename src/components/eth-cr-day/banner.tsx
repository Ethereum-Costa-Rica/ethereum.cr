import { Flex, Text, Center, Button, Wrap, WrapItem, Box } from "@chakra-ui/react";
import EthCrLogo from "../eth-cr-logo";
import EthCrDayLogo from "../eth-cr-day-logo";

const Banner = () => {
  return (
    <Flex direction="column" justify="space-evenly" w="full" height={700}>
      <Center>
        <EthCrDayLogo />
      </Center>
      <Box mb="78px">
        <Wrap direction="row" justify="space-evenly" align="center">
          <WrapItem>
            <Text as='b'>Un día para crecer, conectar y apoyar</Text>
          </WrapItem>
          <WrapItem>
            <EthCrLogo />
          </WrapItem>
          <WrapItem>
            <Text as='b'>Sábado 18 de Noviembre del 2023</Text>
          </WrapItem>
        </Wrap>
      </Box>
      <Flex direction="row" alignItems="center" justifyContent="center" mt="78px" mb="94px" gap="60px">
        <Button
          maxW="142px"
          as="a"
          href="/day"
          color="red"
          colorScheme="red"
          variant="outline"
        >
          Ver más Info
        </Button>
        <Button
          maxW="142px"
          as="a"
          href="https://www.meetup.com/ethereumcr/events/295894129/?_xtd=gatlbWFpbF9jbGlja9oAJGM2NzkxZmUxLWVhZTctNGJiMC1iOTQ4LTJmMDk0NmU0NmE2YQ%253D%253D&_af=event&_af_eid=295894129"
          backgroundColor="red.500"
          color="white"
        >
          Registrarse
        </Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
