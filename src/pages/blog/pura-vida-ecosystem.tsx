import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Container,
  useMediaQuery,
  Image,
  Divider,
  Highlight,
  Flex,
  Badge,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NavBarMobile from "@/components/navbar/nav-bar-mobile";
import NavBarDesktop from "@/components/navbar/nav-bar-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import FooterDesktop from "@/components/footer/footer-desktop";
import { ETH_CR_LOGO, WHITE_BG_COLOR } from "@/constants/navbar";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";

export default function PuraVidaEcosystem() {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>The Pura Vida Web3 Ecosystem, 2025</title>
        <meta
          name="description"
          content="Overview of Costa Rica's Web3 ecosystem – regulation, talent, clean energy, and key players shaping the future of Ethereum & blockchain in Costa Rica."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ethcr-icon.svg" />
      </Head>

      <Box minH="100vh" bg="white">
        {isMobile ? (
          <NavBarMobile
            baseBgColor={WHITE_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_LOGO}
            extendedLogo={ETH_CR_LOGO}
            baseMenuLogoColor="black"
            extendedMenuLogoColor="black"
          />
        ) : (
          <NavBarDesktop
            baseBgColor={WHITE_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_LOGO}
            extendedLogo={ETH_CR_LOGO}
            baseTextColor="black"
            extendedTextColor="black"
          />
        )}

        <Container maxW="900px" mx="auto" px={6} py={8}>
          <VStack spacing={8} align="stretch">
            {/* Hero Section */}
            <Box textAlign="center" mt={20}>
              <Image
                src="/assets/eth-pura-vida/ethpv.svg"
                alt="ETH Pura Vida 2025"
                maxH="300px"
                mx="auto"
                mb={6}
                borderRadius="lg"
                boxShadow="lg"
              />
              <Heading as="h1" size="2xl" color="blue.600" mb={4}>
                🏝️ {t("puraVidaBlogTitle")}
              </Heading>
              <Text fontSize="xl" color="gray.600" fontWeight="medium">
                {t("puraVidaBlog.heroSubtitle")}
              </Text>
            </Box>

            <Divider />

            {/* 1. TL;DR Section */}
            <Box>
              <Heading as="h2" size="lg" mb={6} color="green.600">
                {t("puraVidaBlog.tldrTitle")}
              </Heading>
              <Box
                p={6}
                bg="green.50"
                borderRadius="lg"
                borderLeft="4px solid"
                borderLeftColor="green.400"
              >
                <Text fontSize="lg" mb={4} fontWeight="medium">
                  {t("puraVidaBlog.tldrIntro")}
                </Text>
                <VStack spacing={3} align="start">
                  <Text>{t("puraVidaBlog.tldrStats.mobile")}</Text>
                  <Text>{t("puraVidaBlog.tldrStats.energy")}</Text>
                  <Text>{t("puraVidaBlog.tldrStats.bitcoin")}</Text>
                  <Text>{t("puraVidaBlog.tldrStats.communities")}</Text>
                </VStack>
              </Box>
            </Box>

            <Divider />

            {/* 2. Regulatory Section */}
            <Box>
              <Heading as="h2" size="lg" mb={6} color="blue.600">
                {t("puraVidaBlog.regulatoryTitle")}
              </Heading>
              <Text mb={4} fontSize="lg" color="gray.700">
                {t("puraVidaBlog.regulatoryIntro")}
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box p={4} bg="blue.50" borderRadius="md">
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.regulatoryCards.permissions.title")}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.regulatoryCards.permissions.desc")}
                  </Text>
                </Box>
                <Box p={4} bg="blue.50" borderRadius="md">
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.regulatoryCards.framework.title")}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.regulatoryCards.framework.desc")}
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Divider />

            {/* 3. Builders Section */}
            <Box>
              <Heading as="h2" size="lg" mb={6} color="purple.600">
                {t("puraVidaBlog.buildersTitle")}
              </Heading>
              <Text mb={6} fontSize="lg" color="gray.700">
                <Highlight
                  query="learn, build, ship"
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "purple.100",
                  }}
                >
                  {t("puraVidaBlog.buildersIntro")}
                </Highlight>
              </Text>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={6}>
                <Box p={4} bg="purple.50" borderRadius="md" textAlign="center">
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.buildersCards.ethPuraVida.name")}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.buildersCards.ethPuraVida.desc")}
                  </Text>
                </Box>
                <Box p={4} bg="purple.50" borderRadius="md" textAlign="center">
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.buildersCards.refiCostaRica.name")}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.buildersCards.refiCostaRica.desc")}
                  </Text>
                </Box>
                <Box p={4} bg="purple.50" borderRadius="md" textAlign="center">
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.buildersCards.criptoCantina.name")}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.buildersCards.criptoCantina.desc")}
                  </Text>
                </Box>
              </SimpleGrid>

              <Box
                p={4}
                bg="yellow.50"
                borderRadius="md"
                borderLeft="4px solid"
                borderLeftColor="yellow.400"
              >
                <Text fontWeight="semibold" mb={2}>
                  {t("puraVidaBlog.startupsNote.title")}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {t("puraVidaBlog.startupsNote.desc")}
                </Text>
              </Box>
            </Box>

            <Divider />

            {/* 4. Academia Section */}
            <Box>
              <Heading as="h2" size="lg" mb={6} color="teal.600">
                {t("puraVidaBlog.academiaTitle")}
              </Heading>
              <Box p={6} bg="teal.50" borderRadius="lg" mb={4}>
                <Text
                  fontSize="lg"
                  fontWeight="medium"
                  mb={4}
                  textAlign="center"
                  color="teal.700"
                >
                  "{t("puraVidaBlog.academiaQuote")}"
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.academiaCards.cenfotec.title")}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={4}>
                    {t("puraVidaBlog.academiaCards.cenfotec.desc")}
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.academiaCards.tec.title")}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={4}>
                    {t("puraVidaBlog.academiaCards.tec.desc")}
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.academiaCards.dojo.title")}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={4}>
                    {t("puraVidaBlog.academiaCards.dojo.desc")}
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    {t("puraVidaBlog.academiaCards.hackerHouse.title")}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={4}>
                    {t("puraVidaBlog.academiaCards.hackerHouse.desc")}
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Divider />

            {/* 5. Events Section */}
            <Box>
              <Heading as="h2" size="lg" mb={6} color="orange.600">
                {t("puraVidaBlog.eventsTitle")}
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
                <Box p={4} bg="orange.50" borderRadius="md">
                  <Flex align="center" mb={2}>
                    <Badge colorScheme="orange" mr={2}>
                      {t("puraVidaBlog.eventsCards.blockchainJungle.year")}
                    </Badge>
                    <Text fontWeight="semibold">
                      {t("puraVidaBlog.eventsCards.blockchainJungle.name")}
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.eventsCards.blockchainJungle.attendees")}
                  </Text>
                </Box>
                <Box p={4} bg="orange.50" borderRadius="md">
                  <Flex align="center" mb={2}>
                    <Badge colorScheme="blue" mr={2}>
                      {t("puraVidaBlog.eventsCards.ethPuraVida.year")}
                    </Badge>
                    <Text fontWeight="semibold">
                      {t("puraVidaBlog.eventsCards.ethPuraVida.name")}
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.eventsCards.ethPuraVida.attendees")}
                  </Text>
                </Box>
                <Box p={4} bg="orange.50" borderRadius="md">
                  <Flex align="center" mb={2}>
                    <Badge colorScheme="green" mr={2}>
                      {t("puraVidaBlog.eventsCards.dojoHackathon.year")}
                    </Badge>
                    <Text fontWeight="semibold">
                      {t("puraVidaBlog.eventsCards.dojoHackathon.name")}
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.eventsCards.dojoHackathon.attendees")}
                  </Text>
                </Box>
                <Box p={4} bg="orange.50" borderRadius="md">
                  <Flex align="center" mb={2}>
                    <Badge colorScheme="purple" mr={2}>
                      {t("puraVidaBlog.eventsCards.ticoBlockchain.year")}
                    </Badge>
                    <Text fontWeight="semibold">
                      {t("puraVidaBlog.eventsCards.ticoBlockchain.name")}
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.600">
                    {t("puraVidaBlog.eventsCards.ticoBlockchain.attendees")}
                  </Text>
                </Box>
              </SimpleGrid>

              <Box p={4} bg="green.50" borderRadius="md" textAlign="center">
                <Text fontWeight="semibold" mb={2}>
                  {t("puraVidaBlog.upcoming.title")}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {t("puraVidaBlog.upcoming.events")}
                </Text>
                <Text
                  mt={2}
                  fontSize="lg"
                  color="green.600"
                  fontWeight="medium"
                >
                  {t("puraVidaBlog.upcoming.slogan")}
                </Text>
              </Box>
            </Box>

            <Divider />

            {/* 6. Road Ahead Section */}
            <Box>
              <Heading as="h2" size="lg" mb={6} color="red.600">
                {t("puraVidaBlog.roadAheadTitle")}
              </Heading>
              <Box p={6} bg="red.50" borderRadius="lg">
                <Text fontSize="lg" mb={4} fontWeight="medium" color="red.700">
                  {t("puraVidaBlog.roadAheadIntro")}
                </Text>
                <VStack spacing={3} align="start">
                  <Text>{t("puraVidaBlog.roadAheadPoints.energy")}</Text>
                  <Text>{t("puraVidaBlog.roadAheadPoints.talent")}</Text>
                  <Text>{t("puraVidaBlog.roadAheadPoints.politics")}</Text>
                  <Text>{t("puraVidaBlog.roadAheadPoints.spirit")}</Text>
                </VStack>
                <Text mt={4} fontSize="md" color="gray.600">
                  {t("puraVidaBlog.roadAheadConclusion")}
                </Text>
              </Box>
            </Box>

            <Divider />

            {/* CTA Final */}
            <Box textAlign="center" p={6} bg="gray.50" borderRadius="lg">
              <Text fontSize="lg" mb={4} fontWeight="medium">
                {t("puraVidaBlog.cta.text")}{" "}
                <Link
                  href="https://ethereum.cr/blog/pura-vida-ecosystem"
                  color="blue.500"
                  isExternal
                  fontWeight="semibold"
                >
                  {t("puraVidaBlog.cta.link")}
                </Link>
              </Text>
              <Text color="gray.600">{t("puraVidaBlog.cta.footer")}</Text>
            </Box>
          </VStack>
        </Container>

        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
