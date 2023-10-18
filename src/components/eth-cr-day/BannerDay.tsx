import { Flex, Text, Center, Button, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import resizedLogo from "../../../public/eth-cr-day-resized.svg";
import EthCrLogo from "../eth-cr-logo";
import EthCrDayLogo from "../eth-cr-day-logo";
import ButtonDonations from "../ButtonDonations";

const Banner = () => {
  const [isLargerThan1090] = useMediaQuery("(min-width: 1090px)");
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)");

  return (
    <Flex direction="column" justify="space-evenly" w="full" gap={45}>
      <Center>
        {isLargerThan450 ? (
          <EthCrDayLogo />
        ) : (
          <Image src={resizedLogo} alt="Ethereum Costa Rica Day" />
        )}
      </Center>
      <Flex
        direction={isLargerThan1090 ? "row" : "column"}
        wrap="wrap"
        justify="space-evenly"
        alignItems="center"
        maxW="1376px"
        m="auto"
        gap={["10px", "10px", "70px"]}
      >
        <Text
          as="b"
          align="center"
          fontSize={{ sm: "subtitle", md: "xl" }}
          my={0}
        >
          Una iniciativa promovida y desarrollada por
        </Text>
        <EthCrLogo />
        <Text
          as="b"
          align="center"
          fontSize={{ sm: "subtitle", md: "xl" }}
          mx={{ sm: 2, md: 8 }}
        >
          trabajando con amor para la comunidad
        </Text>
      </Flex>
      <Flex direction="row" alignItems="center" justifyContent="center">
        <ButtonDonations />
        <Button
          width="160px"
          ml={45}
          as="a"
          href="https://www.checkmyticket.xyz/event/9bf60e16-47e9-4823-a10a-2814fb21aa8a"
          variant="primary"
        >
          Registrarse
        </Button>
      </Flex>
      <Center pb={{ sm: "10px", md: "50px" }}>
        <Text
          fontSize={{ sm: "xl", md: "3xl" }}
          height="114px"
          fontWeight={700}
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
