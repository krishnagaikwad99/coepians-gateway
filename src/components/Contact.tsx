import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your Journey <span className="text-primary">Today</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Take the first step towards your dream. Contact us for admissions, course details, or any queries. Our team is here to guide you.
          </p>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="font-semibold text-foreground">+91 98819 03805</p>
                <p className="text-sm text-muted-foreground">+91 88061 85646</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email Us</p>
                <p className="font-semibold text-foreground text-sm">coepiansacademy111@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Visit Us</p>
                <p className="font-semibold text-foreground text-sm">In front of Bus Stand, Above Agarwal Sweets</p>
                <p className="text-xs text-muted-foreground">Lonand, Taluka Khandala, District Satara</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Operating Hours</p>
                <p className="font-semibold text-foreground">9:00 AM - 4:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
