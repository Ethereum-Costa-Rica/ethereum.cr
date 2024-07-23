import {
  Button,
  Flex,
  Text,
  useTheme,
  Image,
  Icon,
  useMediaQuery,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import EventCard from "./event-card";
import { HOME_CARD_FEATURES } from "@/constants/homeCardFeatures";
import { MdArrowForward } from "react-icons/md";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import useColumnsWidth from "@/utils/hooks/useGridColumns";

const HomeContent = () => {
  const { t } = useTranslation();
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const columnsWidth = useColumnsWidth();
  const theme = useTheme();

  console.log(columnsWidth);
  return (
    <Grid
      h="auto"
      templateColumns={
        isMobile
          ? "repeat(4, minmax(72.5px, 90px))"
          : `repeat(12, ${columnsWidth})`
      }
      justifyContent="center"
      gap={theme.spacing.desktop.gridGap}
      maxW="100vw"
      px={theme.spacing.mobile.paddingX}
      py={theme.spacing.mobile.paddingY}
    >
      <GridItem colSpan={isMobile ? 4 : 8}>
        <Text
          variant={isMobile ? "h3-extra-bold-mobile" : "h2-extra-bold-desktop"}
          color="brand.blueCR"
        >
          {t("homeContent.ethereumCommunityIn")}
          {isMobile ? null : <br />}
          <span style={{ color: theme.colors.brand.darkRedCR }}>
            {" "}
            Costa Rica
          </span>
        </Text>
        <Text variant="normal-text-regular">
          {t("homeContent.communityDescription")}
        </Text>
        {isMobile && (
          <GridItem colSpan={3} mt="24px">
            <Button variant="primary" size="md">
              {t("learnMore")}
            </Button>
          </GridItem>
        )}
      </GridItem>
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        colSpan={4}
        my={theme.spacing.mobile.marginY}
      >
        <Image
          position="relative"
          w={isMobile ? "300px" : "358px"}
          h={isMobile ? "300px" : "358px"}
          fallbackSrc="https://via.placeholder.com/300"
        />
        {/* {isMobile && (
          <NextImage
            className=""
            width={73.52}
            height={428}
            style={{ position: "absolute", right: 0 }}
            src="assets/eth-cr-vertical-graphic.svg"
            alt="Eth CR vertical graphic"
          />
        )} */}
      </GridItem>

      <GridItem colSpan={isMobile ? 4 : 8}>
        <Text
          variant={isMobile ? "h3-extra-bold-mobile" : "h2-extra-bold-desktop"}
          mt={theme.spacing.mobile.marginY}
        >
          {t("homeContent.noMatterWhereYouAre")}
        </Text>
        <Text variant="normal-text-regular">
          {t("homeContent.youCanConnect")}
        </Text>
      </GridItem>
      <GridItem colSpan={isMobile ? 4 : 12}>
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
      </GridItem>
      <GridItem
        colSpan={isMobile ? 4 : 12}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Flex
          height="361px"
          paddingY={theme.spacing.mobile.paddingY}
          direction="column"
          maxW="500px"
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
        <Flex
          direction="column"
          maxW="500px"
          gap={theme.spacing.mobile.verticalGap}
        >
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
            <Button
              variant="outlined"
              size="md"
              as="a"
              href="https://t.me/EthereumCR/1"
              target="_blank"
            >
              {t("homeContent.joinTgChannel")}
              <Icon w="24px" h="24px" ml="10px" as={MdArrowForward} />
            </Button>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default HomeContent;
