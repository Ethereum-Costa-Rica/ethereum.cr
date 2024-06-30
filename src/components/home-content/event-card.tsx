import {
  Button,
  Card,
  CardBody,
  Flex,
  Icon,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdArrowForward, MdPublic } from "react-icons/md";

const EventCard = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card w="xs" maxW="sm" bg="#F7F8F8" my={theme.spacing.mobile.marginY}>
      <CardBody>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Flex direction="row" alignItems="center" justify="center" gap={2}>
            <MdPublic size="32px" />
            <Text variant="small-text-regular">
              {t("homeContent.onlineAndInPerson")}
            </Text>
          </Flex>
          <Flex direction="row">
            <Text variant="h4-extra-bold-mobile" textTransform="capitalize">
              {t("homeContent.moreThan")}
            </Text>
          </Flex>
          <Flex direction="row" gap="24px">
            <Text variant="h1-extra-bold-desktop" color="brand.darkRedCR">
              19
            </Text>
            <Flex direction="column" justifyContent="center">
              <Text variant="small-text-semibold">
                ({t("homeContent.lastYear")})
              </Text>
              <Text variant="h2-semibold" color="brand.darkRedCR">
                {t("events")}
              </Text>
            </Flex>
          </Flex>
          <Button variant="outlined">
            {t("homeContent.seeMoreEvents")}
            <Icon w="24px" h="24px" ml="10px" as={MdArrowForward} />
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default EventCard;
