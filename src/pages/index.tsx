import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Flex, useMediaQuery } from "@chakra-ui/react";

import NavBarMobile from "@/components/navbar/nav-bar-mobile";
import NavBarDesktop from "@/components/navbar/nav-bar-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeroMobile from "@/components/hero/hero-mobile";
import HomeContent from "@/components/home-content/index";
import {
  ETH_CR_LOGO,
  ETH_CR_LOGO_WHITE,
  TRANSPARENT_BG_COLOR,
  WHITE_BG_COLOR,
} from "@/constants/navbar";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import HeroDesktop from "@/components/hero/hero-desktop";
import FooterDesktop from "@/components/footer/footer-desktop";

export default function Home() {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <Flex
      h="auto"
      direction="column"
      justifyContent="space-between"
      width="100%"
    >
      <Flex direction="row" justifyContent="center">
        {isMobile ? (
          <NavBarMobile
            baseBgColor={TRANSPARENT_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_LOGO_WHITE}
            extendedLogo={ETH_CR_LOGO}
            baseMenuLogoColor="white"
            extendedMenuLogoColor="black"
          />
        ) : (
          <NavBarDesktop
            baseBgColor={TRANSPARENT_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_LOGO_WHITE}
            extendedLogo={ETH_CR_LOGO}
          />
        )}
      </Flex>
      {isMobile ? <HeroMobile /> : <HeroDesktop />}
      <HomeContent />
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
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
