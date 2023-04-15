import Image from "next/image";
import { Flex, Button, Text, useBreakpoint } from "@chakra-ui/react";

import EthCrLogo from "../../public/eth-cr.svg";

const Hero = () => {
  const breakpoint = useBreakpoint()
  const _breakpoints = ['sm', 'md']

  return (
    <Flex
      paddingTop={10}
      px={[25, 50, 90]}
      direction="column"
      justifyContent="space-evenly"
      backgroundImage={!_breakpoints.includes(breakpoint) ? "url('/hero.svg')" : ''}
      backgroundRepeat="no-repeat"
      backgroundSize="auto 104vh"
      backgroundPosition="80% 0%"
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Image
          height={103}
          width={180}
          src={EthCrLogo}
          alt="Ethereum Costa Rica"
        />
        <Button color="red" colorScheme='red' variant='outline' as="a" href="https://t.me/EthereumCR">Quiero unirme</Button>
      </Flex>

      <Flex direction="row" alignItems="center" justifyContent="space-between" height={1000}>
        <Flex direction="column">
          <Text fontSize="50px" fontWeight={700} maxW={700} lineHeight="100%">
            Tu comunidad de <br /> Ethereum en <Text as="span" color="red">Costa Rica</Text>
          </Text>
          <Text color="gray.500" maxW={674}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet
            sint elit officia consequat.
          </Text>
          <Button mt="32px" maxW="142px" backgroundColor="red.500" color="white" as="a" href="https://t.me/EthereumCR">Quiero unirme</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;