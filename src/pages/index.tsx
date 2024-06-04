import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Contributors from "@/components/Contributors";
import Footer from "@/components/Footer";
import EmailModal from "@/components/EmailModal";
import Nav from "@/components/Nav";
import Bot from "@/components/Bot"

export default function Home() {
  return (
    <div>
      <EmailModal />
      <Bot />
      <Nav />
      <Hero />
      <Body />
      <Contributors />
      <Footer />
    </div>
  );
}
