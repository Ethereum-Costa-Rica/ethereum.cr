import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NavBar from "@/components/nav-bar";
import MailingList from "@/components/mailing-list";
import { Flex } from "@chakra-ui/react";
import Hero from "@/components/hero/index";

export default function Home() {
  return (
    <Flex h="auto" direction="column" justifyContent="space-between">
      <NavBar />
      <Hero />
      <MailingList />
    </Flex>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
