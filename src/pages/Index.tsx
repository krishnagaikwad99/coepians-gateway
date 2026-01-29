import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
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
      <Courses />
      <WhyUs />
      <Faculty />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
