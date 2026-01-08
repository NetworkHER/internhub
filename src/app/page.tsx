import { Navbar } from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import HowItWorks from "./components/howItWorks";
import Roles from "./components/roles";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Join from "./components/join";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        {/* Hero Section */}
        <Hero />
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        {/* About Section */}
        <About />
        {/* How It Works Section */}
        <HowItWorks />
        <Join />
        {/* Roles Section */}
        <Roles />
        {/* FAQ Section */}
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
