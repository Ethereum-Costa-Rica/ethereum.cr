import { Text, Box, Center, Grid, Image } from "@chakra-ui/react";

const Sponsors = () => {
  return (
    <Box maxW="1228px" m="auto" pb="100px">
      <Center>
        <Box py="75px">
          <Text variant={{ sm: "h2", md: "h1" }} align="center">
            Official Sponsors
          </Text>
        </Box>
      </Center>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={20}
        alignItems="center"
        justifyItems="center"
        px={5}
      >
        <Image
          src="./sponsors/texas-tech-university.png"
          alt="Texas Tech University"
        />
        <Image src="./sponsors/paguelo-facil.png" alt="Paguelo Facil" />
        <Image
          src="./sponsors/texas-tech-university.png"
          alt="Texas Tech University"
        />
        <Image src="./sponsors/paguelo-facil.png" alt="Paguelo Facil" />
        <Image
          src="./sponsors/texas-tech-university.png"
          alt="Texas Tech University"
        />
        <Image src="./sponsors/paguelo-facil.png" alt="Paguelo Facil" />
      </Grid>
    </Box>
  );
};

export default Sponsors;
