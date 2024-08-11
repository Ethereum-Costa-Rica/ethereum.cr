import { Grid, useTheme, GridItem, Text, Flex, Button } from "@chakra-ui/react";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import Image from "next/image";
import { EventType } from "@/models/event.type";
import { Trans, useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";

type EventDescriptionProps = {
  event: EventType;
};

const EventDescriptionDesktop = ({ event }: EventDescriptionProps) => {
  const columnsWidth = useColumnsWidth();
  const theme = useTheme();
  const { t, ready } = useTranslation();
  const {
    eventNameGraphicUrl,
    description,
    venue: { img, name, address, gMapsLink },
  } = event;

  if (!ready) return "loading translations...";

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      gap={theme.spacing.desktop.gridGap}
      w="100%"
      justifyContent="center"
      alignItems="center"
      py="48px"
    >
      <GridItem
        colSpan={8}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap="32px"
      >
        <Image
          src={`/assets/${eventNameGraphicUrl}`}
          width={668.39}
          height={126.55}
          alt="Event Name Graphic"
        />
        <Text variant="h3-regular" mt="12px">
          <Trans
            i18nKey={description}
            components={{
              orange: (
                <Text
                  as="strong"
                  color={theme.colors.brand.ethPuraVida.orange}
                />
              ),
              blue: <Text as="strong" color={theme.colors.brand.blueCR} />,
            }}
          />
        </Text>
        <Flex direction="row" gap="24px">
          <Button
            variant="outlined"
            as="a"
            href="mailto:ethereumcostarica@gmail.com"
          >
            {t("becomeSponsor")}
          </Button>
          {/* <Button variant="outlined">{t("ethPuraVida.exploreAgenda")}</Button> */}
          {/* <Button variant="eth-pura-vida-yellow">
            <Text as="span">{t("ethPuraVida.buyTickets")}</Text>
            <Icon w="24px" h="24px" as={MdArrowForward} ml="10px" />
          </Button> */}
        </Flex>
        <Flex
          direction="row"
          gap="24px"
          w="576px"
          justifyContent="space-between"
        >
          <Image src={`/assets/${img}`} width={250} height={140} alt="Venue" />
          <Flex direction="column" w="352px">
            <Text
              variant="normal-text-semibold"
              decoration="underline"
              letterSpacing="0"
              as="a"
              rel="noopener noreferrer"
              href={gMapsLink}
              target="_blank"
            >
              <Flex direction="row">
                {name}
                <MdArrowOutward size="24px" />
              </Flex>
            </Text>
            <Text variant="normal-text-light">{address}</Text>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem colSpan={4}>
        <Image
          width={400}
          height={400}
          src="/assets/eth-pura-vida/eth-pv-tickets.svg"
          alt="Eth Pura Vida ticket"
        />
      </GridItem>
    </Grid>
  );
};

export default EventDescriptionDesktop;
