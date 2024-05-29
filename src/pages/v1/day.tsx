import BackgroundWrapperDay from "@/components/v1/BackgroundWrapperDay";
import Nav from "@/components/Nav";
import Speakers from "@/components/v1/eth-cr-day/speakers/Speakers";
import BannerDay from "@/components/v1/eth-cr-day/BannerDay";
import Community from "@/components/v1/eth-cr-day/Community";
import Timeline from "@/components/Timeline";
import Space from "@/components/v1/eth-cr-day/Space";
import Sponsors from "@/components/v1/eth-cr-day/Sponsors";
import Footer from "@/components/Footer";
import Bot from "@/components/Bot";
import { Box } from "@chakra-ui/react";

export default function EthCrDay() {
  return (
    <Box>
      <Bot />
      <BackgroundWrapperDay>
        <Nav />
        <BannerDay />
      </BackgroundWrapperDay>
      <Community />
      <Speakers />
      <Timeline />
      <Space />
      <Sponsors />
      <Footer />
    </Box>
  );
}
