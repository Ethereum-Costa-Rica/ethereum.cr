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

  // placeholders, replace later
  const partners: Partner[] = [
    {
      name: "Partner 1",
      logo: "/assets/partners/partner1.svg",
      website: "https://example.com",
    },
    {
      name: "Partner 2",
      logo: "/assets/partners/partner2.svg",
      website: "https://example.com",
    },
    {
      name: "Partner 3",
      logo: "/assets/partners/partner3.svg",
      website: "https://example.com",
    },
    {
      name: "Partner 4",
      logo: "/assets/partners/partner4.svg",
      website: "https://example.com",
    },
    {
      name: "Partner 5",
      logo: "/assets/partners/partner5.svg",
      website: "https://example.com",
    },
    {
      name: "Partner 6",
      logo: "/assets/partners/partner6.svg",
      website: "https://example.com",
    },
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
                p={{ base: 3, md: 4 }}
                bg="gray.50"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                _hover={{
                  transform: "scale(1.05)",
                  borderColor: "blue.300",
                  boxShadow: "md",
                }}
                h={{ base: "80px", md: "100px" }}
                w="100%"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  maxH={{ base: "60px", md: "80px" }}
                  maxW="100%"
                  objectFit="contain"
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
