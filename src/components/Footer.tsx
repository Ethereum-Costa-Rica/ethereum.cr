import { Flex, Text, Button, Wrap, WrapItem, useToast, useClipboard } from "@chakra-ui/react";

const Footer = () => {
  const wallet = "0x5EAD82e959D8218f6003526AB8d457972B679C41";
  const { onCopy, hasCopied } = useClipboard(wallet);
  const toast = useToast();

  const handleButtonClick = () => {
    onCopy();
    showToast();
  };

  const showToast = () => {
    toast({
      title: "Dirección copiada",
      description: "Cualquier ayuda nos será de utilidad!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Wrap justify='space-between' px="90px" pt={10} pb={10} backgroundColor="#EDF2F7">
        <WrapItem>
          <Flex direction="column">
            <Flex alignItems="center" mb={-3}>
              <Text fontSize='4xl'>Ethereum<Text fontSize='4xl' color="red" ml={2} as='b'>Costa Rica</Text>
              </Text>
            </Flex>
            <Text fontSize='xl' mb={5}>Creado con amor por la comunidad</Text>
            <Text fontSize='lg'>2023</Text>
          </Flex>
        </WrapItem>
        <WrapItem>
          <Button
            color="red"
            colorScheme="red"
            variant="outline"
            onClick={handleButtonClick}
          >
            {hasCopied ? "Copiado!" : "Donar con crypto"}
          </Button>
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default Footer;