import { Text, Flex, Spacer, Box, Container, Center, Button } from '@chakra-ui/react';
import Image from 'next/image';
import CRIcon from "../../public/cr-icon.svg";
import socialIcon from "../../public/social-icon.svg";
import EthCrIcon from "../../public/ethcr-icon.svg";
import discordIcon from "../../public/discord-icon.svg";
import facebookIcon from "../../public/facebook-icon.svg";
import meetupIcon from "../../public/meetup-icon.svg";
import telegramIcon from "../../public/telegram-icon.svg"

const Body = () => {

  return (
    <div>
      <Flex minWidth='initial' alignItems='center' gap='2' backgroundColor="#0F2841" h='500px'>
        <Spacer />
        <Container centerContent>
          <Image
            width={97}
            height={93}
            src={CRIcon}
            alt="Costa Rica Icon"
          />
          <Text fontSize="3xl" fontWeight={700} maxW={700} lineHeight="100%" color="white" mt={7} mb={4}>
            No importa en <br />que provincia estés
          </Text>
          <Text fontSize='xl' color="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint elit officia.</Text>
        </Container>
        <Spacer />
        <Container centerContent>
          <Image
            width={97}
            height={93}
            src={socialIcon}
            alt="Social Icon"
          />
          <Text fontSize="3xl" fontWeight={700} maxW={700} lineHeight="100%" color="white" mt={7} mb={4}>
            Conecta con <br />personas increíbles
          </Text>
          <Text fontSize='xl' color="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint elit officia.</Text>
        </Container>
        <Spacer />
      </Flex>

      <Flex
        paddingTop={10}
        px="90px"
        direction="column"
        justifyContent="space-evenly"
        backgroundImage="url('/hero.svg')"
        backgroundRepeat="no-repeat"
        backgroundSize="auto 104vh"
        backgroundPosition="80% 0%"
      >
        <Flex direction="row" alignItems="center" justifyContent="center" height={760}>
          <Flex direction="column">
            <Center>
              <Box mb="16">
                <Text fontSize="5xl" fontWeight={700} maxW={700} lineHeight="100%">
                  Conecta con la comunidad
                </Text>
              </Box>
            </Center>
            <Flex justifyContent="space-between">
              <Box p='4'>
                <Image
                  width={57}
                  height={56}
                  src={discordIcon}
                  alt="Discord Icon"
                />
              </Box>
              <Box p='4'>
                <Image
                  width={57}
                  height={56}
                  src={facebookIcon}
                  alt="Facebook Icon"
                />
              </Box>
              <Box p='4'>
                <Image
                  width={57}
                  height={56}
                  src={meetupIcon}
                  alt="Meetup Icon"
                />
              </Box>
              <Box p='4'>
                <Image
                  width={57}
                  height={56}
                  src={telegramIcon}
                  alt="Telegram Icon"
                />
              </Box>
            </Flex>
            <Center mt="16">
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