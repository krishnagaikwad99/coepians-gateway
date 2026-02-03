import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundPosition: 'center 30%'
    }}>
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-6 py-5 text-base shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-5 text-base">
              <Play className="mr-2 w-5 h-5" />
              Watch Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Watermark Logo */}
      <div className="absolute bottom-8 right-8 opacity-20 hidden md:block">
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