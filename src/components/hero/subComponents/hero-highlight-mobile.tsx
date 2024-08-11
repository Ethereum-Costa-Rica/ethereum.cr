import React from "react";
import { Flex, useTheme } from "@chakra-ui/react";
import Image from "next/image";

import { HeroHighLightProps } from "@/models/hero.type";

const HeroHighlightMobile = (props: HeroHighLightProps) => {
  const theme = useTheme();
  const {
    highlightImgSrc,
    imageWidth,
    imageHeight,
    eventMainGraphicSrc,
    eventMainGraphicWidth,
    eventMainGraphicHeight,
    children,
  } = props;

  return (
    <Flex
      direction="column"
      alignItems="start"
      justifyContent="end"
      h="100%"
      gap={theme.spacing.mobile.verticalGag}
    >
      <Image
        src={highlightImgSrc}
        width={imageWidth}
        height={imageHeight}
        alt="Hero Highlight image"
      />
      <Image
        src={eventMainGraphicSrc}
        width={eventMainGraphicWidth}
        height={eventMainGraphicHeight}
        alt="Event Main Graphic"
      />
      {children}
    </Flex>
  );
};

export default HeroHighlightMobile;
