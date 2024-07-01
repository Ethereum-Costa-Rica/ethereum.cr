import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Flex } from "@chakra-ui/react";
import Hero from "@/components/hero/index";
import HomeContent from "@/components/home-content/index";

export default function Home() {
  return (
    <Flex h="auto" direction="column" justifyContent="space-between">
      <NavBar />
      <Hero />
      <HomeContent />
      <Footer />
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
