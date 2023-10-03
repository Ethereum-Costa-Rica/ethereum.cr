import { Text, Box, Flex, Button } from "@chakra-ui/react";

const Space = () => {
  return (
    <div>
      <Flex py="75px" alignItems="center" justifyContent="center">
        <Box>
          <Text align="center" variant={{ sm: "h2", md: "h1" }}>
            Guarda tu{" "}
            <Text as="span" color="red">
              espacio
            </Text>
          </Text>
          <Flex py="60px" justifyContent="center">
            <Text as="b" fontSize="xl" textAlign="center">
              ¡La revolución tecnológica se aproxima!
              <br />
              ¿Estás listo?
            </Text>
          </Flex>
          <Flex justifyContent="center">
            <Button maxW="142px" as="a" href="#" variant="primary">
              Formar parte
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Space;
