import { Text, Flex, Spacer, Box, Container, Center, Button, useBreakpoint, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect } from "react";
import Image from 'next/image';
import CRIcon from "../../public/cr-icon.svg";
import socialIcon from "../../public/social-icon.svg";
import EthCrIcon from "../../public/ethcr-icon.svg";
import discordIcon from "../../public/discord-icon.svg";
import facebookIcon from "../../public/facebook-icon.svg";
import meetupIcon from "../../public/meetup-icon.svg";
import telegramIcon from "../../public/telegram-icon.svg"

const Body = () => {
  const breakpoint = useBreakpoint()
  const _breakpoints = ['base', 'xs', 'sm', 'md']

  useEffect(() => {
    console.log(breakpoint)
  }, [breakpoint])

  return (
    <div>
      <Wrap minWidth='initial' alignItems='stretch' spacing='30px' justify='center' backgroundColor="#0F2841">
        <WrapItem>
          <Container centerContent mt="150px">
            <Image
              width={97}
              height={93}
              src={CRIcon}
              alt="Costa Rica Icon"
            />
            <Text fontSize="3xl" textAlign="center" fontWeight={700} maxW={270} lineHeight="100%" color="white" mt={7} mb={4}>
              No importa en que provincia estés
            </Text>
            <Text fontSize='xl' textAlign="center" color="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint elit officia.</Text>
          </Container>
        </WrapItem>
        <WrapItem>
        <Container centerContent mb="150px" mt="150px">
          <Image
            width={97}
            height={93}
            src={socialIcon}
            alt="Social Icon"
          />
          <Text fontSize="3xl" textAlign="center" fontWeight={700} maxW={275} lineHeight="100%" color="white" mt={7} mb={4}>
            Conecta con personas increíbles
          </Text>
          <Text fontSize='xl' textAlign="center" color="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint elit officia.</Text>
        </Container>
        </WrapItem>
      </Wrap>

      <Flex
        paddingTop={10}
        px="90px"
        direction="column"
        justifyContent="space-evenly"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          backgroundImage={!_breakpoints.includes(breakpoint) ? "url('/hero2.svg')" : ''}
          backgroundRepeat="no-repeat"
          backgroundSize="auto 104vh"
          backgroundPosition="95% -85%"
          zIndex={-1}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          backgroundImage={!_breakpoints.includes(breakpoint) ? "url('/hero1.svg')" : ''}
          backgroundRepeat="no-repeat"
          backgroundSize="auto 104vh"
          backgroundPosition="15% 350%"
          zIndex={-2}
        />
        <Flex direction="row" alignItems="center" justifyContent="center" height={760}>
          <Flex direction="column">
            <Center>
              <Box mb="32">
                <Text fontSize="5xl" fontWeight={700} maxW={700} lineHeight="100%">
                  Conecta con la <Text as="span" color="red">comunidad</Text>
                </Text>
              </Box>
            </Center>
            <Flex justifyContent="space-between" mb="44" marginInline="75px">
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                href="https://t.me/EthereumCR"
              >
                <Image src={discordIcon} alt="Discord Icon" />
              </Button>
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                href="https://twitter.com/ethereumcr"
              >
                <Image src={facebookIcon} alt="Facebook Icon" />
              </Button>
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                href="https://www.meetup.com/es/ethereumcr/"
              >
                <Image src={meetupIcon} alt="Meetup Icon" />
              </Button>
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                href="https://t.me/EthereumCR"
              >
                <Image src={telegramIcon} alt="Telegram Icon" />
              </Button>
            </Flex>
            <Center mb="8">
              <Image
                width={87}
                height={134}
                src={EthCrIcon}
                alt="Ethereum Costa Rica"
              />
            </Center>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Body