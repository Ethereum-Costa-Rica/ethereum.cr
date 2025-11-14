import { Flex, Text, useTheme } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import FooterSocials from "./footer-socials";
import Mailing from "./mailing";
import FooterBlogPreview from "./blog-preview";

const FooterMobile = () => {
  const { t, ready } = useTranslation();
  const theme = useTheme();

  if (!ready) return null;

  return (
    <Flex
      direction="column"
      p="1.25em"
      w="100%"
      gap="1.5625em"
      bg={theme.colors.brand.footer}
    >
      <Text variant="h1-semibold">{t("footer.contactUs")}</Text>

      <FooterSocials />
      <Mailing />
      <FooterBlogPreview />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="0.625em"
      >
        <Image
          src="/assets/eth-cr.svg"
          width={300}
          height={143.13}
          alt="EthCR footer"
          style={{ width: "100%", maxWidth: "18.75em", height: "auto" }}
        />

        <Text variant="small-text-semibold">{t("footer.workingWithLove")}</Text>
        <Flex direction="row" gap="1em" wrap="wrap" justifyContent="center">
          <Text
            variant="extra-small-text-light"
            as="a"
            href="https://www.linkedin.com/in/santiagovillarrealarley/"
            color="blue"
            target="_blank"
          >
            Developed by @Villarley
          </Text>
          <Text
            variant="extra-small-text-light"
            as="a"
            href="https://www.linkedin.com/in/fabian-sanchez-d/"
            color="blue"
            target="_blank"
          >
            Developed by @FabianSanchezD
          </Text>
        </Flex>
        <Flex direction="row" gap="1em" wrap="wrap" justifyContent="center">
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
    </Flex>
  );
};
export default FooterMobile;
