import { useState } from "react";
import { Flex, Input, Button, Text, useToast } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import emailjs from "emailjs-com";

import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID,
} from "@/constants/email";

const Mailing = () => {
  const { t, ready } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const templateParams = {
    user_email: email,
  };

  const toast = useToast();
  const sendEmail = () => {
    setIsLoading(true);
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
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!ready) return null;

  return (
  <Flex direction="column" gap="1.25em">
      <Text variant="h1-semibold">{t("footer.keepInTouch")}</Text>
      <Text variant="normal-text-regular">
        {t("footer.subscribeForUpdates")}
      </Text>
      <Input
        bg="white"
        placeholder={t("footer.yourEmailPlaceholder")}
        h="3.375em"
        fontWeight={400}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Flex direction="row" wrap="wrap" columnGap="0.625em" rowGap="0.5em" alignItems="center">
        <Text variant="small-text-light">*{t("footer.consent")}</Text>
        <Button
          variant="outlined"
          onClick={sendEmail}
          isLoading={isLoading}
          size="sm"
          minW="7.9375em"
        >
          {t("footer.subscribe")}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Mailing;
