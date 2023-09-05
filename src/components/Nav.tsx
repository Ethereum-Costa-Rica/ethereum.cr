import { Flex, Button } from "@chakra-ui/react";
import EthCrLogo from "./eth-cr-logo";
import  ButtonDonations  from "./ButtonDonations";

const Nav = () => {
  const handleButtonClick = () => {};

  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <EthCrLogo />
      <ButtonDonations />
    </Flex>
  );
};

export default Nav;
