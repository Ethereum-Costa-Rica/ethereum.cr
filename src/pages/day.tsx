import BackgroundWrapper from "@/components/BackgroundWrapper";
import Nav from "@/components/Nav";
import Speakers from "@/components/eth-cr-day/speakers/Speakers";
import BannerDay from "@/components/eth-cr-day/BannerDay";
import Community from "@/components/eth-cr-day/Community";
import Sponsors from "@/components/eth-cr-day/Sponsors";
import Footer from "@/components/Footer";

export default function EthCrDay() {
  return (
    <BackgroundWrapper>
      <Nav />
      <BannerDay />
      <Community />
      <Speakers />
      <Sponsors />
      <Footer />
    </BackgroundWrapper>
  );
}
