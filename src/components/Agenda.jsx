import { Button } from "@chakra-ui/react";

const Agenda = () => {
  return (
    <div>
      <Button
        size="md"
        as="a"
        href="/day"
        color="red"
        colorScheme="red"
        variant="outline"
      >
        Ethereum Costa Rica Day 2023
      </Button>
    </div>
  );
};

export default Agenda;
