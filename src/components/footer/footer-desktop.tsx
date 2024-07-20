import {
  Grid,
  GridItem,
  useTheme,
  Text,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import Image from "next/image";
import { FooterSocials } from "./footer-socials";
import { MdKeyboardArrowUp } from "react-icons/md";

const FooterDesktop = () => {
  const columnsWidth = useColumnsWidth();
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      gap={theme.spacing.desktop.gridGap}
      justifyContent="center"
      w="100vw"
      maxW="100vw"
      mb="70px"
    >
      <GridItem colSpan={5} flexDirection="column">
        <Image
          src="assets/eth-cr.svg"
          width={454}
          height={216.6}
          alt="EthCR footer"
          style={{ marginBottom: "32px" }}
        />
        <FooterSocials style={{ marginBottom: "40px" }} />
        <Text variant="h3-semibold">{t("footer.workingWithLove")}</Text>
        <Text variant="small-text-light" textAlign="center" mb="40px">
          Design | Angie Herrera &nbsp;&nbsp;Development | Justin Castillo
        </Text>
      </GridItem>
      <GridItem
        colSpan={5}
        colStart={8}
        flexDirection="column"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Button variant="outlined">
          <Text mr="10px">{t("footer.goOnTop")}</Text>
          <MdKeyboardArrowUp />
        </Button>
        <Flex direction="column">
          <Text variant="h1-semibold">{t("footer.keepInTouch")}</Text>
          <Text variant="normal-text-regular">
            {t("footer.subscribeForUpdates")}
          </Text>
          <Input
            bg="white"
            placeholder={t("footer.yourEmailPlaceholder")}
            h="54px"
            fontWeight={400}
          />
          <Flex direction="row" wrap="nowrap">
            <Text variant="small-text-light">*{t("footer.consent")}</Text>
            <Button variant="outlined" size="sm" minW="127px" ml="10px">
              {t("footer.subscribe")}
            </Button>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default FooterDesktop;
