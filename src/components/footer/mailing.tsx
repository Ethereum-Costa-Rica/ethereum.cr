import { Flex, Input, Button, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Mailing = () => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" gap="20px">
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
  );
};

export default Mailing;
