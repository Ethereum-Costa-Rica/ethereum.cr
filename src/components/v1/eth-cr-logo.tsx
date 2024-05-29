import { Box, Image } from "@chakra-ui/react";

const EthCrLogo = () => {
  return (
    <Box>
      <Image
        boxSize={["120px", "140px", "220px"]}
        src="./eth-cr.svg"
        alt="Ethereum Costa Rica"
      />
    </Box>
  );
};

export default EthCrLogo;
