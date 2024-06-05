import {
  Box,
  IconButton,
  Flex,
  Text,
  Fade,
  ScaleFade,
  Collapse,
  Slide,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";
import { useTranslation } from "next-i18next";
import { usePathname } from "next/navigation";

import Logo from "../../public/eth-cr.svg";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);

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
        <Image src={Logo} alt="ETH CR Logo" width={130} priority />
        <IconButton
          fontSize={44}
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
          <Flex direction="column" w="100%" h="auto">
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
