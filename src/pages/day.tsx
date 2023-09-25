import BackgroundWrapper from "@/components/BackgroundWrapper";
import Nav from "@/components/Nav";
import Speakers from "@/components/eth-cr-day/speakers/Speakers";
// import Banner from "@/components/eth-cr-day/banner";
export default function EthCrDay() {
  return (
    <BackgroundWrapper>
      <Nav />
      <Speakers />
      {/* <Banner /> */}
    </BackgroundWrapper>
  );
}
