import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { HomeCardFeature } from "@/models/homeCardFeature";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Icon,
  Text,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { MdArrowForward } from "react-icons/md";

interface EventCardProps {
  cardFeature: HomeCardFeature;
}

const EventCard = ({ cardFeature }: EventCardProps) => {
  const {
    HeaderIcon,
    headerCaption,
    title,
    bodyPart1,
    bodyPart2,
    bodyPart3,
    buttonCaption,
  } = cardFeature;
  const { t, ready } = useTranslation();
  const theme = useTheme();
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);

  if (!ready) return null;

  return (
    <Card
      w="xs"
      minW="xs"
      maxW="sm"
      minH="150px"
      bg="white"
      borderRadius="12px"
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
      border="1px solid #e2e8f0"
      my={theme.spacing.mobile.marginY}
      transition="all 0.2s ease"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
      }}
    >
      <CardBody p="24px">
        <Flex
          direction="column"
          justifyContent="space-between"
          h="100%"
          alignItems="center"
          gap="20px"
        >
          <Flex direction="row" alignItems="center" justify="center" gap={2}>
            <HeaderIcon size="24px" color="#e53e3e" />
            <Text 
              variant="small-text-regular" 
              color="gray.600"
              fontSize="14px"
            >
              {t(headerCaption)}
            </Text>
          </Flex>
          
          <Flex direction="column" alignItems="center" gap="8px">
            <Text 
              variant="h4-extra-bold-mobile" 
              textTransform="uppercase"
              color="gray.800"
              fontSize="14px"
              fontWeight="700"
              letterSpacing="0.5px"
            >
              {t(title)}
            </Text>
            
            <Flex direction="row" alignItems="baseline" gap="12px">
              <Text 
                variant="h1-extra-bold-desktop" 
                color="#e53e3e"
                fontSize="42px"
                fontWeight="800"
                lineHeight="1"
              >
                {bodyPart1}
              </Text>
              {bodyPart2 && bodyPart3 && (
                <Text 
                  variant="h2-semibold" 
                  color="#e53e3e"
                  fontSize="16px"
                  fontWeight="700"
                >
                  {t(bodyPart3)}
                </Text>
              )}
            </Flex>
          </Flex>
          
          {isMobile && (
            <Button 
              variant="outlined" 
              isDisabled
              borderRadius="6px"
              borderColor="#e53e3e"
              color="#e53e3e"
              size="sm"
            >
              {t(buttonCaption)}
              <Icon w="16px" h="16px" ml="6px" as={MdArrowForward} />
            </Button>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default EventCard;
