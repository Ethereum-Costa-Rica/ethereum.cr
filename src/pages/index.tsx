import Banner from "@/components/eth-cr-day/banner";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Bot from "@/components/Bot"

export default function Home() {
  return (
    <div>
      <Bot />
      <Nav />
      <Banner />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}
