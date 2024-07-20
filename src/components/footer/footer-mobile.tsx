import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useTheme,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import FooterSocials from "./footer-socials";

const FooterMobile = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Flex direction="column" p="20px" w="100%" gap="25px" bg="#EBF8FF">
      <Text variant="h1-semibold">{t("footer.contactUs")}</Text>

      <FooterSocials />
      <Flex direction="column" gap="10px">
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
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Image
          src="assets/eth-cr.svg"
          width={300}
          height={143.13}
          alt="EthCR footer"
        />

        <Text variant="small-text-semibold">{t("footer.workingWithLove")}</Text>
        <Text
          variant="extra-small-text-light"
          as="a"
          href="https://www.linkedin.com/in/angie-herrera-aguilar/"
          color="blue"
          target="_blank"
        >
          Designed by Angie Herrera
        </Text>
      </Flex>
    </Flex>
  );
};
export default FooterMobile;
