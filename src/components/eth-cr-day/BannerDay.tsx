import { Flex, Text, Center, Button, Box } from "@chakra-ui/react";
import EthCrLogo from "../eth-cr-logo";
import EthCrDayLogo from "../eth-cr-day-logo";
import ButtonDonations from "../ButtonDonations";

const Banner = () => {
  return (
    <Flex direction="column" justify="space-evenly" w="full">
      <Center>
        <EthCrDayLogo />
      </Center>
      <Flex direction="row" justify="space-evenly" alignItems="center">
        <Text as="b" fontSize="xl">
          Una iniciativa promovida y desarrollada por
        </Text>
        <EthCrLogo />
        <Text as="b" fontSize="xl">
          trabajando con amor para la comunidad
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
        <ButtonDonations />
        <Button width="160px" as="a" href="#" variant="primary">
          Registrarse
        </Button>
      </Flex>
      <Center pb="50px">
        <Text
          as="b"
          fontSize="3xl"
          width="1216px"
          height="114px"
          textAlign="center"
        >
          Aprende, utiliza e involucrate en el mundo blockchain y web3, la
          revolución tecnológica del futuro.
        </Text>
      </Center>
    </Flex>
  );
};

export default Banner;
