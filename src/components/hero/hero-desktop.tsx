import { Grid, GridItem } from "@chakra-ui/react";

import HeroHightLightDesktop from "./subComponents/hero-highlight-desktop";
import useColumnsWidth from "@/utils/hooks/useGridColumns";

const HeroDesktop = () => {
  const columnsWidth = useColumnsWidth();

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      backgroundImage="assets/hero.jpg"
      backgroundSize="cover"
      justifyContent="center"
    >
      <GridItem colSpan={12} mt="76px">
        <HeroHightLightDesktop
          highlightImgSrc="assets/eth-pura-vida/hero-highlight.svg"
          imageWidth={200}
          imageHeight={380}
          eventMainGraphicWidth={454}
          eventMainGraphicHeight={259.48}
          eventMainGraphicSrc="assets/eth-pura-vida/event-main-graphic.svg"
        />
      </GridItem>
    </Grid>
  );
};

export default HeroDesktop;
