import { Flex, Text, Center, Button } from "@chakra-ui/react";
import EthCrLogo from "../eth-cr-logo";
import EthCrDayLogo from "../eth-cr-day-logo";
import ButtonDonations from "../ButtonDonations";

const Banner = () => {
  return (
    <Flex direction="column" justify="space-evenly" w="full" height={700}>
      <Center>
        <EthCrDayLogo />
      </Center>
      <Flex direction="row" justify="space-evenly" alignItems="center">
        <Text as="b">Una iniciativa promovida y desarrollada por</Text>
        <EthCrLogo />
        <Text as="b">trabajando con amor para la comunidad</Text>
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
    </Flex>
  );
};

export default Banner;
