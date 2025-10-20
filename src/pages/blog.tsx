import { Box, Container, VStack, Heading, Link, Text } from "@chakra-ui/react";
import NavBarMobile from "@/components/navbar/nav-bar-mobile";
import NavBarDesktop from "@/components/navbar/nav-bar-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import FooterDesktop from "@/components/footer/footer-desktop";
import { ETH_CR_LOGO, WHITE_BG_COLOR } from "@/constants/navbar";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { useMediaQuery } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Blog = () => {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const { t } = useTranslation("common");

  return (
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

      <Container maxW="900px" px={12} py={8}>
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" color="black">
            Blog
          </Heading>

          <Box>
            <Heading as="h2" size="lg" mb={4} color="blue.600">
              Latest Posts
            </Heading>
            <Link
              href="/blog/pura-vida-ecosystem"
              color="blue.400"
              fontWeight="semibold"
              fontSize="lg"
            >
              🌎 {t("puraVidaBlogTitle")} →
            </Link>
            <Text mt={2} color="gray.600">
              {t("puraVidaBlogDesc")}
            </Text>
          </Box>
        </VStack>
      </Container>

      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </Box>
  );
};

export default Blog;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
