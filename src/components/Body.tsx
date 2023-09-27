import {
  Text,
  Flex,
  Box,
  Container,
  Center,
  Button,
  useBreakpoint,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import BackgroundWrapperCommunity from "./BackgroundWrapperCommunity";
import Banner from "@/components/eth-cr-day/banner";
import { useEffect } from "react";
import Image from "next/image";
import CRIcon from "../../public/cr-icon.svg";
import socialIcon from "../../public/social-icon.svg";
import EthCrIcon from "../../public/ethcr-icon.svg";
import telegramIcon from "../../public/telegram-icon.svg";
import xIcon from "../../public/x-icon.svg";
import facebookIcon from "../../public/facebook-icon.svg";
import linkedinIcon from "../../public/linkedin-icon.svg";
import meetupIcon from "../../public/meetup-icon.svg";
import SubstackWidget from "./SubStackWidet";

const Body = () => {
  const breakpoint = useBreakpoint();
  const _breakpoints = ["base", "xs", "sm", "md"];

  useEffect(() => {
    console.log(breakpoint);
  }, [breakpoint]);

  return (
    <div>
      <Wrap
        minWidth="initial"
        alignItems="stretch"
        spacing="144px"
        justify="center"
        backgroundColor="#0F2841"
        mb="50px"
      >
        <WrapItem>
          <Container centerContent mt="150px">
            <Image width={97} height={93} src={CRIcon} alt="Costa Rica Icon" />
            <Text
              variant="card-title"
              textAlign="center"
              maxW={270}
              lineHeight="100%"
              color="white"
              mt={7}
              mb={4}
            >
              No importa en que provincia estés
            </Text>
            <Text fontSize="xl" textAlign="center" color="white">
              Realizamos actividades presenciales y online. ¡Queremos que
              crezcan las comunidades locales alrededor del país también!
            </Text>
          </Container>
        </WrapItem>
        <WrapItem>
          <Container centerContent mb="150px" mt="150px">
            <Image width={97} height={93} src={socialIcon} alt="Social Icon" />
            <Text
              fontSize="3xl"
              textAlign="center"
              fontWeight={700}
              maxW={275}
              lineHeight="100%"
              color="white"
              mt={7}
              mb={4}
            >
              Conecta con personas increíbles
            </Text>
            <Text fontSize="xl" textAlign="center" color="white">
              Personas abiertas y colaborativas. Algunos expertos en sus campos,
              otros entusiastas, todos buscando crecer y aprender en comunidad.
            </Text>
          </Container>
        </WrapItem>
      </Wrap>
      <Box mt="125px">
        <Banner />
      </Box>
      <BackgroundWrapperCommunity>
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Flex direction="column">
            <Box mb="32">
              <Text
                variant="main-title-alternative"
                maxW={700}
                lineHeight="100%"
                align="center"
              >
                Conecta con la{" "}
                <Text as="span" color="red">
                  comunidad
                </Text>
              </Text>
            </Box>
            <Flex justifyContent="space-between" mb="36">
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                target="_blank"
                href="https://t.me/EthereumCR"
              >
                <Image src={telegramIcon} alt="Telegram Icon" />
              </Button>
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                target="_blank"
                href="https://x.com/ethereumcr"
              >
                <Image src={xIcon} alt="x Icon" />
              </Button>
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100095125751451&mibextid=nW3QTL"
              >
                <Image src={facebookIcon} alt="Facebook Icon" />
              </Button>
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                target="_blank"
                href="https://www.linkedin.com/company/ethereum-costa-rica/"
              >
                <Image src={linkedinIcon} alt="LinkedIn Icon" />
              </Button>
              <Button
                p="4"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                as="a"
                target="_blank"
                href="https://www.meetup.com/es/ethereumcr/"
              >
                <Image src={meetupIcon} alt="Meetup Icon" />
              </Button>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              mb="44"
            >
              <Text variant="sub-title" mb={4}>
                Suscribite a nuestro boletín
              </Text>
              <SubstackWidget />
            </Flex>
            <Center mb="36">
              <Image
                width={87}
                height={134}
                src={EthCrIcon}
                alt="Ethereum Costa Rica"
              />
            </Center>
          </Flex>
        </Flex>
      </BackgroundWrapperCommunity>
    </div>
  );
};

export default Body;
