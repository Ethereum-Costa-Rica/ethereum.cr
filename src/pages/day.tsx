import BackgroundWrapper from "@/components/BackgroundWrapper";
import Nav from "@/components/Nav";
import Speakers from "@/components/eth-cr-day/speakers/Speakers";
// import Banner from "@/components/eth-cr-day/banner";
import Community from "@/components/eth-cr-day/Community";
import Sponsors from "@/components/eth-cr-day/Sponsors";

export default function EthCrDay() {
  return (
    <BackgroundWrapper>
      <Nav />
      {/* <Banner /> */}
      <Community />
      <Speakers />
      <Sponsors />
    </BackgroundWrapper>
  );
}
