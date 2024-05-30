import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";
import theme from "@/theme";
import nextI18Config from "../../next-i18next.config";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default appWithTranslation(app);
