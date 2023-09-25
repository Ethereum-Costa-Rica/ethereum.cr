import { EVENTS } from "@/utils/data";
import { Text, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import EventBody from "./EventBody";
import EventTitle from "./EventTitle";

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  return (
    <Flex
      bgColor="gray.50"
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="full"
    >
      <Flex
        padding="70px 135px"
        direction="column"
        width="full"
        alignItems="center"
      >
        <Box>
          <Text
            marginBottom="80px"
            variant="main-title"
            maxW={700}
            lineHeight="100%"
            align="center"
          >
            Descubre nuestro{" "}
            <Text as="span" color="red">
              itinerario
            </Text>
          </Text>
        </Box>

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
                key={index + event.title}
                flexWrap="wrap"
              >
                <EventTitle
                  title={event.title}
                  active={index === selectedEvent}
                />
              </Flex>
            ))}
          </Flex>
          <Flex width={["100%", "100%", "100%", "50%", "50%"]}>
            <EventBody
              title={EVENTS[selectedEvent].title}
              schedule={EVENTS[selectedEvent].schedule}
              description={EVENTS[selectedEvent].description}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Timeline;
