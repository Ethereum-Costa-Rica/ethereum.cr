import { Box, Button, Icon, useTheme, Text } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import HeroHighlightMobile from "./subComponents/hero-highlight-mobile";

const HeroMobile = () => {
  const baseAssetsUrl = "assets/eth-pura-vida/";
  const { t, ready } = useTranslation();
  const theme = useTheme();
  if (!ready) return null;

  const ethPuraVidaExtraChildren = (
    <>
      <Image
        width={240}
        height={68}
        src={`${baseAssetsUrl}eth-pura-vida-date.svg`}
        alt="ETH Pura Vida Date"
      />
      <Button
        variant="eth-pura-vida"
        size="sm"
        as="a"
        href="/events/eth-pura-vida"
      >
        <Text>{t("learnMore")}</Text>
        <Icon w="24px" h="24px" as={MdArrowForward} />
      </Button>
    </>
  );

  return (
    <Box
      backgroundImage="assets/hero.jpg"
      backgroundSize="cover"
      h="628px"
      padding={theme.spacing.mobile.paddingX}
    >
      <HeroHighlightMobile
        highlightImgSrc={`${baseAssetsUrl}hero-highlight.svg`}
        imageWidth={156}
        imageHeight={232}
        eventMainGraphicSrc={`${baseAssetsUrl}event-main-graphic.svg`}
        eventMainGraphicWidth={310}
        eventMainGraphicHeight={57}
        children={ethPuraVidaExtraChildren}
      />
    </Box>
  );
};

export default HeroMobile;
