import { BookOpen, Brain, Users, TrendingUp, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Teaching in Simple Marathi",
      description: "Concepts are explained in a way students naturally understand, making learning stress-free and effective.",
    },
    {
      icon: Brain,
      title: "Strong Concept Clarity",
      description: "Focus on fundamentals to build a strong academic foundation.",
    },
    {
      icon: Users,
      title: "Student-Centric Approach",
      description: "Every student gets personal attention and doubt-clearing support.",
    },
    {
      icon: TrendingUp,
      title: "Step-by-Step Learning",
      description: "Topics are taught gradually, from basics to advanced levels.",
    },
    {
      icon: Target,
      title: "Result-Oriented Preparation",
      description: "Structured guidance to help students achieve academic success.",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-secondary text-primary font-medium rounded-full text-sm mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Makes Us <span className="text-primary">Different?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Er. COEPian's ACADEMY, we believe that true learning happens when concepts are understood deeply, not memorized.
            </p>

            {/* Highlighted Marathi Text */}
            <div className="my-8 p-6 bg-gradient-to-r from-gold/20 to-gold/5 rounded-2xl border-l-4 border-gold">
              <p className="text-2xl md:text-3xl font-bold text-gold-dark font-cursive">
                शिका आपल्या मातृभाषेत
              </p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                Learn in your mother tongue
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide quality education in easy and understandable Marathi, so students can grasp even complex concepts with clarity and confidence.
            </p>
          </div>

          {/* Right Content - Features Grid */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
