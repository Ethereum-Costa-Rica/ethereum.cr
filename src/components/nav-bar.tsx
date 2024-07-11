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

type NavbarProps = {
  baseBgColor: string;
  extendedBgColor: string;
  baseLogo: string;
  extendedLogo: string;
  baseMenuLogoColor: string;
  extendedMenuLogoColor: string;
};

const NavBar = ({
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
  const [opened, setOpened] = useState(false);
  const [bgColor, setBgColor] = useState(baseBgColor);
  const [logo, setLogo] = useState(baseLogo);
  const [menuLogoColor, setMenuLogoColor] = useState(baseMenuLogoColor);

  const setBaseProperties = () => {
    setBgColor(baseBgColor);
    setLogo(baseLogo);
    setMenuLogoColor(baseMenuLogoColor);
  };

  const setExtendedProperties = () => {
    setBgColor(extendedBgColor);
    setLogo(extendedLogo);
    setMenuLogoColor(extendedMenuLogoColor);
  };

  useEffect(() => {
    const onScroll = () => {
      setOpened(false);
      console.log(window.scrollY);
      if (window.scrollY > 0) setExtendedProperties();
      else if (window.scrollY === 0) setBaseProperties();
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExtendedProperties();
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
        <Image src={logo} alt="ETH CR Logo" width={177} height={64} />
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
