import { useEffect, useState } from "react";
import { Grid, GridItem, Link, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { ETH_CR_LOGO_WHITE, NAVBAR_LINKS } from "@/constants/navbar";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

const NavBarDesktop = () => {
  const { t } = useTranslation();
  const [columnWidth, setColumnWidth] = useState("100px");
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const widthMinusGap = windowWidth - 10 * 11;

    if (windowWidth > 1440) setColumnWidth("100px");
    else if (widthMinusGap > 1024 && widthMinusGap < 1440)
      setColumnWidth("70px");
    else setColumnWidth(`50px`);
  }, [windowWidth]);

  return (
    <Grid
      templateColumns={`repeat(12, ${columnWidth})`}
      gap="10px"
      bg="transparent"
      position="fixed"
      w="100vw"
      maxW="100vw"
      h="78.24px"
      justifyContent="center"
      alignItems="center"
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
