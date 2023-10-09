import { EVENTS } from "@/utils/data";
import { Text, Flex, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import EventBody from "./EventBody";
import EventTitle from "./EventTitle";

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const handleNextEvent = () => {
    if (selectedEvent < EVENTS.length - 1) {
      setSelectedEvent(selectedEvent + 1);
    }
  };

  const handlePrevEvent = () => {
    if (selectedEvent > 0) {
      setSelectedEvent(selectedEvent - 1);
    }
  };

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
          px={["30px", "70px"]}
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
            mb="32px"
            direction={["column", "column", "column", "row", "row"]}
          >
            <Flex
              width={["100%", "100%", "100%", "50%", "50%"]}
              direction={["row", "row", "row", "column", "column"]}
              gap={[0, 0, 0, 10, 10]}
              height={["200px", "200px", "200px", "auto", "auto"]}
              justifyContent="center"
              flexWrap="wrap"
              marginBottom={["40px", "40px", "40px", "0px", "0px"]}
            >
              {EVENTS.map((event, index) => (
                <Flex
                  onClick={() => setSelectedEvent(index)}
                  cursor="pointer"
                  key={index + event.schedule}
                  flexWrap="wrap"
                >
                  <EventTitle
                    title={event.schedule}
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
                <Flex
                  display={["none", "none", "block", "block", "block"]}
                  justify="center"
                  textAlign="center"
                  justifySelf="center"
                  mb="10px"
                >
                  <Button onClick={handlePrevEvent} mr="5px">
                    ←
                  </Button>
                  <Button onClick={handleNextEvent}> →</Button>
                </Flex>

                <EventBody
                  schedule={EVENTS[selectedEvent].schedule}
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
