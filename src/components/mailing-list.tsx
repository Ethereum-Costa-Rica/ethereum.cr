import { Box, Flex, Text, Input } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const MailingList = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" p="20px" h={438} w={390} gap="25px" bg="gray.100">
      <Text variant="h1-semibold">{t("contactUs")}</Text>

      <Flex direction="row" justifyContent="space-between" alignItems="center">
        {[1, 2, 3, 4, 5].map((item) => (
          <Box key={item} w="60px" h="60px" borderRadius="50%" bg="gray.400" />
        ))}
      </Flex>
      <Flex direction="column" gap="10px">
        <Text variant="h1-semibold">{t("keepInTouch")}</Text>
        <Text variant="normal-text-regular">{t("subscribeForUpdates")}</Text>
        <Input bg="white" placeholder={t("yourEmailPlaceholder")} />
      </Flex>
    </Flex>
  );
};
export default MailingList;
