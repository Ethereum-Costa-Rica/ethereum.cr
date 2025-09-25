import {
  Grid,
  GridItem,
  useMediaQuery,
  useTheme,
  Text,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { MOBILE_GRID_COLUMNS } from "@/constants/mobileGridColumns";
import { Trans, useTranslation } from "next-i18next";

const PastSpeakers = () => {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();
  const { paddingX } = theme.spacing.mobile;
  const { t, ready } = useTranslation();

  const speakers = [
    {
      name: "Alberto Galán",
      titleKey: "ethPuraVida.speakers.albertoGalan",
      image: "/speakers/alberto-galan.jpg",
    },
    {
      name: "Karla Córdoba",
      titleKey: "ethPuraVida.speakers.karlaCordoba",
      image: "/speakers/karla.jpg",
    },
    {
      name: "Brad Harrison",
      titleKey: "ethPuraVida.speakers.bradHarrison",
      image: "/speakers/brad-harrison.jpeg",
    },
    {
      name: "Leo Lara",
      titleKey: "ethPuraVida.speakers.leoLara",
      image: "/speakers/leo-lara.jpg",
    },
  ];

  if (!ready) return null;

  return (
    <Grid
      templateColumns={
        isMobile ? MOBILE_GRID_COLUMNS : `repeat(12, ${columnsWidth})`
      }
      gap={theme.spacing.desktop.gridGap}
      w="100%"
      justifyContent="center"
      alignItems="center"
      py="48px"
      px={paddingX}
    >
      <GridItem colSpan={isMobile ? 4 : 12}>
        <Text
          variant={isMobile ? "h2-extra-bold-mobile" : "h2-extra-bold-desktop"}
          justifyContent="center"
          alignItems="center"
        >
          <Trans
            i18nKey="ethPuraVida.pastSpeakers"
            components={{
              orange: (
                <Text
                  as="strong"
                  color={theme.colors.brand.ethPuraVida.orange}
                />
              ),
            }}
          />
        </Text>
      </GridItem>
      
      {speakers.map((speaker, index) => (
        <GridItem
          colSpan={isMobile ? 4 : 3}
          key={index}
          display="flex"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="100%"
            maxW="280px"
            textAlign="center"
            bg="white"
            borderRadius="12px"
            p="24px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease",
            }}
          >
            <Flex
              direction="column"
              alignItems="center"
              gap="16px"
            >
              <Box
                w="120px"
                h="120px"
                borderRadius="50%"
                overflow="hidden"
                border="3px solid"
                borderColor={theme.colors.brand.ethPuraVida.orange}
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={120}
                  height={120}
                  objectFit="cover"
                />
              </Box>
              <Text
                variant="h3-semibold"
                color={theme.colors.brand.blueCR}
                textAlign="center"
              >
                {speaker.name}
              </Text>
               <Text
                 variant="normal-text-regular"
                 color="gray.600"
                 textAlign="center"
                 fontSize="14px"
                 lineHeight="1.4"
               >
                 {t(speaker.titleKey)}
               </Text>
            </Flex>
          </Box>
        </GridItem>
      ))}
      
      <GridItem colSpan={isMobile ? 4 : 12} textAlign="center" mt="24px">
        <Text
          variant="normal-text-semibold"
          color={theme.colors.brand.ethPuraVida.orange}
          fontSize="16px"
        >
          {t("ethPuraVida.moreSpeakers")}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default PastSpeakers;
