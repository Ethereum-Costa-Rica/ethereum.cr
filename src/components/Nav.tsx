import { Flex } from "@chakra-ui/react";
import EthCrLogo from "./eth-cr-logo";
import ButtonDonations from "./ButtonDonations";

const Nav = () => {
  return (
    <Flex
      direction="row"
      px={["1%", "1%", "5%"]}
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <EthCrLogo />
      <ButtonDonations />
    </Flex>
  );
};

export default Nav;
