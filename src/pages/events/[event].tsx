import Cover from "@/components/event/cover";
import EventDescription from "@/components/event/event-description";
import NavBarMobile from "@/components/nav-bar-mobile";
import { Flex, useTheme } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import EventsData from "@/components/event/data/data.json";
import { EventType } from "@/models/event.type";
import { ETH_CR_BLACK, WHITE_BG_COLOR } from "@/constants/navbar";

type EventProps = {
  eventData: {
    event: string;
    coverGraphicUrl: string;
  };
};

const Event = (props: EventProps) => {
  const theme = useTheme();
  const { eventData } = props;
  const { coverGraphicUrl }: Partial<EventType> = eventData;

  const router = useRouter();

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Flex
      direction="column"
      w={theme.spacing.mobile.width}
      justifyContent="space-between"
      h="auto"
      alignItems="center"
    >
      <NavBarMobile
        baseBgColor={WHITE_BG_COLOR}
        extendedBgColor={WHITE_BG_COLOR}
        baseLogo={ETH_CR_BLACK}
        extendedLogo={ETH_CR_BLACK}
        baseMenuLogoColor="black"
        extendedMenuLogoColor="black"
      />
      <Cover coverGraphicUrl={coverGraphicUrl} />
      <EventDescription event={eventData as EventType} />
    </Flex>
  );
};

export default Event;

export async function getStaticPaths() {
  const paths = EventsData.events.map(({ event }) => ({
    params: { event },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const eventData = EventsData.events.find(
    (event) => event.event === params.event
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
      params,
      eventData,
    },
  };
}
