import { CheckCircle2, TrendingUp, Shield, Lightbulb, HeartHandshake, Clock } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "95% of our students secure admission in top institutions every year.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous curriculum designed and reviewed by industry experts.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Teaching",
      description: "Modern pedagogy with smart classrooms and interactive learning.",
    },
    {
      icon: HeartHandshake,
      title: "Personal Attention",
      description: "Small batch sizes ensuring individual focus on every student.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple batches and timing options to suit your convenience.",
    },
    {
      icon: CheckCircle2,
      title: "Complete Support",
      description: "From admission guidance to career counseling, we're with you always.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground font-medium rounded-full text-sm mb-6 border border-primary-foreground/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Education That Makes a{" "}
              <span className="text-gold">Difference</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              At Coepians Academy, we don't just teach – we inspire. Our unique approach combines academic rigor with holistic development, ensuring every student reaches their full potential.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4">
              {[
                "State-of-the-art infrastructure",
                "24/7 doubt resolution support",
                "Regular parent-teacher interactions",
                "Comprehensive study materials",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/20 text-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
