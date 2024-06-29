import { Button, Flex, Text, useTheme, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NextImage from "next/image";

const HomeContent = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Flex
      h="auto"
      direction="column"
      justifyContent="space-between"
      px={theme.spacing.mobile.paddingX}
      py={theme.spacing.mobile.paddingY}
    >
      <Text variant="h3-extra-bold-mobile" color="brand.blueCR">
        {t("homeContent.ethereumCommunityIn")}
        <span style={{ color: theme.colors.brand.darkRedCR }}> Costa Rica</span>
      </Text>
      <Text variant="normal-text-semibold">
        {t("homeContent.communityDescription")}
      </Text>
      <Flex direction="row" mt="24px">
        <Button variant="primary" size="md">
          {t("learnMore")}
        </Button>
      </Flex>
      <Flex
        direction="row"
        justifyContent="start"
        mt={theme.spacing.mobile.marginY}
      >
        <Image
          position="relative"
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/300"
        />
        <NextImage
          className=""
          width={73.52}
          height={428}
          style={{ position: "absolute", right: 0, zIndex: 1 }}
          src="assets/eth-cr-vertical-graphic.svg"
          alt="Eth CR vertical graphic"
        />
      </Flex>
    </Flex>
  );
};

export default HomeContent;
