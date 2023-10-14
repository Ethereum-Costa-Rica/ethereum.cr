import { Button, useToast, useClipboard } from "@chakra-ui/react";

const ButtonDonations = () => {
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
      <Button
        color="red"
        colorScheme="red"
        variant="outline"
        onClick={handleButtonClick}
      >
        {hasCopied ? "Copiado!" : "Donar con crypto"}
      </Button>
    </div>
  );
};

export default ButtonDonations;
