import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Flex } from "@chakra-ui/react";
import Hero from "@/components/hero/index";
import HomeContent from "@/components/home-content/index";
import {
  ETH_CR_LOGO,
  ETH_CR_LOGO_WHITE,
  TRANSPARENT_BG_COLOR,
  WHITE_BG_COLOR,
} from "@/constants/navbar";

export default function Home() {
  return (
    <Flex h="auto" direction="column" justifyContent="space-between">
      <NavBar
        baseBgColor={TRANSPARENT_BG_COLOR}
        extendedBgColor={WHITE_BG_COLOR}
        baseLogo={ETH_CR_LOGO_WHITE}
        extendedLogo={ETH_CR_LOGO}
        baseMenuLogoColor="white"
        extendedMenuLogoColor="black"
      />
      <Hero />
      <HomeContent />
      <Footer />
    </Flex>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
