import {
  Text,
  Box,
  Container,
  Wrap,
  WrapItem,
  Image,
  Flex,
} from "@chakra-ui/react";

const Community = () => {
  return (
    <Box pt={10} backgroundColor="#F7FAFC">
      <Flex direction="column" justify="center" align="center">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          boxSize="90vw"
          maxW="2048px"
        >
          <Text mb={10} variant={["h3", "h2", "h1"]} align="center">
            Nos reuniremos como{" "}
            <Text as="span" color="red">
              comunidad
            </Text>
          </Text>
          <Image
            src="texas-tech2.jpg"
            borderRadius="5px"
            alt="Campus Texas Tech"
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Community;
