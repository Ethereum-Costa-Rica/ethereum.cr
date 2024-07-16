import { HeroHighLightProps } from "@/models/hero.type";
import { Flex } from "@chakra-ui/react";

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
      <Flex direction="column">
        <Image
          src={eventMainGraphicSrc}
          width={eventMainGraphicWidth}
          height={eventMainGraphicHeight}
          alt="Event Main Graphic"
        />
        {children}
      </Flex>
      <Image
        src={highlightImgSrc}
        width={imageWidth}
        height={380}
        alt="Hero Highlight image"
      />
    </Flex>
  );
};

export default HeroHightLightDesktop;
