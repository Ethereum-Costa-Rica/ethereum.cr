import { EVENTS } from "@/utils/data";
import { Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import EventBody from "./EventBody";
import EventTitle from "./EventTitle";

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

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
          px={["10px", "10px", "70px"]}
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

          <Flex
            width="full"
            alignItems="center"
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
              <Flex
                alignContent="center"
                alignItems="center"
                direction="column"
                width="400px"
                maxWidth="100%"
              >
                <EventBody
                  talk={EVENTS[selectedEvent].group}
                  sessions={EVENTS[selectedEvent].sessions}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Timeline;
