import {
  Grid,
  GridItem,
  useMediaQuery,
  useTheme,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { MOBILE_GRID_COLUMNS } from "@/constants/mobileGridColumns";
import { Trans, useTranslation } from "react-i18next";

const VenueGalleryDesktop = () => {
  const images = ["1", "3", "2"];
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();
  const { paddingX } = theme.spacing.mobile;
  const { t } = useTranslation();

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
      <GridItem colSpan={isMobile ? 4 : 12}>
        <Text
          variant={isMobile ? "h2-extra-bold-mobile" : "h2-extra-bold-desktop"}
        >
          {" "}
          <Trans
            i18nKey="ethPuraVida.venueGallery"
            components={{
              orange: (
                <Text
                  as="strong"
                  color={theme.colors.brand.ethPuraVida.orange}
                />
              ),
            }}
          />
        </Text>
      </GridItem>
      {images.map((image, index) => (
        <GridItem
          colSpan={4}
          key={index}
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
