import { Grid, GridItem, Link, Flex, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { ETH_CR_LOGO_WHITE, NAVBAR_LINKS } from "@/constants/navbar";
import useColumnsWidth from "@/utils/hooks/useGridColumns";
import { NavbarProps } from "@/models/navbar.type";
import useNavbar from "@/utils/hooks/useNavbar";
// import LanguageSwitcher from "../language-switcher";

const NavBarDesktop = (props: NavbarProps) => {
  const { t } = useTranslation();
  const {
    baseLogo,
    extendedLogo,
    baseBgColor,
    extendedBgColor,
    baseTextColor,
    extendedTextColor,
  } = props;
  const { bgColor, logo, itemTextColor } = useNavbar({
    baseBgColor,
    extendedBgColor,
    baseLogo,
    extendedLogo,
    baseTextColor,
    extendedTextColor,
  });
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      gap={theme.spacing.desktop.gridGap}
      bg={bgColor}
      position="fixed"
      w="100vw"
      maxW="100vw"
      h="78.24px"
      justifyContent="center"
      alignItems="center"
      zIndex={999}
    >
      <GridItem colSpan={2}>
        <Link href="/">
          <Image
            src={logo || ETH_CR_LOGO_WHITE}
            alt="ETH CR Logo"
            width={177}
            height={64}
          />
        </Link>
      </GridItem>
      <GridItem colSpan={10}>
        <Flex direction="row" alignItems="center" justifyContent="flex-end">
          {NAVBAR_LINKS.map((key, index) => (
            <Link key={index} href={`/events/${key}`}>
              <Text variant="h3-regular" mx="16px" color={itemTextColor}>
                {t(String(key))}
              </Text>
            </Link>
          ))}
          {/* <LanguageSwitcher /> */}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default NavBarDesktop;
