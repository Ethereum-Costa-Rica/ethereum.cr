import { Button, Flex, Text, useTheme } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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
    </Flex>
  );
};

export default HomeContent;
