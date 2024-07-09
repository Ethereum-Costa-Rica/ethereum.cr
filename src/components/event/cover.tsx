import {
  theme,
  Box,
  useTheme,
  Flex,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MdArrowForward } from "react-icons/md";

type CoverProps = {
  coverGraphicUrl: string;
};

const Cover = ({ coverGraphicUrl }: CoverProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  console.log(coverGraphicUrl);

  return (
    <Flex
      padding={theme.spacing.mobile.paddingX}
      direction="column"
      justifyContent="center"
      w={theme.spacing.mobile.width}
      h="100vh"
      alignItems="center"
    >
      <Flex direction="column" mt="40px" mb="10px">
        <Image
          src={`/assets/${coverGraphicUrl}`}
          width={350}
          height={616}
          alt="ETH Pura Vida Hero"
        />
      </Flex>
      <Button mt="4px" variant="eth-pura-vida-yellow" w="100%">
        <Text as="span">{t("ethPuraVida.buyTickets")}</Text>
        <Icon w="24px" h="24px" as={MdArrowForward} ml="10px" />
      </Button>
    </Flex>
  );
};

export default Cover;
