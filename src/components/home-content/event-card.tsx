import { HomeCardFeature } from "@/models/homeCardFeature";
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
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      w="xs"
      minW="xs"
      maxW="sm"
      bg="#F7F8F8"
      my={theme.spacing.mobile.marginY}
    >
      <CardBody>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Flex direction="row" alignItems="center" justify="center" gap={2}>
            <HeaderIcon size="25px" />
            <Text variant="small-text-regular">{t(headerCaption)}</Text>
          </Flex>
          <Flex direction="row">
            <Text variant="h4-extra-bold-mobile" textTransform="capitalize">
              {t(title)}
            </Text>
          </Flex>
          <Flex direction="row" gap="24px">
            <Text variant="h1-extra-bold-desktop" color="brand.darkRedCR">
              {bodyPart1}
            </Text>
            <Flex direction="column" justifyContent="center">
              <Text variant="small-text-semibold">({t(bodyPart2)})</Text>
              <Text variant="h2-semibold" color="brand.darkRedCR">
                {t(bodyPart3)}
              </Text>
            </Flex>
          </Flex>
          <Button variant="outlined">
            {t(buttonCaption)}
            <Icon w="24px" h="24px" ml="10px" as={MdArrowForward} />
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default EventCard;
