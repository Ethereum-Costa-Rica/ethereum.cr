import { Grid, GridItem, useTheme, Text, Button, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import Image from "next/image";
import { FooterSocials } from "./footer-socials";
import { MdKeyboardArrowUp } from "react-icons/md";
import Mailing from "./mailing";
import FooterBlogPreview from "./blog-preview";

const FooterDesktop = () => {
  const columnsWidth = useColumnsWidth();
  const { t, ready } = useTranslation();
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!ready) return null;

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      gap={theme.spacing.desktop.gridGap}
      justifyContent="center"
      w="100%"
      maxW="100%"
      py="2.8125em"
      bg={theme.colors.brand.footer}
    >
      <GridItem colSpan={5} flexDirection="column">
        <Image
          src="/assets/eth-cr.svg"
          width={454}
          height={216.6}
          alt="EthCR footer"
          style={{ marginBottom: "2em", width: "100%", maxWidth: "28.375em", height: "auto" }}
        />
        <FooterSocials style={{ marginBottom: "0.5em" }}/>
        <Text variant="h3-semibold">{t("footer.workingWithLove")}</Text>
        <Flex direction="column" alignItems="center" gap="0.625em" mb="2.5em">
          <Flex direction="row" gap="1.5em" wrap="wrap" justifyContent="center">
            <Text
              variant="small-text-light"
              as="a"
              href="https://www.linkedin.com/in/santiagovillarrealarley/"
              color="blue"
              target="_blank"
              w="45%"
              textAlign="center"
            >
              Development | Santiago Villarreal
            </Text>
            <Text
              variant="small-text-light"
              as="a"
              href="https://www.linkedin.com/in/fabian-sanchez-d/"
              color="blue"
              target="_blank"
              w="45%"
              textAlign="center"
            >
              Development | Fabián Sánchez
            </Text>
          </Flex>
          <Flex direction="row" gap="1.5em" wrap="wrap" justifyContent="center">
            <Text
              variant="small-text-light"
              as="a"
              href="https://www.linkedin.com/in/angie-herrera-aguilar/"
              color="blue"
              target="_blank"
              w="45%"
              textAlign="center"
            >
              Design | Angie Herrera
            </Text>
            <Text
              variant="small-text-light"
              as="a"
              href="https://www.linkedin.com/in/jacv/"
              color="blue"
              target="_blank"
              w="45%"
              textAlign="center"
            >
              Development | Justin Castillo
            </Text>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={5}
        colStart={8}
        flexDirection="column"
        display="flex"
        justifyContent="flex-start"
        alignItems="stretch"
        gap="2em"
        pt="0"
      >
        <Button
          variant="outlined"
          onClick={scrollToTop}
          mb="0"
          mt="0"
          alignSelf="flex-end"
        >
          <Text mr="0.625em">{t("footer.goOnTop")}</Text>
          <MdKeyboardArrowUp />
        </Button>
        <Mailing />
        <FooterBlogPreview />
      </GridItem>
    </Grid>
  );
};

export default FooterDesktop;
