import { Flex, Text, Center, Button, useMediaQuery } from "@chakra-ui/react";
import EthCrLogo from "../eth-cr-logo";
import EthCrDayLogo from "../eth-cr-day-logo";

const Banner = () => {
  const [isLargerThan1090] = useMediaQuery("(min-width: 1090px)");

  return (
    <Flex direction="column" justify="space-evenly" w="full" height={700}>
      <Center py="80px">
        <EthCrDayLogo />
      </Center>
      <Flex
        direction={isLargerThan1090 ? "row" : "column"}
        wrap="wrap"
        justify="space-evenly"
        alignItems="center"
        maxW="1376px"
        m="auto"
      >
        <Text
          as="b"
          align="center"
          fontSize={{ sm: "subtitle", md: "xl" }}
          mx={{ sm: 2, md: 8 }}
          my={4}
        >
          Un día para crecer, conectar y apoyar
        </Text>
        <EthCrLogo />
        <Text
          as="b"
          align="center"
          fontSize={{ sm: "subtitle", md: "xl" }}
          mx={{ sm: 2, md: 8 }}
          my={4}
        >
          Sábado 18 de Noviembre del 2023
        </Text>
      </Flex>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt="78px"
        mb="94px"
        gap="60px"
      >
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
          href="https://www.checkmyticket.xyz/event/9bf60e16-47e9-4823-a10a-2814fb21aa8a"
          variant="primary"
        >
          Registrarse
        </Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
