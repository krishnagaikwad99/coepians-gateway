import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Coepian's Academy - Strength, Truth, Endurance" 
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
              Empowering students with knowledge, skills, and values since 2009. Join us to transform your dreams into reality.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Courses", "Faculty", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {["Class 9th & 10th", "Class 11th & 12th", "JEE Main & Advanced", "NEET-UG", "MHT-CET", "Crash Course"].map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-200"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>In front of Bus Stand,</li>
              <li>Above Agarwal Sweets, Lonand</li>
              <li>Taluka Khandala, Dist. Satara</li>
              <li className="pt-2">
                <span className="text-gold">Phone:</span> +91 98819 03805
              </li>
              <li>
                <span className="text-gold">Alt:</span> +91 88061 85646
              </li>
              <li>
                <span className="text-gold">Email:</span> coepiansacademy111@gmail.com
              </li>
              <li className="pt-2">
                <span className="text-gold">Hours:</span> Mon - Sat: 9AM - 4:30PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Coepians Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
