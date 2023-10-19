import { Text, Box, Center, Grid, Image } from "@chakra-ui/react";

const Sponsors = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxW="1228px"
      m="auto"
      pb="100px"
    >
      <Center>
        <Box py="75px">
          <Text variant={["h2", "h2", "h1"]} align="center">
            Official Sponsors
          </Text>
        </Box>
      </Center>
      <Grid
        templateColumns={[
          "repeat(2, 163px)",
          "repeat(2, 163px)",
          "repeat(3, 163px)",
          "repeat(3, 1fr)",
        ]}
        gap={10}
        alignItems="center"
        justifyItems="center"
      >
        <Image src="./sponsors/ef-logo.png" alt="ETH Fundation" />
        <Image src="./sponsors/paguelo-facil.png" alt="Paguelo Facil" />
        <Image
          src="./sponsors/texas-tech-university.png"
          alt="Texas Tech University"
        />
        <Image src="./sponsors/886-crypto.png" alt="886 Crypto" />
        <Image src="./checkmyticket.svg" alt="Check My Ticket" />
        <Image src="./PizzaDao.svg" alt="Pizza DAO" />
        <Image src="./sponsors/c-creators.png" alt="C Creators" />
      </Grid>
    </Box>
  );
};

export default Sponsors;
