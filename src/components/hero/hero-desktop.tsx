import { Box } from "@chakra-ui/react";
import Hero from "../v1/Hero";
import HeroHightLightDesktop from "./subComponents/hero-highlight-desktop";

const HeroDesktop = () => {
  return (
    <Box backgroundImage="assets/hero.jpg" backgroundSize="cover">
      <HeroHightLightDesktop
        highlightImgSrc="assets/eth-pura-vida/hero-highlight.svg"
        imageWidth={200}
        imageHeight={380}
        eventMainGraphicWidth={454}
        eventMainGraphicHeight={259.48}
        eventMainGraphicSrc="assets/eth-pura-vida/event-main-graphic.svg"
      />
    </Box>
  );
};

export default HeroDesktop;
