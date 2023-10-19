import { Event, EVENTS } from "@/utils/data";
import { Text, Flex, useMediaQuery, Divider } from "@chakra-ui/react";
import { useState } from "react";
import EventInfoMobile from "./eth-cr-day/EventInfoMobile";
import EventBody from "./EventBody";
import EventTitle from "./EventTitle";

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [isLargerThan360] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Flex
        bgColor="gray.50"
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="full"
      >
        <Flex
          py={["60px", "135px"]}
          px={["20px", "20px", "70px"]}
          direction="column"
          width="full"
          alignItems="center"
        >
          <Flex justifyItems="start">
            <Text
              marginBottom="80px"
              variant={["h2", "h2", "main-title"]}
              maxW={700}
              lineHeight="100%"
              align="center"
            >
              Descubre nuestro{" "}
              <Text as="span" color="red">
                itinerario
              </Text>
            </Text>
          </Flex>

          {isLargerThan360 ? (
            <Flex
              width="full"
              alignItems="center"
              gap={20}
              justifyContent="center"
              direction={["column", "column", "column", "row"]}
            >
              <Flex
                width={["100%", "100%", "100%", "50%", "50%"]}
                direction={["row", "row", "row", "column", "column"]}
                gap={[2, 2, 0]}
                flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap"]}
                justifyContent="center"
              >
                {EVENTS.map((event, index) => (
                  <Flex
                    onClick={() => setSelectedEvent(index)}
                    cursor="pointer"
                    key={index + event.group}
                    justifyContent="center"
                    alignItems="center"
                    maxW={["40px", "40px", "40px", "100%"]}
                    width="100%"
                  >
                    <EventTitle
                      title={event.group}
                      active={index === selectedEvent}
                    />
                  </Flex>
                ))}
              </Flex>
              <Flex
                width={["100%", "100%", "100%", "50%", "50%"]}
                align="center"
                justify="center"
              >
                <EventBody
                  talk={EVENTS[selectedEvent].group}
                  sessions={EVENTS[selectedEvent].sessions}
                />
              </Flex>
            </Flex>
          ) : (
            <>
              <Divider />
              {EVENTS.map((event: Event, index) => (
                <>
                  <EventInfoMobile key={index + Date.now()} {...event} />
                  <Divider />
                </>
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
export default Timeline;
