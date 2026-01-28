import { BookOpen, Users, Award, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Industry-aligned courses designed to prepare you for real-world challenges.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from experienced professionals who guide you every step of the way.",
    },
    {
      icon: Award,
      title: "Recognized Excellence",
      description: "Our graduates are recognized by top institutions and employers worldwide.",
    },
    {
      icon: Target,
      title: "Career Focused",
      description: "Programs designed with clear career pathways and placement support.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-secondary text-primary font-medium rounded-full text-sm mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Shaping Future Leaders Since{" "}
              <span className="text-primary">2009</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Coepians Academy, we believe in nurturing talent and transforming dreams into reality. Our holistic approach to education combines academic excellence with practical skills, preparing students for the challenges of tomorrow.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With state-of-the-art facilities and a dedicated team of educators, we create an environment where learning knows no bounds and every student finds their path to success.
            </p>

            {/* Mission Statement */}
            <div className="p-6 bg-secondary/50 rounded-xl border-l-4 border-primary">
              <p className="text-foreground italic font-medium">
                "Our mission is to empower students with knowledge, skills, and values that transform them into responsible global citizens."
              </p>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
