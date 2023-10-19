import {
  Text,
  Box,
  Image,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import BackgroundWrapperDay from "@/components/BackgroundWrapperDay";

const Community = () => {
  return (
    <Flex
      justify="center"
      pt={30}
      gap={[30, 30, 30, 30, 134]}
      direction="column"
      alignItems="center"
      backgroundColor="#F7FAFC"
      px={["20px", "20px", "20px", "20px", "70px"]}
    >
      <Text variant={["h3", "h2", "h1"]} align="center">
        Nos reuniremos como{" "}
        <Text as="span" color="red">
          comunidad
        </Text>
      </Text>
      <Flex direction="row" flexWrap="wrap" justify="center" align="center">
        <Box
          display="flex"
          alignItems="center"
          boxSize={["90vw", "70vw", "30vw"]}
          mr={["0px", "0px", "100px", "150px"]}
        >
          <Image
            src="texas-tech2.jpg"
            borderRadius="5px"
            alt="Campus Texas Tech"
            minW="320px"
          />
        </Box>
        <Flex mb={10} direction="column">
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
          <Text
            maxW={500}
            my="25px"
            variant="body"
            align={["left", "left", "left", "left", "center"]}
          >
            Ethereum Costa Rica Day será una jornada repleta de actividades,
            incluyendo charlas, talleres, conferencias y espacios dedicados al
            networking. Este evento tiene como objetivo introducir a nuevos
            usuarios, desarrolladores, entusiastas y emprendedores al mundo del
            blockchain y Ethereum, enfocándose en la educación, la experiencia y
            la consolidación de la comunidad.
          </Text>
          <Text maxW={500} my="25px" variant="body" align="left">
            <strong>Algunas de los temas que tocaremos serán:</strong>
          </Text>
          <UnorderedList>
            <ListItem>
              <Text variant="body">Uso de wallets</Text>
            </ListItem>
            <ListItem>
              <Text variant="body">NFTs</Text>
            </ListItem>
            <ListItem>
              <Text variant="body">
                Desarrollo en lenguajes como Solidity, Cairo, etc.
              </Text>
            </ListItem>
            <ListItem>
              <Text variant="body">Zero Knowledge</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Community;
