import {
  Flex,
  Text,
  useTheme,
  useMediaQuery,
  Grid,
  GridItem,
  Image,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { MOBILE_MEDIA_QUERY } from "@/constants/app";

interface Sponsor {
  name: string;
  logo: string;
  tier: "diamond" | "gold" | "silver";
}

const SPONSORS_DATA: Sponsor[] = [
  // Diamond Partners
  {
    name: "Ethereum Foundation",
    logo: "/assets/partners/ethereum_foundation.png",
    tier: "diamond"
  },
  {
    name: "Texas Tech University",
    logo: "/assets/partners/texas_tech_university.png", 
    tier: "diamond"
  },
  
  // Gold Partners
  {
    name: "Starknet",
    logo: "/assets/partners/starknet.svg",
    tier: "gold"
  },
  {
    name: "Chainlink",
    logo: "/assets/partners/chainlink.png",
    tier: "gold"
  },
  {
    name: "Impesa",
    logo: "/assets/partners/impesa.png",
    tier: "gold"
  },
  
  // Silver Partners
  {
    name: "Inbest",
    logo: "/assets/partners/inbest.jpg",
    tier: "silver"
  }
];

const SponsorsComponent = () => {
  const { t, ready } = useTranslation();
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const theme = useTheme();

  if (!ready) return null;

  const getTierConfig = (tier: string) => {
    switch (tier) {
      case "diamond":
        return {
          title: t("sponsors.tiers.diamond"),
          color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          textColor: "white",
          size: isMobile ? "120px" : "150px"
        };
      case "gold":
        return {
          title: t("sponsors.tiers.gold"),
          color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          textColor: "white", 
          size: isMobile ? "100px" : "120px"
        };
      case "silver":
        return {
          title: t("sponsors.tiers.silver"),
          color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          textColor: "white",
          size: isMobile ? "80px" : "100px"
        };
      default:
        return {
          title: tier,
          color: "gray.100",
          textColor: "gray.700",
          size: "60px"
        };
    }
  };

  const groupedSponsors = SPONSORS_DATA.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  const tierOrder = ["diamond", "gold", "silver"];

  return (
    <VStack spacing={8} w="100%" py={8}>
      <Text
        variant={isMobile ? "h3-extra-bold-mobile" : "h2-extra-bold-desktop"}
        textAlign="center"
      >
        {t("sponsors.title").split('<red>').map((part, index) => {
          if (index === 0) {
            return <span key={index} style={{ color: theme.colors.brand.blueCR }}>{part}</span>;
          }
          const [redText, rest] = part.split('</red>');
          return (
            <span key={index}>
              <span style={{ color: theme.colors.brand.darkRedCR }}>{redText}</span>
              <span style={{ color: theme.colors.brand.blueCR }}>{rest}</span>
            </span>
          );
        })}
      </Text>

      {tierOrder.map((tier) => {
        const sponsors = groupedSponsors[tier];
        if (!sponsors || sponsors.length === 0) return null;
        
        const config = getTierConfig(tier);
        
        return (
          <Box key={tier} w="100%">
            <Text
              variant="normal-text-semibold"
              color="brand.blueCR"
              mb={4}
              textAlign="center"
              fontSize="lg"
            >
              {config.title}
            </Text>
            
            <Grid
              templateColumns={
                isMobile 
                  ? "repeat(2, 1fr)" 
                  : tier === "diamond" 
                    ? "repeat(2, 1fr)"
                    : tier === "gold"
                    ? "repeat(3, 1fr)"
                    : "repeat(4, 1fr)"
              }
              gap={6}
              w="100%"
              maxW="1000px"
              mx="auto"
            >
              {sponsors.map((sponsor, index) => (
                <GridItem key={`${sponsor.tier}-${index}`}>
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    p={6}
                    bg="white"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                    _hover={{
                      boxShadow: "md",
                      transform: "translateY(-2px)",
                      transition: "all 0.2s"
                    }}
                    minH={config.size}
                  >
                    <Box
                      w="100%"
                      h={config.size}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        maxH="100%"
                        maxW="100%"
                        objectFit="contain"
                      />
                    </Box>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Box>
        );
      })}
      
    </VStack>
  );
};

export default SponsorsComponent;
