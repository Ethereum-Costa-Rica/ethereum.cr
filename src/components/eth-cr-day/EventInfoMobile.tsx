import { Event } from "@/utils/data";
import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const EventInfoMobile = (event: Event) => {
  const [expand, setExpand] = useState(false);
  const { group, groupSchedule, sessions } = event;

  return (
    <Flex
      direction="row"
      padding="10px"
      gap="30px"
      h={expand ? "auto" : "100px"}
      flexWrap="wrap"
      w="full"
      justify="space-between"
      alignItems="center"
    >
      <Flex direction="column">
        <Text variant="h3">{group}</Text>
        <Text fontSize="18px" color="brand.primary">
          {groupSchedule}
        </Text>
      </Flex>
      <IconButton
        bg="transparent"
        aria-label="dropdown-img"
        icon={<Image src="dropdown.svg" alt="dropdown" />}
        onClick={() => setExpand(!expand)}
      />
      {expand && (
        <Flex direction="column" w="full" h="auto" overflowY="auto" pt={5}>
          {sessions.map(({ title, speaker, room, schedule }) => (
            <Flex
              key={room + Date.now()}
              direction="column"
              justify="center"
              alignItems="center"
              mb={10}
            >
              <Text align="center" fontSize="18px" fontWeight={700}>
                {title}
              </Text>
              <Text fontSize={["lg", "lg"]}>{speaker}</Text>
              <Text fontSize={["lg", "lg"]}>{room}</Text>
              <Text align="center" variant="subtitle2" color="brand.primary">
                {schedule}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default EventInfoMobile;
