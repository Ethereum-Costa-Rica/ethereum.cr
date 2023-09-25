import {
  Text,
  Flex,
  Grid,
  Box,
  Container,
  Center,
  Button,
  useBreakpoint,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";

const Community = () => {
  return (
    <div>
      <Box backgroundColor="#F7FAFC" py='70px'>
        <Center>
          <Box>
            <Text
              fontSize="5xl"
              fontWeight={700}
              lineHeight="100%"
              align="center"
            >
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
          spacing="120px"
          justify="center"
          mb="50px"
        >
          <WrapItem>
            <Container centerContent mt="150px">
              <Box boxSize="sm" position="relative" overflow="hidden">
                <Box position="relative" overflow="hidden">
                  <Image
                    src="community-image-001.jpg"
                    borderRadius="15px"
                    alt="Expositor"
                  />
                  <Image
                    src="community-image-002.jpg"
                    borderRadius="15px"
                    alt="San Jose map"
                    position="absolute"
                    bottom="-50%"
                    right="0"
                    transform="translateY(-25%)"
                  />
                </Box>
              </Box>
            </Container>
          </WrapItem>
          <WrapItem>
            <Container centerContent mb="150px" mt="150px">
              <Box align="center" marginTop="100px">
                <Text
                  fontSize="3xl"
                  fontWeight={700}
                  maxW={700}
                  lineHeight="100%"
                  align="center"
                >
                  25 de Noviembre / San Jose, Costa Rica
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
              <Center color="gray.500" maxW={500}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit
              </Center>
              <Text color="gray.500" maxW={500}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam,
              </Text>
            </Container>
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  );
};

export default Community;
