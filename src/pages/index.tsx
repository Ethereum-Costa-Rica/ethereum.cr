import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <div>
      <NavBar />
    </div>
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
