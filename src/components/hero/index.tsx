import { Box, Button, Icon, useTheme } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

import HeroHighlight from "./subComponents/hero-highlight";
import Image from "next/image";

const Hero = () => {
  const baseAssetsUrl = "assets/eth-pura-vida/";
  const theme = useTheme();
  const ethPuraVidaExtraChildren = (
    <>
      <Image
        width={240}
        height={68}
        src={`${baseAssetsUrl}eth-pura-vida-date.svg`}
        priority
        alt="ETH Pura Vida Date"
      />
      <Button variant="primary" size="sm">
        Know More
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
      <HeroHighlight
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

export default Hero;
