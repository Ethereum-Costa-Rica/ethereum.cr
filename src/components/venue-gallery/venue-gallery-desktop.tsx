import {
  Grid,
  GridItem,
  useMediaQuery,
  useTheme,
  Image,
} from "@chakra-ui/react";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { MOBILE_GRID_COLUMNS } from "@/constants/mobileGridColumns";

const VenueGalleryDesktop = () => {
  const images = ["1", "3", "2"];
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();
  const { paddingX } = theme.spacing.mobile;

  return (
    <Grid
      templateColumns={
        isMobile ? MOBILE_GRID_COLUMNS : `repeat(12, ${columnsWidth})`
      }
      gap={theme.spacing.desktop.gridGap}
      w="100%"
      justifyContent="center"
      alignItems="center"
      py="48px"
      px={paddingX}
    >
      {images.map((image, index) => (
        <GridItem
          colSpan={4}
          key="index"
          display="flex"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={`/assets/eth-pv-venue/${image}.png`}
            width={668.39}
            height={200}
            alt="Venue Gallery"
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default VenueGalleryDesktop;
