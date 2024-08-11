import useColumnsWidth from "@/utils/hooks/useGridColumns";
import {
  Grid,
  GridItem,
  Text,
  useTheme,
  Flex,
  Card,
  CardBody,
  Tag,
  Icon,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import Image from "next/image";
import { MdArrowForward, MdComputer, MdOutlineTimelapse } from "react-icons/md";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import { MOBILE_GRID_COLUMNS } from "@/constants/mobileGridColumns";

const EventActivities = () => {
  const { t } = useTranslation();
  const columnsWidth = useColumnsWidth();
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);
  const theme = useTheme();
  const ethPuraVidaColors = theme.colors.brand.ethPuraVida;
  const orange = ethPuraVidaColors.orange;
  const neutralGray = ethPuraVidaColors.neutralGray;
  const events =
    (t("ethPuraVida.activities", {
      returnObjects: true,
    }) as Array<any>) || [];

  return (
    <Grid
      templateColumns={
        isMobile ? MOBILE_GRID_COLUMNS : `repeat(12, ${columnsWidth})`
      }
      gap={theme.spacing.desktop.gridGap}
      justifyContent="center"
      flexDirection="column"
      py="32px"
      px={theme.spacing.mobile.paddingX}
    >
      <GridItem colSpan={isMobile ? 4 : 8}>
        <Text variant="h2-extra-bold-desktop">
          <Trans
            i18nKey="ethPuraVida.topEventActivities"
            components={{
              orange: <Text as="strong" color={orange} />,
            }}
          />
        </Text>
        <Text variant="normal-text-regular">
          <Trans
            i18nKey="ethPuraVida.activitiesDescription"
            components={{
              orange: <Text as="strong" color={orange} />,
              blue: <Text as="strong" color={theme.colors.brand.blueCR} />,
            }}
          />
        </Text>
      </GridItem>
      <GridItem colSpan={isMobile ? 4 : 12}>
        <Flex direction="row" gap="24px" wrap="nowrap" overflowX="auto">
          {events.length && events.map
            ? events.map(
                ({
                  title,
                  imgUrl,
                  description,
                  mode,
                  eventMode,
                  duration,
                  date,
                  tag: { name, color },
                }: any) => (
                  <Card w="300px" minW="300px" p="16px" bg={neutralGray}>
                    <CardBody
                      gap="8px"
                      display="flex"
                      flexDirection="column"
                      p={0}
                    >
                      <Tag
                        colorScheme={color}
                        textTransform="uppercase"
                        fontWeight="bold"
                        w="fit-content"
                      >
                        {name}
                      </Tag>
                      <Text variant="h3-extra-bold-mobile">{title}</Text>
                      <Flex
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Text
                          as="span"
                          textAlign="center"
                          align="center"
                          justifyContent="center"
                          display="flex"
                          gap="5px"
                        >
                          <Icon
                            as={MdOutlineTimelapse}
                            color={ethPuraVidaColors.lightOrange}
                            w="24px"
                            h="24px"
                          />
                          {duration}
                        </Text>
                        <Text
                          ml={7}
                          as="span"
                          textAlign="center"
                          align="center"
                          justifyContent="center"
                          display="flex"
                          gap="5px"
                        >
                          <Icon
                            as={MdComputer}
                            color={ethPuraVidaColors.lightOrange}
                            w="24px"
                            h="24px"
                          />
                          {mode}
                        </Text>
                      </Flex>
                      <Text variant="normal-text-regular" noOfLines={2}>
                        {description}
                      </Text>
                      <Flex justifyContent="center" alignItems="center">
                        <Image
                          src={`/assets/${imgUrl}`}
                          width={186}
                          height={130}
                          alt="Event img"
                        />
                      </Flex>
                      <Flex direction="row" justifyContent="space-between">
                        <Flex direction="column" alignItems="space-between">
                          <Text variant="normal-text-semibold">
                            {eventMode}
                          </Text>
                          <Text>
                            <Trans
                              components={{
                                orange: <Text as="span" color={orange} />,
                              }}
                            >
                              {date}
                            </Trans>
                          </Text>
                        </Flex>
                        <Button isDisabled>
                          <Icon as={MdArrowForward} w="24px" h="24px" />
                        </Button>
                      </Flex>
                    </CardBody>
                  </Card>
                )
              )
            : null}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default EventActivities;
