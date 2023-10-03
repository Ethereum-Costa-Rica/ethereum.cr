import {
  Text,
  Box,
  Container,
  Center,
  Wrap,
  WrapItem,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Community = () => {
  return (
    <Box backgroundColor="#F7FAFC" py={{ sm: "20px", md: "70px" }}>
      <Center>
        <Box>
          <Text variant={["h2", "h2", "h1"]} align="center">
            Nos reuniremos como{" "}
            <Text as="span" color="red">
              comunidad
            </Text>
          </Text>
        </Box>
      </Center>
      <Wrap
        minWidth="initial"
        alignItems="stretch"
        spacing="175px"
        justify="center"
        align="center"
        mt="90px"
      >
        <WrapItem>
          <Grid position="relative" py="50px">
            <GridItem width="415px">
              <Image
                src="community-image-001.jpg"
                borderRadius="15px"
                alt="Expositor"
              />
            </GridItem>
            <GridItem
              width="210px"
              position="absolute"
              top="300px"
              left="300px"
            >
              <Image
                src="community-image-002.jpg"
                borderRadius="15px"
                alt="San Jose map"
              />
            </GridItem>
          </Grid>
        </WrapItem>
        <WrapItem>
          <Container centerContent>
            <Box align="center">
              <Text
                fontSize="3xl"
                fontWeight={700}
                maxW={700}
                lineHeight="100%"
                align="center"
              >
                18 de Noviembre
                <br />
                San José, Costa Rica
              </Text>
              <Text
                as="span"
                color="red"
                fontSize="3xl"
                fontWeight={700}
                maxW={700}
                lineHeight="100%"
                align="center"
              >
                9:00-17:00
              </Text>
            </Box>
            <Text maxW={500} my="25px" variant="body" align="center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </Text>
            <Text maxW={500} my="25px" variant="body" align="center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,
            </Text>
          </Container>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Community;
