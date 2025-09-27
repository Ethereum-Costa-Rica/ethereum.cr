import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import HeroHightLightDesktop from "./subComponents/hero-highlight-desktop";
import useColumnsWidth from "@/utils/hooks/useGridColumns";

const HeroDesktop = () => {
  const baseAssetsUrl = "assets/eth-pura-vida/";
  const columnsWidth = useColumnsWidth();
  const { t, ready } = useTranslation();
  const theme = useTheme();

  if (!ready) return null;

  const children = (
    <>
      <Image
        width={240}
        height={68}
        src={`${baseAssetsUrl}eth-pura-vida-date.svg`}
        alt="ETH Pura Vida Date"
      />
      <Flex mt="30px">
        <Button
          variant="eth-pura-vida"
          size="sm"
          as="a"
          href="/events/eth-pura-vida"
        >
          <Text>{t("learnMore")}</Text>
        </Button>
        <Button
          variant="eth-pura-vida-green"
          size="sm"
          as="a"
          href="/events/eth-pura-vida"
          ml="24px"
        >
          <Text>{t("ethPuraVida.buyTickets")}</Text>
          <Icon w="24px" h="24px" as={MdArrowForward} />
        </Button>
      </Flex>
    </>
  );

  const extraImageChild = (
    <Image
      width={271.12}
      height={313.01}
      style={{ marginLeft: "20px" }}
      src={`${baseAssetsUrl}eth-pura-vida-white-words.svg`}
      alt="ETH Pura Vida White"
    />
  );

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      backgroundImage="assets/hero.jpg"
      gap={theme.spacing.desktop.gridGap}
      backgroundSize="cover"
      justifyContent="center"
      alignItems="center"
      h="700px"
    >
      <GridItem colSpan={12} mt="76px">
        <HeroHightLightDesktop
          highlightImgSrc={`${baseAssetsUrl}hero-highlight.svg`}
          imageWidth={254}
          imageHeight={380}
          eventMainGraphicWidth={454}
          eventMainGraphicHeight={259.48}
          children={children}
          eventMainGraphicSrc={`${baseAssetsUrl}event-main-graphic.svg`}
          extraImageChild={extraImageChild}
        />
      </GridItem>
    </Grid>
  );
};

export default HeroDesktop;
