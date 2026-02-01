import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Priya Sharma",
    role: "IIT Delhi, CSE",
    content: "Er. COEPian's ACADEMY transformed my preparation journey. The faculty's dedication and the structured approach helped me achieve AIR 156 in JEE Advanced.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  }, {
    name: "Rahul Verma",
    role: "AIIMS Delhi",
    content: "The NEET preparation here is unmatched. Regular tests, personalized feedback, and amazing teachers made my dream of becoming a doctor possible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  }, {
    name: "Ananya Patel",
    role: "IIT Bombay, ECE",
    content: "What sets Er. COEPian's ACADEMY apart is their genuine care for students. Beyond academics, they helped me develop problem-solving skills that will last a lifetime.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }];
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
            Student Success
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our successful students who achieved their dreams with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-3 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;