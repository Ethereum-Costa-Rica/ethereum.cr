import { Flex, Text } from "@chakra-ui/react";
import EthCrLogo from "../eth-cr-logo";

const Banner = () => {
  return (
    <Flex direction="column" justify="space-evenly" w="full" height={700}>
      <Flex direction="row" justify="space-evenly">
        <Text>Una iniciativa promovida y desarrollada por</Text>
        <EthCrLogo />
        <Text>Lorem ipsum Lorem ipsum</Text>
      </Flex>

      <Flex direction="row"></Flex>
    </Flex>
  );
};

export default Banner;
