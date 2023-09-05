import { Flex, Button } from "@chakra-ui/react";
import EthCrLogo from "./eth-cr-logo";

const Nav = () => {
  const handleButtonClick = () => {};

  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <EthCrLogo />
      <Button
        color="red"
        colorScheme="red"
        variant="outline"
        onClick={handleButtonClick}
      >
        Donar con crypto
      </Button>
    </Flex>
  );
};

export default Nav;
