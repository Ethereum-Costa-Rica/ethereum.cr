import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  Image,
  Center,
  VStack,
  Flex,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

function EmailModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_tx82tqr",
        "template_xoh5eml",
        templateParams,
        "BlPWWRhjHcpUgj5Rt"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Correo enviado.",
            description: "Tu correo ha sido enviado exitosamente.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (err) => {
          console.error("FAILED...", err);
          toast({
            title: "Error.",
            description: "Hubo un problema al enviar tu correo.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );

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
                  <FormControl
                    id="email"
                    isRequired
                    justifyContent="center"
                  >
                    <Flex mb="10">
                      <Input
                        placeholder="Correo electrónico"
                        type='email'
                        name='email'
                      />
                      <Button colorScheme="blue" type="submit" value="send">
                        Enviar
                      </Button>
                    </Flex>
                  </FormControl>
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
