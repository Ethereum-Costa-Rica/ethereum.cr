import { Flex, Text, Center, Button } from "@chakra-ui/react";
import EthCrLogo from "../eth-cr-logo";
import EthCrDayLogo from "../eth-cr-day-logo";

const Banner = () => {
  return (
    <Flex direction="column" justify="space-evenly" w="full" height={700}>
      <Center>
      <EthCrDayLogo />
      </Center>
      <Flex direction="row" justify="space-evenly" alignItems="center">
        <Text as='b'>Un día para crecer, conectar y apoyar</Text>
        <EthCrLogo />
        <Text as='b'>Sábado 18 de Noviembre del 2023</Text>
      </Flex>
      <Flex direction="row" alignItems="center" justifyContent="center" mt="78px" mb="94px" gap="60px">
      <Button
            maxW="142px"
            as="a"
            href="#"
            color="red"
            colorScheme="red"
            variant="outline"
          >
            Ver más Info
          </Button>
        <Button
            maxW="142px"
            as="a"
            href="#"
            variant="primary"
          >
            Registrarse
          </Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
