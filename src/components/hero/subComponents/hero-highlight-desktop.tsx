import { Flex, GridItem } from "@chakra-ui/react";

import { HeroHighLightProps } from "@/models/hero.type";

import Image from "next/image";

const HeroHightLightDesktop = (props: HeroHighLightProps) => {
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
      <GridItem colSpan={7}>
        <Image
          src={highlightImgSrc}
          width={imageWidth}
          height={imageHeight}
          alt="Hero Highlight image"
        />
      </GridItem>
    </Flex>
  );
};

export default HeroHightLightDesktop;
