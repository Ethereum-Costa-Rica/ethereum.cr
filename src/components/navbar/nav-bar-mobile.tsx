import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Flex,
  Text,
  Fade,
  ScaleFade,
  Collapse,
  useTheme,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";
import { useTranslation } from "next-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { NAVBAR_LINKS } from "@/constants/navbar";
import { NavbarProps } from "@/models/navbar.type";
import useNavbar from "@/utils/hooks/useNavbar";

const NavBarMobile = ({
  baseBgColor,
  extendedBgColor,
  baseLogo,
  extendedLogo,
  baseMenuLogoColor,
  extendedMenuLogoColor,
}: NavbarProps) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const theme = useTheme();
  const { bgColor, logo, menuLogoColor, opened, setOpened } = useNavbar({
    baseBgColor,
    extendedBgColor,
    baseLogo,
    extendedLogo,
    baseMenuLogoColor,
    extendedMenuLogoColor,
  });

  return (
    <Box
      bgColor={bgColor}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxHeight={{ sm: "444px" }}
      px={theme.spacing.mobile.paddingX}
      py={18}
      position="fixed"
      zIndex={1}
    >
      <Flex
        direction="row"
        justify="space-between"
        w="100%"
        alignItems="center"
      >
        <Link href="/">
          <Image src={logo || ""} alt="ETH CR Logo" width={177} height={64} />
        </Link>
        <IconButton
          fontSize={44}
          color="black"
          background="transparent"
          aria-label="Expand navbar"
          onClick={() => setOpened(!opened)}
        >
          {opened ? (
            <ScaleFade initialScale={0.09} in={opened}>
              <MdClose />
            </ScaleFade>
          ) : (
            <Collapse in={!opened}>
              <MdMenu color={menuLogoColor} />
            </Collapse>
          )}
        </IconButton>
      </Flex>
      {opened && (
        <Fade in={opened} style={{ width: "100%" }}>
          <Flex direction="column" w="100%" h="auto" bg="white">
            {NAVBAR_LINKS.map(({ href, label }, index) => (
              <Flex
                key={index}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                height={{ base: "76px" }}
                sx={{
                  borderRight:
                    pathname === `/${href}` ? "2.5px solid black" : "",
                  paddingRight: "20px",
                  width: "100%",
                }}
              >
                <Link href={href}>
                  <Text variant="h3-semibold">{t(String(label))}</Text>
                </Link>
              </Flex>
            ))}
          </Flex>
        </Fade>
      )}
    </Box>
  );
};

export default NavBarMobile;
