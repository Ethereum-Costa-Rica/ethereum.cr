// import Image from "next/image";
import {
  Flex,
  Button,
  Text,
  useBreakpoint,
  useToast,
  // useClipboard,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Nav from "./Nav";
import BackgroundWrapper from "./BackgroundWrapper";

const Hero = () => {
  const breakpoint = useBreakpoint();
  const _breakpoints = ["base", "xs", "sm", "md"];
  const wallet = "0x0004d7D8843Ba256f0CA0d835C0977C5D5375285";
  // const { onCopy, hasCopied } = useClipboard(wallet);
  const toast = useToast();

  // useEffect(() => {
  //   console.log(breakpoint);
  // }, [breakpoint]);

  // const handleButtonClick = () => {
  //   onCopy();
  //   showToast();
  // };

  return (
    <BackgroundWrapper>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height={1000}
      >
        <Flex direction="column">
          <Text variant="main-title-alternative" maxW={700} lineHeight="100%">
            Tu comunidad de <br /> Ethereum en{" "}
            <Text as="span" color="red">
              Costa Rica
            </Text>
          </Text>
          <Text color="gray.500" maxW={674}>
            Un espacio abierto para todas las personas para aprender de Web3,
            Ethereum y blockchain. Entusiastas, constructores, artistas,
            activistas sociales. Una tecnología para la coordinación humana.
          </Text>
          <Button
            mt="32px"
            maxW="142px"
            as="a"
            href="https://t.me/EthereumCR"
            variant="primary"
          >
            Quiero unirme
          </Button>
        </Flex>
      </Flex>
    </BackgroundWrapper>
  );
};

export default Hero;
