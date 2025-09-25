import {
  Grid,
  GridItem,
  useMediaQuery,
  useTheme,
  Text,
  Flex,
  Box,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { MOBILE_GRID_COLUMNS } from "@/constants/mobileGridColumns";
import { Trans, useTranslation } from "next-i18next";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface SpeakerCardProps {
  speaker: {
    name: string;
    titleKey: string;
    descriptionKey: string;
    image: string;
  };
  isMobile: boolean;
  theme: any;
  isLastSpeaker: boolean;
}

const SpeakerCard = ({ speaker, isMobile, theme, isLastSpeaker }: SpeakerCardProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();
  
  return (
    <GridItem
      colSpan={isMobile ? 4 : (isLastSpeaker ? 6 : 4)}
      colStart={isMobile ? undefined : (isLastSpeaker ? 4 : undefined)}
      display="flex"
      w="100%"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Box
        w="100%"
        maxW="320px"
        textAlign="center"
        bg="white"
        borderRadius="16px"
        p="24px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease",
        }}
      >
        <Flex direction="column" alignItems="center" gap="16px">
          <Box
            w="100px"
            h="100px"
            borderRadius="50%"
            overflow="hidden"
            border="3px solid"
            borderColor={theme.colors.brand.ethPuraVida.orange}
            flexShrink={0}
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={100}
              height={100}
              objectFit="cover"
            />
          </Box>
          <Text
            variant="h3-semibold"
            color={theme.colors.brand.blueCR}
            textAlign="center"
            fontSize={isMobile ? "16px" : "18px"}
            lineHeight="1.3"
          >
            {speaker.name}
          </Text>
          <Text
            variant="normal-text-semibold"
            color={theme.colors.brand.ethPuraVida.orange}
            textAlign="center"
            fontSize="14px"
            lineHeight="1.3"
            mb="8px"
          >
            {t(speaker.titleKey)}
          </Text>
          
          <Box w="100%">
            <Text
              variant="normal-text-regular"
              color="gray.600"
              textAlign="center"
              fontSize="12px"
              lineHeight="1.4"
              noOfLines={isOpen ? undefined : (isMobile ? 4 : 6)}
            >
              {t(speaker.descriptionKey)}
            </Text>
            
            <Flex justifyContent="center" mt="8px">
              <IconButton
                aria-label={isOpen ? "Ver menos" : "Ver más"}
                icon={<Icon as={isOpen ? MdKeyboardArrowUp : MdKeyboardArrowDown} />}
                size="sm"
                variant="ghost"
                color={theme.colors.brand.ethPuraVida.orange}
                onClick={onToggle}
                _hover={{
                  bg: `${theme.colors.brand.ethPuraVida.orange}10`,
                }}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </GridItem>
  );
};

const PastSpeakers = () => {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const theme = useTheme();
  const columnsWidth = useColumnsWidth();
  const { paddingX } = theme.spacing.mobile;
  const { t, ready } = useTranslation();

  const speakers = [
    {
      name: "Edgar Barrantes",
      titleKey: "ethPuraVida.speakers.edgarBarrantes",
      descriptionKey: "ethPuraVida.speakers.edgarBarrantesDesc",
      image: "/speakers/edgar.jpg",
    },
    {
      name: "Fabricio Espinoza",
      titleKey: "ethPuraVida.speakers.fabricioEspinoza",
      descriptionKey: "ethPuraVida.speakers.fabricioEspinozaDesc",
      image: "/speakers/fabricio-espinoza.jpg",
    },
    {
      name: "Nathaly Cortez",
      titleKey: "ethPuraVida.speakers.nathalyCortez",
      descriptionKey: "ethPuraVida.speakers.nathalyCortezDesc",
      image: "/speakers/nathaly-cortez.jpeg",
    },
    {
      name: "Daniel Rojas (CryptoReds)",
      titleKey: "ethPuraVida.speakers.danielRojas",
      descriptionKey: "ethPuraVida.speakers.danielRojasDesc",
      image: "/speakers/daniel-rojas.jpeg",
    },
    {
      name: "Alberto Chaves",
      titleKey: "ethPuraVida.speakers.albertoChaves",
      descriptionKey: "ethPuraVida.speakers.albertoChavesDesc",
      image: "/speakers/alberto-chaves.jpeg",
    },
    {
      name: "Jerry V. Hall",
      titleKey: "ethPuraVida.speakers.jerryHall",
      descriptionKey: "ethPuraVida.speakers.jerryHallDesc",
      image: "/speakers/jerry-hall.jpeg",
    },
    {
      name: "Karla Córdoba Brenes",
      titleKey: "ethPuraVida.speakers.karlaCordoba",
      descriptionKey: "ethPuraVida.speakers.karlaCordobaDesc",
      image: "/speakers/karla.jpg",
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
      
      {speakers.map((speaker, index) => {
        const isLastSpeaker = index === speakers.length - 1;
        return (
          <SpeakerCard
            key={index}
            speaker={speaker}
            isMobile={isMobile}
            theme={theme}
            isLastSpeaker={isLastSpeaker}
          />
        );
      })}
      
      <GridItem colSpan={isMobile ? 4 : 12} textAlign="center" mt="32px">
        <Text
          variant="normal-text-semibold"
          color={theme.colors.brand.ethPuraVida.orange}
          fontSize="16px"
        >
          {t("ethPuraVida.manyMoreSpeakers")}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default PastSpeakers;
