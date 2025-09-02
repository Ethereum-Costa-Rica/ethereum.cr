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
import Partners from "@/components/event/partners";
import FooterDesktop from "@/components/footer/footer-desktop";
import EmailModal from "@/components/email-modal";
import { generateUUID } from "@/utils/generateUid";
import { useEffect, useState } from "react";

const uniqueKey = "uniqueUUID";

export default function Home() {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [key] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem(uniqueKey)
      : null
  );

  // Verificar si el UUID ya está en localStorage
  function checkAndShowDialog() {
    if (!key) {
      const uuid = generateUUID();
      window.localStorage.setItem(uniqueKey, uuid);
      setShowEmailModal(true);
    } else setShowEmailModal(false);
  }

  useEffect(() => {
    checkAndShowDialog();
  }, [key]);

  return (
    <Flex
      h="auto"
      direction="column"
      justifyContent="space-between"
      width="100%"
    >
      <EmailModal showDialog={showEmailModal} />
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
            baseTextColor="white"
            extendedTextColor="black"
          />
        )}
      </Flex>
      {isMobile ? <HeroMobile /> : <HeroDesktop />}
      <HomeContent />
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </Flex>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
