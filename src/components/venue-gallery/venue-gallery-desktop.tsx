import { Grid, GridItem, useTheme } from "@chakra-ui/react";
import Image from "next/image";

import useColumnsWidth from "@/utils/hooks/useGridColumns";

const VenueGalleryDesktop = () => {
  const images = ["1", "2", "3"];
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      gap={theme.spacing.desktop.gridGap}
      w="100%"
      justifyContent="center"
      alignItems="center"
      py="48px"
    >
      {images.map((image, index) => (
        <GridItem colSpan={4} key="index">
          <Image
            src={`/assets/eth-pv-venue/${image}.png`}
            width={668.39}
            height={300}
            alt="Venue Gallery"
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default VenueGalleryDesktop;
