import { Button, useToast, useClipboard } from "@chakra-ui/react";

const ButtonDonations = () => {
  const wallet = "0x0004d7D8843Ba256f0CA0d835C0977C5D5375285";
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
      <Button
        color="red"
        colorScheme="red"
        variant="outline"
        onClick={handleButtonClick}
        w="142px"
      >
        {hasCopied ? "Copiado!" : "Donar con crypto"}
      </Button>
    </div>
  );
};

export default ButtonDonations;
