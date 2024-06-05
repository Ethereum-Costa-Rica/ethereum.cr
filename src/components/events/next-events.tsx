import { Flex, Text } from "@chakra-ui/react";

const NextEvents = () => {
  return (
    <Flex direction="column" justifyContent="space-between">
      <Flex direction="column" justifyContent="space-around" p="24px">
        <Text variant="h1-semibold">Top next events</Text>
      </Flex>
    </Flex>
  );
};

export default NextEvents;
