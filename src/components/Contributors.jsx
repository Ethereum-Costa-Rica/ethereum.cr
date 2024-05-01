import {
  Flex,
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";

const Contributors = () => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      alignItems="center"
      gap={5}
      minH="120px"
      p={[5, 10]}
      backgroundColor="#EDF2F7"
    >
      <Card maxW="250px">
        <Link
          href="https://github.com/aguzmant103"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <CardBody>
            <Image
              src="https://avatars.githubusercontent.com/u/67167307?v=4"
              alt="Andy Guzmán"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Center>
                <Heading size="md">Andy Guzmán</Heading>
              </Center>
            </Stack>
          </CardBody>
        </Link>
      </Card>
      <Card maxW="250px">
        <Link
          href="https://github.com/JustinCast"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <CardBody>
            <Image
              src="https://avatars.githubusercontent.com/u/17890146?v=4"
              alt="JustinCast"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Center>
                <Heading size="md">JustinCast</Heading>
              </Center>
            </Stack>
          </CardBody>
        </Link>
      </Card>
      <Card maxW="250px">
        <Link
          href="https://github.com/Coderoostr"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <CardBody>
            <Image
              src="https://avatars.githubusercontent.com/u/103231131?v=4"
              alt="Coderoostr"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Center>
                <Heading size="md">Coderoostr</Heading>
              </Center>
            </Stack>
          </CardBody>
        </Link>
      </Card>
      <Card maxW="250px">
        <Link
          href="https://github.com/brolag"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <CardBody>
            <Image
              src="https://avatars.githubusercontent.com/u/1393385?v=4"
              alt="Brolag"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Center>
                <Heading size="md">Brolag</Heading>
              </Center>
            </Stack>
          </CardBody>
        </Link>
      </Card>
      <Card maxW="250px">
        <Link
          href="https://github.com/Gerson2102"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <CardBody>
            <Image
              src="https://avatars.githubusercontent.com/u/71728860?v=4"
              alt="Gerson2102"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Center>
                <Heading size="md">Gerson2102</Heading>
              </Center>
            </Stack>
          </CardBody>
        </Link>
      </Card>
    </Flex>
  );
};

export default Contributors;
