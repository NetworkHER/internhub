import Image from "next/image";
import { Navbar } from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import HowItWorks from "./components/howItWorks";
import Roles from "./components/roles";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";

export default function Home() {
  const handleNavigate = (page: string) => {
    // replace with your navigation logic
    console.log("Navigate to", page);
  };

  return (
    <div className="">
      <Navbar />
      <div className="mt-18">
        {/* Hero Section */}
        <Hero />
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
 {/* About Section */}
        <About />
        {/* How It Works Section */}
        <HowItWorks />
        {/* Roles Section */}
        <Roles />
        {/* FAQ Section */}
        <FAQ />
        
       
      </div>
      <Footer />
    </div>
  );
}
