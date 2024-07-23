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
import Mailing from "./mailing";

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
      py="70px"
      bg={theme.colors.brand.footer}
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
          <Text
            as="a"
            href="https://www.linkedin.com/in/angie-herrera-aguilar/"
            color="blue"
            target="_blank"
          >
            Design | Angie Herrera
          </Text>{" "}
          &nbsp;&nbsp;{" "}
          <Text
            as="a"
            href="https://www.linkedin.com/in/jacv/"
            color="blue"
            target="_blank"
          >
            Development | Justin Castillo
          </Text>
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
        <Mailing />
      </GridItem>
    </Grid>
  );
};

export default FooterDesktop;
