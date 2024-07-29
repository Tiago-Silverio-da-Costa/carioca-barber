import About from "@/components/about";
import Barbers from "@/components/barbers";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Services from "@/components/services";

export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Barbers />
      <Footer />
    </>
  );
}
