import Cover from "@/components/events/cover";
import NextEvents from "@/components/events/next-events";
import NavBar from "@/components/nav-bar";
import { Flex, useTheme } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Events = () => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      w={theme.spacing.mobile.width}
      justifyContent="space-between"
      h="auto"
      alignItems="center"
    >
      <NavBar black={true} />
      <Cover />
      {/* <NextEvents /> */}
    </Flex>
  );
};

export default Events;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
