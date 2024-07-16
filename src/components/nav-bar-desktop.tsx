import { Grid, GridItem, Link, Flex, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { ETH_CR_LOGO_WHITE, NAVBAR_LINKS } from "@/constants/navbar";
import useColumnsWidth from "@/utils/hooks/useGridColumns";

const NavBarDesktop = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      gap={theme.spacing.desktopGridGap}
      bg="transparent"
      position="fixed"
      w="100vw"
      maxW="100vw"
      h="78.24px"
      justifyContent="center"
      alignItems="center"
      mt="24px"
    >
      <GridItem colSpan={2}>
        <Link href="/">
          <Image
            src={ETH_CR_LOGO_WHITE}
            alt="ETH CR Logo"
            width={177}
            height={64}
          />
        </Link>
      </GridItem>
      <GridItem colSpan={10}>
        <Flex direction="row" justifyContent="center">
          {NAVBAR_LINKS.map((key, index) => (
            <Link key={index} href={`/${key}`}>
              <Text variant="h3-semibold" mx="16px" color="white">
                {t(String(key))}
              </Text>
            </Link>
          ))}
        </Flex>
        <Flex></Flex>
      </GridItem>
    </Grid>
  );
};

export default NavBarDesktop;
