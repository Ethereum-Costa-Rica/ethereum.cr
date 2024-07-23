import { EventType } from "@/models/event.type";
import { Flex, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";

type EventDescriptionProps = {
  event: EventType;
};

const EventDescriptionMobile = ({ event }: EventDescriptionProps) => {
  const { t } = useTranslation();
  const {
    event: eventName,
    eventNameGraphicUrl,
    description,
    venue: { img, name, address, gMapsLink },
  } = event;
  const theme = useTheme();
  const { verticalGap, paddingX, paddingY } = theme.spacing.mobile;

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      gap={verticalGap}
      px={paddingX}
      py={paddingY}
    >
      <Image
        src={`/assets/${eventNameGraphicUrl}`}
        width={350}
        height={111.36}
        alt="Event Name Graphic"
      />

      <Text variant="normal-text-regular" mt="12px">
        <Trans
          i18nKey={description}
          components={{
            orange: (
              <Text as="strong" color={theme.colors.brand.ethPuraVida.orange} />
            ),
            blue: <Text as="strong" color={theme.colors.brand.blueCR} />,
          }}
        />
      </Text>

      <Flex direction="column" mt="20px">
        <Image src={`/assets/${img}`} width={336} height={215} alt="Venue" />

        <Flex
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          mt="12px"
        >
          <Text
            variant="normal-text-semibold"
            decoration="underline"
            letterSpacing="0"
            as="a"
            rel="noopener noreferrer"
            href={gMapsLink}
            target="_blank"
          >
            {name}
          </Text>
          <MdArrowOutward size="24px" />
        </Flex>
        <Text variant="normal-text-light">{address}</Text>
      </Flex>
    </Flex>
  );
};

export default EventDescriptionMobile;
