import { EVENTS } from '@/utils/data';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useState } from 'react';
import EventBody from './EventBody';
import EventTitle from './EventTitle';

const Timeline = () => {
    const [selectedEvent, setSelectedEvent] = useState(0)
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
              fontSize="5xl"
              fontWeight={700}
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
            justifyContent="space-around"
            mb="32"
          >
            <Flex width="50%" direction="column" gap={10}>
                {EVENTS.map((event, index) => (
                    <Box
                        onClick={() => setSelectedEvent(index)}
                        cursor="pointer"
                        key={index + event.title}
                        >
                    <EventTitle
                        title={event.title}
                        active={index === selectedEvent}
                    />
                    </Box>
                ))}
            </Flex>
            <Flex width="50%">
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
}

export default Timeline