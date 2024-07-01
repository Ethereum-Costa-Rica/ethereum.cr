import { Button, Flex, Text, useTheme, Image, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NextImage from "next/image";
import EventCard from "./event-card";
import { HOME_CARD_FEATURES } from "@/constants/homeCardFeatures";
import { MdArrowForward } from "react-icons/md";

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
      <Text variant="normal-text-regular">
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
        my={theme.spacing.mobile.marginY}
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
          style={{ position: "absolute", right: 0 }}
          src="assets/eth-cr-vertical-graphic.svg"
          alt="Eth CR vertical graphic"
        />
      </Flex>

      <Text variant="h3-extra-bold-mobile" mt={theme.spacing.mobile.marginY}>
        {t("homeContent.noMatterWhereYouAre")}
      </Text>
      <Text variant="normal-text-regular">
        {t("homeContent.youCanConnect")}
      </Text>
      <Flex
        w="100%"
        direction="row"
        wrap="nowrap"
        overflowX="auto"
        gap={theme.spacing.mobile.horizontalGap}
      >
        {HOME_CARD_FEATURES.map((feature, index) => (
          <EventCard key={index} cardFeature={feature} />
        ))}
      </Flex>
      <Flex
        height="361px"
        paddingY={theme.spacing.mobile.paddingY}
        direction="column"
        gap={theme.spacing.mobile.verticalGap}
      >
        <Text variant="h3-extra-bold-mobile">
          {t("homeContent.youCan")}
          <Text as="span" color="brand.darkRedCR">
            {" "}
            {t("homeContent.help")}
          </Text>
        </Text>
        <Text variant="normal-text-regular">
          {t("homeContent.youCanHelpDescription")}
          <Text as="span" variant="normal-text-semibold" color="brand.blueCR">
            {" "}
            {t("homeContent.throughDonations")}
          </Text>
          <Text as="span" variant="normal-text-semibold" color="brand.blueCR">
            {" "}
            {t("homeContent.sponsorship")}
          </Text>
          <Text as="span" variant="normal-text-regular">
            {""} {t("homeContent.and")}
          </Text>
          <Text as="span" variant="normal-text-semibold" color="brand.blueCR">
            {" "}
            {t("homeContent.withYourTalent")}
          </Text>
        </Text>
        <Flex
          direction="row"
          justifyContent="start"
          mt={theme.spacing.mobile.marginY}
        >
          <Button variant="primary">{t("homeContent.findHowToHelp")}</Button>
        </Flex>
      </Flex>
      <Flex h="361px" direction="column" gap={theme.spacing.mobile.verticalGap}>
        <Text variant="h3-extra-bold-mobile">
          {t("homeContent.become")}
          <Text as="span" color="brand.darkRedCR">
            {" "}
            {t("homeContent.member")}
          </Text>
        </Text>
        <Text variant="normal-text-regular">
          {t("homeContent.ethCrHas")}
          <Text as="span" variant="normal-text-semibold" color="brand.blueCR">
            {" "}
            {t("homeContent.openDoors")}
          </Text>
          <Text as="span" variant="normal-text-regular">
            {" "}
            {t("homeContent.inThisSpace")}
          </Text>
          <Text as="span" variant="normal-text-semibold">
            {" "}
            {t("homeContent.beAware")}
          </Text>
          <Text as="span" variant="normal-text-regular">
            {" "}
            {t("homeContent.newDevelopments")}
          </Text>
        </Text>
        <Flex
          direction="row"
          justifyContent="start"
          mt={theme.spacing.mobile.marginY}
        >
          <Button variant="outlined" size="md">
            {t("homeContent.joinTgChannel")}
            <Icon w="24px" h="24px" ml="10px" as={MdArrowForward} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeContent;
