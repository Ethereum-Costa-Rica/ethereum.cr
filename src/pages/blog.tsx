import NavBarMobile from "@/components/navbar/nav-bar-mobile";
import { ETH_CR_LOGO, WHITE_BG_COLOR } from "@/constants/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blog = () => {
  return (
    <div>
      <NavBarMobile
        baseBgColor={WHITE_BG_COLOR}
        extendedBgColor={WHITE_BG_COLOR}
        baseLogo={ETH_CR_LOGO}
        extendedLogo={ETH_CR_LOGO}
        baseMenuLogoColor="black"
        extendedMenuLogoColor="black"
      />
    </div>
  );
};

export default Blog;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
