import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.jpg";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            {/* Logo in White Box */}
            <div className="mb-6 p-3 bg-white rounded-lg w-fit">
              <img src={logo} alt="Er. COEPian's ACADEMY - Strength, Truth, Endurance" className="h-14 w-auto object-contain block" />
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">Empowering students with knowledge, skills, and values.
Join us to transform your dreams into reality.</p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[{
              Icon: Facebook,
              href: "#"
            }, {
              Icon: Twitter,
              href: "#"
            }, {
              Icon: Instagram,
              href: "https://www.instagram.com/coepians_academy_?utm_source=qr&igsh=YXRxd3pzeHo2NTJv"
            }, {
              Icon: Linkedin,
              href: "#"
            }, {
              Icon: Youtube,
              href: "#"
            }].map((social, index) => <button key={index} onClick={() => {
              if (social.href !== "#") {
                window.open(social.href, "_blank", "noopener,noreferrer");
              }
            }} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                  <social.Icon className="w-5 h-5" />
                </button>)}
            </div>
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
            <p className="text-primary-foreground/60 text-sm">© 2024 Er. COEPian's Academy. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-gold transition-colors">© 2026 Er. COEPian's Academy. All rights reserved.</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center z-50">
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>;
};
export default Footer;