import {
  Text,
  Box,
  Center,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const Sponsors = () => {
  return (
    <div>
      <Box pb="100px">
        <Center>
          <Box py="75px">
            <Text variant="h1" align="center">
              Official Sponsors
            </Text>
          </Box>
        </Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={20}
          alignItems="center"
          justifyItems="center"
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
    </div>
  );
};

export default Sponsors;
