import Banner from "@/components/eth-cr-day/banner";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}
