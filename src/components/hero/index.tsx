import { Box, useTheme } from "@chakra-ui/react";
import HeroHighlight from "./subComponents/hero-highlight";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      backgroundImage="assets/hero.jpg"
      backgroundSize="cover"
      h="628px"
      padding={theme.spacing.mobile.paddingX}
    >
      <HeroHighlight
        highlightImgSrc="assets/eth-pura-vida/hero-highlight.svg"
        imageWidth={156}
        imageHeight={232}
        eventMainGraphicSrc="assets/eth-pura-vida/event-main-graphic.svg"
        eventMainGraphicWidth={310}
        eventMainGraphicHeight={57}
      />
    </Box>
  );
};

export default Hero;
