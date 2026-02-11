import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";
import CampusTour from "./CampusTour";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundPosition: 'center 45%'
    }}>
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-sky-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1.5s"
    }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Welcome to Excellence in Education
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>Er. COEPian's Academy</h1>

          {/* Cursive Tagline - Tilted */}
          <p className="text-xl md:text-3xl lg:text-4xl font-cursive text-gold mb-6 animate-fade-in-up" style={{
          animationDelay: "0.4s",
          transform: "rotate(-3deg)",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
        }}>
            "The gateway of dreams"
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8 animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            Unlock your potential with world-class education. Join thousands of successful students who transformed their dreams into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <Popover>
              <PopoverTrigger asChild>
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 text-base">
                  Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-3 flex flex-col gap-2">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoXHAmzlRp0M0DcPh-uUIJwZwsgv9y-nbpBvCz_At93t0vzQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start text-sm">
                    5th to 10th Foundation Batch
                  </Button>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd27aEWO9795P7apaBpW-Ln0EGBswNGNKYjpTvfcV4GCIk9PA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start text-sm">
                    11th and 12th
                  </Button>
                </a>
              </PopoverContent>
            </Popover>
            <CampusTour variant="hero" />
          </div>
        </div>
      </div>

      {/* Watermark Logo */}
      <div className="absolute bottom-8 right-8 opacity-60 hidden md:block">
        <img 
          src={logo} 
          alt="" 
          className="h-24 lg:h-32 w-auto object-contain rounded-lg"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;