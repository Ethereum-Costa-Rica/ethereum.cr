import Cover from "@/components/events/cover";
import NextEvents from "@/components/events/next-events";
import NavBar from "@/components/nav-bar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Events = () => {
  return (
    <div>
      <NavBar />
      <Cover />
      <NextEvents />
    </div>
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
