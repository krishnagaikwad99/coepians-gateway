import { useState } from "react";
import { ArrowRight, IndianRupee, BookOpen, Clock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Course {
  title: string;
  category: string;
  duration: string;
  description: string;
  color: string;
  fee: string;
  feeDetails?: string[];
  highlights: string[];
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      title: "Class 5th to 8th",
      category: "Foundation",
      duration: "1 Year",
      description: "Build strong fundamentals in Science & Mathematics from an early age.",
      color: "from-sky-blue to-primary",
      fee: "₹15,000/year",
      highlights: [
        "Strong foundation in Science & Maths",
        "Conceptual clarity in mother tongue (Marathi)",
        "Regular tests & assessments",
        "Doubt clearing sessions"
      ]
    },
    {
      title: "Class 9th & 10th",
      category: "Foundation + Board",
      duration: "1 Year",
      description: "Excel in board exams while building a solid base for JEE, NEET & MHT-CET preparation.",
      color: "from-primary to-royal-blue",
      fee: "₹15,000/year",
      highlights: [
        "Board exam excellence",
        "Foundation for competitive exams",
        "Complete syllabus coverage",
        "Weekly tests & parent meetings"
      ]
    },
    {
      title: "Class 11th (PCM)",
      category: "JEE MAINS / MHT-CET",
      duration: "1 Year",
      description: "Intensive coaching for Physics, Chemistry & Mathematics with JEE/MHT-CET focus.",
      color: "from-gold to-gold-dark",
      fee: "₹50,000/year",
      highlights: [
        "Physics, Chemistry, Mathematics",
        "JEE Mains & MHT-CET focused",
        "Expert faculty guidance",
        "Regular mock tests"
      ]
    },
    {
      title: "Class 12th (PCM)",
      category: "JEE MAINS / MHT-CET",
      duration: "1 Year",
      description: "Master 12th concepts with board exam excellence and engineering entrance preparation.",
      color: "from-royal-blue to-navy",
      fee: "₹50,000/year",
      highlights: [
        "Complete 12th syllabus",
        "Board + Competitive preparation",
        "Previous year paper practice",
        "One-on-one doubt sessions"
      ]
    },
    {
      title: "Class 11th (PCB)",
      category: "NEET / MHT-CET",
      duration: "1 Year",
      description: "Expert-led preparation covering Physics, Chemistry, and Biology for medical aspirants.",
      color: "from-gold-dark to-gold",
      fee: "₹50,000/year",
      highlights: [
        "Physics, Chemistry, Biology",
        "NEET & MHT-CET focused",
        "Biology practical sessions",
        "NCERT based teaching"
      ]
    },
    {
      title: "Class 12th (PCB)",
      category: "NEET / MHT-CET",
      duration: "1 Year",
      description: "Comprehensive NEET preparation with complete 12th syllabus coverage.",
      color: "from-primary to-sky-blue",
      fee: "₹50,000/year",
      highlights: [
        "Complete NEET syllabus",
        "Board + NEET preparation",
        "AIIMS/JIPMER pattern practice",
        "Expert biology faculty"
      ]
    },
    {
      title: "Class 11th (PCMB)",
      category: "Double Group",
      duration: "1 Year",
      description: "For students keeping both Engineering & Medical options open with all four subjects.",
      color: "from-sky-blue to-royal-blue",
      fee: "₹60,000/year",
      highlights: [
        "Physics, Chemistry, Maths & Biology",
        "JEE + NEET preparation",
        "Maximum career flexibility",
        "Integrated schedule"
      ]
    },
    {
      title: "Class 12th (PCMB)",
      category: "Double Group",
      duration: "1 Year",
      description: "Complete preparation for both Engineering & Medical entrance exams.",
      color: "from-navy to-primary",
      fee: "₹60,000/year",
      highlights: [
        "All four subjects covered",
        "JEE + NEET + MHT-CET",
        "Flexible career options",
        "Intensive coaching"
      ]
    }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Course Header */}
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />

              <div className="p-5">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full mb-3">
                  {course.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                {/* Fee Badge */}
                <div className="flex items-center gap-1 text-primary font-semibold mb-3">
                  <IndianRupee className="w-4 h-4" />
                  <span className="text-sm">{course.fee}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  onClick={() => setSelectedCourse(course)}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Dialog */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className={`h-2 bg-gradient-to-r ${selectedCourse?.color} -mx-6 -mt-6 mb-4 rounded-t-lg`} />
            <DialogTitle className="text-xl">{selectedCourse?.title}</DialogTitle>
            <DialogDescription>{selectedCourse?.category}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Fee */}
            <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
              <IndianRupee className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Course Fee</p>
                <p className="text-lg font-bold text-primary">{selectedCourse?.fee}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{selectedCourse?.duration}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <p className="font-semibold">Course Highlights</p>
              </div>
              <ul className="space-y-2 pl-7">
                {selectedCourse?.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground border-t pt-4">
              {selectedCourse?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Courses;