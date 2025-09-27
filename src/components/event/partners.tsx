import {
  Box,
  Heading,
  Image,
  Link,
  useMediaQuery,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Trans, useTranslation } from "next-i18next";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Partner {
  name: string;
  logo: string;
  website: string;
}

interface PartnersProps {
  context?: "event" | "home";
}

const Partners = ({ context = "event" }: PartnersProps) => {
  const { ready } = useTranslation();
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const theme = useTheme();
  const blueCR = theme.colors.brand.blueCR;
  const darkRedCR = theme.colors.brand.darkRedCR;

  // Real partner logos
  const partners: Partner[] = [
    {
      name: "Ethereum Foundation",
      logo: "/assets/partners/ethereumfoundation.svg",
      website: "https://ethereum.org",
    },
    {
      name: "Texas Tech University",
      logo: "/assets/partners/texastech.svg",
      website: "https://www.ttu.edu",
    },
    {
      name: "886 Crypto",
      logo: "/assets/partners/886crypto.svg",
      website: "https://www.886crypto.com",
    },
    {
      name: "Impesa",
      logo: "/assets/partners/impesa.svg",
      website: "https://www.impesa.net",
    },
    {
      name: "Inbest",
      logo: "/assets/partners/inbest.svg",
      website: "https://www.skool.com/inbestprogram/about",
    },
    {
      name: "PagueloFacil",
      logo: "/assets/partners/paguelofacil.svg",
      website: "https://www.paguelofacil.com/",
    },
    {
      name: "PizzaDAO",
      logo: "/assets/partners/PizzaDao.svg",
      website: "https://globalpizza.party/",
    },
    {
      name: "Starknet",
      logo: "/assets/partners/starknet.svg",
      website: "https://starknet.io/",
    },
    {
      name: "Chainlink",
      logo: "/assets/partners/chainlink.png",
      website: "https://chain.link/",
    },
    {
      name: "Scroll",
      logo: "/assets/partners/scroll.png",
      website: "https://scroll.io/",
    }
  ];

  if (!ready) return null;

  return (
    <Box
      as="section"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 8 }}
      bg="white"
      textAlign="center"
    >
      <Heading
        as="h2"
        size={{ base: "xl", md: "2xl" }}
        mb={{ base: 6, md: 12 }}
        color="gray.800"
        fontWeight="bold"
      >
        <Trans
          ns="common"
          i18nKey={
            context === "event"
              ? "ethPuraVida.partners.title"
              : "homeContent.partners.title"
          }
          components={{
            blue: <Text as="strong" color={blueCR} />,
            red: <Text as="strong" color={darkRedCR} />,
          }}
        />
      </Heading>

      <Box maxW={{ base: "100%", md: "1000px" }} mx="auto">
        <Carousel
          showArrows={!isMobile}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={!isMobile}
          interval={4000}
          stopOnHover={true}
          showIndicators={false}
          centerMode={!isMobile}
          centerSlidePercentage={25}
          emulateTouch={true}
          swipeable={true}
          dynamicHeight={false}
          selectedItem={0}
          width="100%"
        >
          {partners.map((partner, index) => (
            <Box key={index} p={{ base: 1, md: 2 }}>
              <Link
                href={partner.website}
                isExternal
                transition="transform 0.2s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={{ base: 4, md: 6 }}
                bg="white"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                _hover={{
                  transform: "scale(1.05)",
                  borderColor: "blue.300",
                  boxShadow: "md",
                }}
                h={{ base: "100px", md: "120px" }}
                w="100%"
                minH={{ base: "100px", md: "120px" }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  maxH={{ base: "60px", md: "80px" }}
                  maxW="100%"
                  w="auto"
                  h="auto"
                  objectFit="contain"
                  objectPosition="center"
                  fallbackSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTIwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjYwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjc3NDhCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGFydG5lcjwvdGV4dD4KPC9zdmc+"
                />
              </Link>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Partners;
