import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "Engineering Entrance",
      category: "JEE Main & Advanced",
      duration: "2 Years",
      students: "1200+",
      rating: "4.9",
      description: "Comprehensive preparation for IIT-JEE with experienced faculty and proven methodology.",
      color: "from-primary to-royal-blue",
    },
    {
      title: "Medical Entrance",
      category: "NEET-UG",
      duration: "2 Years",
      students: "800+",
      rating: "4.8",
      description: "Expert-led NEET preparation covering Physics, Chemistry, and Biology in depth.",
      color: "from-sky-blue to-primary",
    },
    {
      title: "Foundation Course",
      category: "Class 8-10",
      duration: "1 Year",
      students: "500+",
      rating: "4.9",
      description: "Build strong fundamentals for future competitive exam success from an early age.",
      color: "from-gold to-gold-dark",
    },
    {
      title: "Crash Course",
      category: "Quick Revision",
      duration: "3 Months",
      students: "2000+",
      rating: "4.7",
      description: "Intensive revision program for students appearing in upcoming entrance exams.",
      color: "from-royal-blue to-navy",
    },
    {
      title: "Olympiad Training",
      category: "Science & Math",
      duration: "6 Months",
      students: "300+",
      rating: "4.9",
      description: "Specialized training for national and international Olympiad competitions.",
      color: "from-primary to-sky-blue",
    },
    {
      title: "Doubt Clearing",
      category: "All Subjects",
      duration: "Flexible",
      students: "3000+",
      rating: "4.8",
      description: "One-on-one sessions to clarify concepts and solve specific problems.",
      color: "from-gold-dark to-gold",
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
