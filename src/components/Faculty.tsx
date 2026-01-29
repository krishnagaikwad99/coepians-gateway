import { GraduationCap } from "lucide-react";

const facultyMembers = [
  {
    name: "Amit Sonawane",
    subject: "Chemistry",
    qualification: "BTech, Metallurgy & Material Science Engineering",
    college: "COEP",
    initial: "AS",
    color: "from-sky-blue to-royal-blue",
  },
  {
    name: "Shubham Khadase",
    subject: "Mathematics",
    qualification: "BTech, Civil Engineering",
    college: "COEP",
    initial: "SK",
    color: "from-royal-blue to-navy",
  },
  {
    name: "Vaibhav Thakare",
    subject: "Physics",
    qualification: "BTech, Metallurgy & Material Science Engineering",
    college: "COEP",
    initial: "VT",
    color: "from-navy to-royal-blue",
  },
  {
    name: "Neha Tulse",
    subject: "Biology",
    qualification: "MSc, Microbiology",
    college: "",
    initial: "NT",
    color: "from-gold to-gold-dark",
  },
  {
    name: "Kishore Kshirsagar",
    subject: "English",
    qualification: "MA, English",
    college: "",
    initial: "KK",
    color: "from-sky-blue to-light-blue",
  },
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Faculty</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from the best minds — our faculty comprises alumni from premier institutions 
            with a passion for nurturing future leaders.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {facultyMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                {member.initial}
              </div>

              {/* Subject Badge */}
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                {member.subject}
              </span>

              {/* Name */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>

              {/* Qualification */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.qualification}
              </p>
              
              {/* College */}
              {member.college && (
                <div className="mt-3 flex items-center justify-center gap-1 text-xs text-primary font-medium">
                  <GraduationCap className="w-3 h-3" />
                  <span>{member.college}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
