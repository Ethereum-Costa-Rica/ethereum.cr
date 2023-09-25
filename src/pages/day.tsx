import { Box, Text } from "@chakra-ui/react";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import Nav from "@/components/Nav";
import Banner from "@/components/eth-cr-day/banner";
import Community from "@/components/eth-cr-day/Community";

export default function EthCrDay() {
  return (
    <div>
      <Nav />
      <Box mt='80px'>
        <Banner />
        <Box>
            <Box mb="32">
              <Text
                fontSize="3xl"
                my='94px'
                mx="35px"
                fontWeight={700}
                lineHeight="100%"
                align="center"
              >
                Aprende, utiliza e involucrate en el mundo blockchain y web3, la revolución tecnológica del futuro.
              </Text>
            </Box>
        </Box>
      </Box>
      <Community />

    </div>
  );
}
