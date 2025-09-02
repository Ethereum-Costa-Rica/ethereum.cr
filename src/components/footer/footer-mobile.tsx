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
import Mailing from "./mailing";

const FooterMobile = () => {
  const { t, ready } = useTranslation();
  const theme = useTheme();

  if (!ready) return null;

  return (
    <Flex
      direction="column"
      p="20px"
      w="100%"
      gap="25px"
      bg={theme.colors.brand.footer}
    >
      <Text variant="h1-semibold">{t("footer.contactUs")}</Text>

      <FooterSocials />
      <Mailing />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Image
          src="/assets/eth-cr.svg"
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
        <Text
          variant="extra-small-text-light"
          as="a"
          href="https://www.linkedin.com/in/jacv/"
          color="blue"
          target="_blank"
        >
          Developed by Justin Castillo
        </Text>
      </Flex>
    </Flex>
  );
};
export default FooterMobile;
