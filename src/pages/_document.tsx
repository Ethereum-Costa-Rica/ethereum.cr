import { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../../next-i18next.config";

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="icon" href="/ethcr-icon.svg" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
