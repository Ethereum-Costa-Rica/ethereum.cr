import { Box, Text } from "@chakra-ui/react";

interface Session {
  room: string;
  type: string;
  speaker: string;
  title: string;
}

interface EventBodyProps {
  schedule: string;
  sessions: Session[];
}

const EventBody = ({ schedule, sessions }: EventBodyProps) => {
  return (
    <Box  textAlign="center">
      <Text fontSize="30px" fontWeight={700}>
        {schedule}
      </Text>
      {sessions.map((session) => (
        <Box key={session.title + session.room + session.speaker}>
          <Text fontSize="18px" color="red" marginBottom="10px">
            Room {session.room}
          </Text>
          <Text>
            Type: {session.type} - {session.title}{" "}
            {session.speaker ? `- ${session.speaker}` : ""}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default EventBody;
