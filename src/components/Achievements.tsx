import { Trophy, Award, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import result images
import results2024_25 from "@/assets/results/results-2024-25.jpg";
import results2024_25_2 from "@/assets/results/results-2024-25-2.jpg";
import results2023_24 from "@/assets/results/results-2023-24.jpg";
import resultsICT from "@/assets/results/results-ict-2023-24.jpg";
import resultsSPCE from "@/assets/results/results-spce-2023-24.jpg";
import toppersHSC from "@/assets/results/toppers-hsc.jpg";
import toppers2024 from "@/assets/results/toppers-2024.jpg";
import newspaperFeature from "@/assets/results/newspaper-feature.jpg";
import stalwarts from "@/assets/results/stalwarts.jpg";

const resultImages = [
  { src: results2024_25, title: "Academic Results 2024-25", description: "COEP, SPCE & GCEK Selections" },
  { src: results2024_25_2, title: "Results 2024-25", description: "More selections in top colleges" },
  { src: toppers2024, title: "Toppers 2024", description: "PCM, PCB & Nursing CET toppers" },
  { src: results2023_24, title: "COEP Selection 2023-24", description: "Students admitted to COEP" },
  { src: resultsICT, title: "ICT Mumbai 2023-24", description: "5 students in ICT Mumbai" },
  { src: resultsSPCE, title: "SPCE Mumbai 2023-24", description: "Government college selections" },
  { src: toppersHSC, title: "HSC Toppers", description: "99.47% in PCM, 99.35% in PCB" },
  { src: newspaperFeature, title: "Media Coverage", description: "Featured in Adhunik Kesari newspaper" },
  { src: stalwarts, title: "Our Stalwarts", description: "Pride of Coepian's Academy" },
];

const stats = [
  { icon: Trophy, value: "99.47%", label: "Highest in PCM" },
  { icon: Award, value: "99.35%", label: "Highest in PCB" },
  { icon: GraduationCap, value: "50+", label: "COEP Selections" },
  { icon: Trophy, value: "5+", label: "ICT Mumbai" },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resultImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resultImages.length) % resultImages.length);
  };

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Our Pride
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Student <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our students consistently excel in JEE, NEET, MHT-CET and secure admissions in top institutes like COEP, ICT Mumbai, SPCE, and more.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Results Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border bg-card">
            <div className="aspect-[4/3] relative">
              <img
                src={resultImages[currentIndex].src}
                alt={resultImages[currentIndex].title}
                className="w-full h-full object-contain bg-white"
              />
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-1">{resultImages[currentIndex].title}</h3>
              <p className="text-white/80 text-sm">{resultImages[currentIndex].description}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {resultImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* College Logos / Names */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Our students are studying at</p>
          <div className="flex flex-wrap justify-center gap-8 text-foreground/70">
            {["COEP Pune", "ICT Mumbai", "SPCE Mumbai", "GCEK Karad", "BVCOEW"].map((college) => (
              <div
                key={college}
                className="px-6 py-3 bg-card rounded-full border border-border text-sm font-medium"
              >
                {college}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
