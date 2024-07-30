import CoverMobile from "@/components/event/cover-mobile";
import EventDescriptionMobile from "@/components/event/event-description-mobile";
import NavBarMobile from "@/components/navbar/nav-bar-mobile";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import EventsData from "@/components/event/data/data.json";
import { EventType } from "@/models/event.type";
import { ETH_CR_BLACK, ETH_CR_LOGO, WHITE_BG_COLOR } from "@/constants/navbar";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";
import NavBarDesktop from "@/components/navbar/nav-bar-desktop";
import CoverDesktop from "@/components/event/cover-desktop";
import EventDescriptionDesktop from "@/components/event/event-description-desktop";
import EventActivities from "@/components/event/event-activities";
import FooterDesktop from "@/components/footer/footer-desktop";
import VenueGalleryDesktop from "@/components/venue-gallery/venue-gallery-desktop";
import FooterMobile from "@/components/footer/footer-mobile";

type EventProps = {
  eventData: {
    event: string;
    coverGraphicUrl: string;
  };
};

const Event = (props: EventProps) => {
  const { eventData } = props;
  const { coverGraphicUrl }: Partial<EventType> = eventData;
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);

  const router = useRouter();

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Flex
      h="auto"
      direction="column"
      justifyContent="space-between"
      width="100%"
    >
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        h="80px"
      >
        {isMobile ? (
          <NavBarMobile
            baseBgColor={WHITE_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_BLACK}
            extendedLogo={ETH_CR_BLACK}
            baseMenuLogoColor="black"
            extendedMenuLogoColor="black"
          />
        ) : (
          <NavBarDesktop
            baseBgColor={WHITE_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_BLACK}
            extendedLogo={ETH_CR_LOGO}
            baseTextColor="black"
            extendedTextColor="black"
          />
        )}
      </Flex>
      {isMobile ? (
        <CoverMobile coverGraphicUrl={coverGraphicUrl} />
      ) : (
        <CoverDesktop
          coverGraphicLeft="eth-pura-vida/eth-pura-vida-desktop-graphic.svg"
          coverGraphicRight="eth-pura-vida/eth-pv-raw-logo.svg"
        />
      )}
      {isMobile ? (
        <EventDescriptionMobile event={eventData as EventType} />
      ) : (
        <EventDescriptionDesktop event={eventData as EventType} />
      )}
      <EventActivities />
      <VenueGalleryDesktop />
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
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

export async function getStaticProps({ locale, params }: any) {
  const eventData = EventsData.events.find(
    (event) => event.event === params.event
  );

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      // Will be passed to the page component as props
      params,
      eventData,
    },
  };
}
