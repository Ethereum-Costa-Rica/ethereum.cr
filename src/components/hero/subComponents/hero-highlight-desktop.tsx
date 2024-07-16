import { Flex, GridItem } from "@chakra-ui/react";

import { HeroHighLightProps } from "@/models/hero.type";

import Image from "next/image";
import { ReactNode } from "react";

type HeroHightLightDesktopType = {
  extraImageChild?: ReactNode;
};

const HeroHightLightDesktop = (
  props: HeroHighLightProps & HeroHightLightDesktopType
) => {
  const {
    highlightImgSrc,
    imageWidth,
    imageHeight,
    eventMainGraphicSrc,
    eventMainGraphicWidth,
    eventMainGraphicHeight,
    children,
    extraImageChild,
  } = props;

  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="380px"
    >
      <GridItem colSpan={5}>
        <Flex direction="column">
          <Image
            src={eventMainGraphicSrc}
            width={eventMainGraphicWidth}
            height={eventMainGraphicHeight}
            alt="Event Main Graphic"
          />
          {children}
        </Flex>
      </GridItem>
      <GridItem colSpan={7} display="flex" flexDirection="row">
        <Image
          src={highlightImgSrc}
          width={imageWidth}
          height={imageHeight}
          alt="Hero Highlight image"
        />
        {extraImageChild}
      </GridItem>
    </Flex>
  );
};

export default HeroHightLightDesktop;
