import BackgroundWrapperDay from "@/components/BackgroundWrapperDay";
import Nav from "@/components/Nav";
import Speakers from "@/components/eth-cr-day/speakers/Speakers";
import BannerDay from "@/components/eth-cr-day/BannerDay";
import Community from "@/components/eth-cr-day/Community";
import Timeline from "@/components/Timeline";
import Space from "@/components/eth-cr-day/Space";
import Sponsors from "@/components/eth-cr-day/Sponsors";
import Footer from "@/components/Footer";
import Bot from "@/components/Bot";

export default function EthCrDay() {
  return (
    <div>
      <Bot />
      <BackgroundWrapperDay>
        <Nav />
      </BackgroundWrapperDay>
      <BannerDay />
      <Community />
      <Speakers />
      <Timeline />
      <Space />
      <Sponsors />
      <Footer />
    </div>
  );
};
