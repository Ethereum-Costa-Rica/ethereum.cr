import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Image,
  Center,
  VStack,
} from "@chakra-ui/react";

function EmailModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxsnTaZ-I7vhXaJc6Z6AuD9JBUbnPe59hxI9FRPaltC-ncaUYIgznO-3lrmTuXHDuws-A/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Correo enviado con éxito");
      } else {
        console.error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            ¡Únete para recibir nuestras novedades!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <VStack spacing={4}>
                <Image src="ethpv.svg" alt="Logo" boxSize="350px" />
                <form onSubmit={handleSubmit}>
                  <FormControl id="email" isRequired>
                    <FormLabel textAlign="center">Correo electrónico</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Ingresa tu correo"
                    />
                  </FormControl>
                  <ModalFooter justifyContent="center">
                    <Button colorScheme="blue" type="submit">
                      Enviar
                    </Button>
                  </ModalFooter>
                </form>
              </VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EmailModal;
