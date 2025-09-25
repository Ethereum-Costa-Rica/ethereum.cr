import {
  Grid,
  GridItem,
  useTheme,
  Text,
  Button,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import { Trans, useTranslation } from "next-i18next";

import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { MOBILE_GRID_COLUMNS } from "@/constants/mobileGridColumns";

const CallForSpeakers = () => {
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();
  const ethPuraVidaColors = theme.colors.brand.ethPuraVida;
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
    <Grid
      id="call-for-speakers"
      templateColumns={
        isMobile ? MOBILE_GRID_COLUMNS : `repeat(12, ${columnsWidth})`
      }
      gap={theme.spacing.desktop.gridGap}
      w="100%"
      justifyContent="center"
      alignItems="center"
      py="48px"
      px={isMobile && theme.spacing.mobile.paddingX}
    >
      <GridItem
        colSpan={isMobile ? 4 : 12}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text
          variant={isMobile ? "h2-extra-bold-mobile" : "h2-extra-bold-desktop"}
        >
          <Trans
            i18nKey="ethPuraVida.callForSpeakersTitle"
            components={{
              orange: <Text as="strong" color={theme.colors.brand.ethPuraVida.orange} />,
            }}
          />
        </Text>
        <Text variant="h3-regular">
          <Trans
            i18nKey="ethPuraVida.callForSpeakers"
            components={{
              orange: <Text as="strong" color={ethPuraVidaColors.orange} />,
            }}
          />
        </Text>
        <Box mt={5}>
          <Button
            variant="eth-pura-vida-yellow"
            as="a"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-ZPnCFWvjhe59p3Lb-cJZtxDslFjRa4JqR-ahdvrnBRBEng/viewform?usp=dialog"
          >
            {t("apply")}
          </Button>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CallForSpeakers;
