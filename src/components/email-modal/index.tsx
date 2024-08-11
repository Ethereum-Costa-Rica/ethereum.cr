import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  FormControl,
  Input,
  Image,
  Flex,
  useToast,
  Text,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { MdClose } from "react-icons/md";
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID,
} from "@/constants/email";

type EmailModalProps = {
  showDialog: boolean;
};

const EmailModal = (props: EmailModalProps) => {
  const { showDialog } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  useEffect(() => {
    if (!showDialog) {
      onClose();
    } else onOpen();
  }, [showDialog]);

  const handleSubmit = (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const email = event.target.email.value;

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_USER_ID)
      .then(
        () => {
          toast({
            title: "Correo enviado.",
            description: "Tu correo ha sido enviado exitosamente.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setIsLoading(false);
          onClose();
        },
        (err) => {
          console.error("FAILED...", err);
          setIsLoading(false);
          toast({
            title: "Error.",
            description: "Hubo un problema al enviar tu correo.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={["sm", "md"]}>
        <ModalOverlay />
        <ModalContent
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ModalHeader p={5} w="100%">
            <Flex
              w="100%"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              h="auto"
            >
              <Text textAlign="end" w="75%">
                ¡Recibe novedades!
              </Text>
              <MdClose size="32px" onClick={onClose} />
            </Flex>
          </ModalHeader>
          <ModalBody
            width="100%"
            p="15px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/assets/eth-pura-vida/ethpv.svg"
              alt="Logo"
              boxSize="350px"
            />
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <FormControl id="email" isRequired justifyContent="center">
                  <Flex
                    direction="row"
                    justifyContent="space-between"
                    w="100%"
                    alignItems="center"
                  >
                    <Input
                      placeholder="Correo electrónico"
                      type="email"
                      name="email"
                    />
                    <Button
                      ml={5}
                      size="sm"
                      isLoading={isLoading}
                      colorScheme="blue"
                      type="submit"
                      value="send"
                    >
                      Enviar
                    </Button>
                  </Flex>
                </FormControl>
              </form>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmailModal;
