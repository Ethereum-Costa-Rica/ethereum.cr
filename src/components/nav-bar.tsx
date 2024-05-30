import { Box, IconButton, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

import Logo from "../../public/eth-cr.svg";
import { useTranslation } from "next-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={{ sm: "346px" }}
      maxHeight={{ sm: "444px" }}
      px={22}
      py={18}
    >
      <Flex
        direction="row"
        justify="space-between"
        w="100%"
        alignItems="center"
      >
        <Image src={Logo} alt="ETH CR Logo" priority />
        <IconButton size="lg" aria-label="Expand navbar">
          <MdMenu />
        </IconButton>
      </Flex>
      <Flex direction="column" w="100%" h="auto">
        <Flex
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          height={{ base: "76px" }}
        >
          <Text variant="h2-semibold">{t("events")}</Text>
        </Flex>
        <Flex
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          height={{ base: "76px" }}
        >
          <Text variant="h2-semibold">{t("blog")}</Text>
        </Flex>
        <Flex
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          height={{ base: "76px" }}
        >
          <Text variant="h2-semibold">{t("donate")}</Text>
        </Flex>
        <Flex
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          height={{ base: "76px" }}
        >
          <Text variant="h2-semibold">{t("shop")}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
