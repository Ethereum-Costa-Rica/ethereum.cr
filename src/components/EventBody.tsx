import { Box, Text } from "@chakra-ui/react";

interface EventBodyProps {
  title: string;
  schedule: string;
  description: string;
}

const EventBody = ({ title, schedule, description }: EventBodyProps) => {
  return (
    <Box marginLeft={[0, 0, 0, "40px", "40px"]} textAlign="center">
      <Text fontSize="30px" fontWeight={700}>
        {title}
      </Text>
      <Text fontSize="18px" color="red" marginBottom="40px">
        {schedule}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default EventBody;