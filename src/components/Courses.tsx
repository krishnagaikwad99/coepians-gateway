import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "Class 9th",
      category: "Foundation",
      duration: "1 Year",
      students: "400+",
      rating: "4.9",
      description: "Build strong fundamentals in Science & Mathematics to prepare for competitive exams ahead.",
      color: "from-sky-blue to-primary",
    },
    {
      title: "Class 10th",
      category: "Board + Foundation",
      duration: "1 Year",
      students: "500+",
      rating: "4.9",
      description: "Excel in board exams while building a solid base for JEE, NEET & MHT-CET preparation.",
      color: "from-primary to-royal-blue",
    },
    {
      title: "Class 11th",
      category: "JEE / NEET / MHT-CET",
      duration: "1 Year",
      students: "800+",
      rating: "4.8",
      description: "Intensive coaching covering complete 11th syllabus with competitive exam focus.",
      color: "from-gold to-gold-dark",
    },
    {
      title: "Class 12th",
      category: "JEE / NEET / MHT-CET",
      duration: "1 Year",
      students: "1000+",
      rating: "4.9",
      description: "Master 12th concepts with board exam excellence and entrance exam preparation.",
      color: "from-royal-blue to-navy",
    },
    {
      title: "JEE Main & Advanced",
      category: "Engineering",
      duration: "2 Years",
      students: "1200+",
      rating: "4.9",
      description: "Comprehensive IIT-JEE preparation with expert faculty and proven methodology.",
      color: "from-primary to-sky-blue",
    },
    {
      title: "NEET-UG",
      category: "Medical",
      duration: "2 Years",
      students: "900+",
      rating: "4.8",
      description: "Expert-led NEET preparation covering Physics, Chemistry, and Biology in depth.",
      color: "from-gold-dark to-gold",
    },
    {
      title: "MHT-CET",
      category: "Engineering & Pharmacy",
      duration: "1 Year",
      students: "1500+",
      rating: "4.9",
      description: "Focused MHT-CET coaching for admission to top Maharashtra engineering & pharmacy colleges.",
      color: "from-sky-blue to-royal-blue",
    },
    {
      title: "Crash Course",
      category: "Quick Revision",
      duration: "3 Months",
      students: "2000+",
      rating: "4.7",
      description: "Intensive revision program for JEE, NEET & MHT-CET appearing students.",
      color: "from-navy to-primary",
    },
  ];

  return (
    <section id="courses" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover programs tailored to your aspirations. From foundation to advanced, we have the right course for every student.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Course Header */}
              <div className={`h-3 bg-gradient-to-r ${course.color}`} />
              
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full mb-4">
                  {course.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    {course.rating}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
