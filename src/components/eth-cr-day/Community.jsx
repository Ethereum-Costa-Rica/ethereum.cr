import { Text, Box, Image, Flex } from "@chakra-ui/react";

const Community = () => {
  return (
    <Box pt={10} backgroundColor="#F7FAFC">
      <Text mb={10} variant={["h3", "h2", "h1"]} align="center">
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
            minW="360px"
          />
        </Box>
        <Flex mb={10} mt={14} direction="column">
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
            El Ethereum Costa Rica Day será una jornada repleta de actividades,
            incluyendo charlas, talleres, conferencias y espacios dedicados al
            networking. Este evento tiene como objetivo introducir a nuevos
            usuarios, desarrolladores, entusiastas y emprendedores al mundo del
            blockchain y Ethereum, enfocándose en la educación, la experiencia y
            la consolidación de la comunidad.
          </Text>
          <Text maxW={500} my="25px" variant="body" align="left">
            <u>
              <strong>Algunas de los temas que tocaremos serán:</strong>
            </u>

            <ul>
              <li>Uso de wallets: ¿qué es una billetera?¿Cómo se usan?</li>
              <li>
                NFTs: ¿qué son y como son una manera de potenciar las
                comunidades y empresas digitales?
              </li>
              <li>Desarrollo: en lenguajes como Solidity, Cairo, etc.</li>
              <li>Criptografía: e Introducción a Zero Knowledge</li>
            </ul>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Community;
