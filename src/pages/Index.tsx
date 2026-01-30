import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Inspiration from "@/components/Inspiration";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
import Achievements from "@/components/Achievements";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Inspiration />
      <Courses />
      <WhyUs />
      <Achievements />
      <Faculty />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
