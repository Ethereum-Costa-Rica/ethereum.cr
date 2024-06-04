import NavBar from "@/components/nav-bar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Events = () => {
  return (
    <div>
      <NavBar />
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
