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

import EthCrLogo from "../../public/assets/eth-cr.svg";
import EthCrLogoWhite from "../../public/assets/eth-cr-white.svg";

const transparentBgColor = "#ffffff1a";
const whiteBgColor = "#ffffff";
const NavBar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const theme = useTheme();
  const [opened, setOpened] = useState(false);
  const [bgColor, setBgColor] = useState(transparentBgColor);
  const [logo, setLogo] = useState(EthCrLogoWhite);
  const isTransparent = bgColor === transparentBgColor;

  const setBaseNavbarMenuProperties = () => {
    setBgColor(whiteBgColor);
    setLogo(EthCrLogo);
  };

  const setWhiteNavbarMenuProperties = () => {
    setBgColor(transparentBgColor);
    setLogo(EthCrLogoWhite);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) setBaseNavbarMenuProperties();
      else setWhiteNavbarMenuProperties();
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (opened) {
      setBaseNavbarMenuProperties();
      return;
    }

    setWhiteNavbarMenuProperties();
  }, [opened]);

  return (
    <Box
      bgColor={bgColor}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxW="390px"
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
        <Image src={logo} alt="ETH CR Logo" width={177} height={64} priority />
        <IconButton
          fontSize={44}
          color={isTransparent ? "white" : "black"}
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
              <MdMenu />
            </Collapse>
          )}
        </IconButton>
      </Flex>
      {opened && (
        <Fade in={opened} style={{ width: "100%" }}>
          <Flex direction="column" w="100%" h="auto" bg="white">
            {["events", "blog", "donate", "shop"].map((key, index) => (
              <Flex
                key={index}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                height={{ base: "76px" }}
                sx={{
                  borderRight:
                    pathname === `/${key}` ? "2.5px solid black" : "",
                  paddingRight: "20px",
                  width: "100%",
                }}
              >
                <Link href={`/${key}`}>
                  <Text variant="h3-semibold">{t(String(key))}</Text>
                </Link>
              </Flex>
            ))}
          </Flex>
        </Fade>
      )}
    </Box>
  );
};

export default NavBar;
