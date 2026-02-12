import { CheckCircle2, TrendingUp, Shield, Lightbulb, HeartHandshake, Eye, Target, Sprout, Users } from "lucide-react";

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
      icon: CheckCircle2,
      title: "Complete Support",
      description: "From admission guidance to career counseling, we're with you always.",
    },
  ];

  const visionPoints = [
    "Empower students from farmer families through quality education",
    "Enable students to rise above limitations and achieve higher goals",
    "Build confident, self-reliant contributors to society",
  ];

  const missionPoints = [
    {
      icon: Sprout,
      text: "Provide accessible, affordable, and quality education to students from farming backgrounds",
    },
    {
      icon: Target,
      text: "Nurture academic excellence, life skills, and self-confidence among rural students",
    },
    {
      icon: Users,
      text: "Guide students toward higher education and career opportunities through mentorship",
    },
    {
      icon: Lightbulb,
      text: "Create an environment where students can dream big and break socio-economic barriers",
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
        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="p-8 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/20 text-gold flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <span className="text-gold text-sm font-medium">Our</span>
                <h3 className="text-2xl font-bold text-primary-foreground">Vision / दृष्टिकोन</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              To empower students from farmer families through quality education, enabling them to rise above limitations, achieve higher goals in life, and become confident, self-reliant contributors to society.
            </p>
            <ul className="space-y-3">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Card */}
          <div className="p-8 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/20 text-gold flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-gold text-sm font-medium">Our</span>
                <h3 className="text-2xl font-bold text-primary-foreground">Mission / ध्येय</h3>
              </div>
            </div>
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <point.icon className="w-4 h-4" />
                  </div>
                  <span className="text-primary-foreground/90 text-sm leading-relaxed">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Existing Why Choose Us Content */}
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
              At Er. COEPian's ACADEMY, we don't just teach – we inspire. Our unique approach combines academic rigor with holistic development, ensuring every student reaches their full potential.
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
