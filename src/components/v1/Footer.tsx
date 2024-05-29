import { Flex, Text } from "@chakra-ui/react";
import ButtonDonations from "./ButtonDonations";

const Footer = () => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      alignItems="center"
      gap={5}
      minH="120px"
      p={[2, 5]}
      backgroundColor="#EDF2F7"
    >
      <Flex direction="row">
        <Text fontSize={["xl", "4xl"]}>Ethereum</Text>
        <Text fontSize={["xl", "4xl"]} color="red" ml={2} as="b">
          Costa Rica
        </Text>
      </Flex>
      <ButtonDonations />
    </Flex>
  );
};

export default Footer;
