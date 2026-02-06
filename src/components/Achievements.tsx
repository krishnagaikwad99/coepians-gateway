import { Trophy, Award, GraduationCap, ChevronLeft, ChevronRight, Building2, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

// Import student images - COEP
import coepPrerana from "@/assets/students/coep-prerana-gosavi.jpg";
import coepMayur from "@/assets/students/coep-mayur-chavan.jpg";
import coepMinal from "@/assets/students/coep-minal-rathod.jpg";
import coepShivanjali from "@/assets/students/coep-shivanjali-shinde.jpg";
import coepShreyash from "@/assets/students/coep-shreyash-shelke.jpg";
import coepSharayu from "@/assets/students/coep-sharayu-sonawane.jpg";

// Import student images - ICT
import ictVaishnavi from "@/assets/students/ict-vaishnavi-thombre.jpg";
import ictPrachi from "@/assets/students/ict-prachi-masal.jpg";
import ictPragati from "@/assets/students/ict-pragati-gaikwad.jpg";
import ictAnushka from "@/assets/students/ict-anushka-ghodake.jpg";
import ictSai from "@/assets/students/ict-sai-anpat.jpg";
import ictAnkita from "@/assets/students/ict-ankita-shinde.jpg";

// Import student images - SPCE
import spceSneha from "@/assets/students/spce-sneha-vagare.jpg";
import spceAditi from "@/assets/students/spce-aditi-jagtap.jpg";
import spcePranali from "@/assets/students/spce-pranali-dhumal.jpg";
import spceTejashree from "@/assets/students/spce-tejashree-dhaigude.jpg";

// Import student images - GCEK
import gcekNikhil from "@/assets/students/gcek-nikhil-kokare.jpg";
import gcekSharmin from "@/assets/students/gcek-sharmin-kazi.jpg";
import gcekSrushti from "@/assets/students/gcek-srushti-shaha.jpg";
import gcekVaishnavi from "@/assets/students/gcek-vaishnavi-mane.jpg";
import gcekAnushka from "@/assets/students/gcek-anushka-dhaware.jpg";
import gcekPriti from "@/assets/students/gcek-priti-shelke.jpg";
import spceAmruta from "@/assets/students/spce-amruta-kshirsagar.jpg";

// Import student images - GCAK (Gov. College of Agri. Kolhapur)
import gcakShamika from "@/assets/students/gcak-shamika-mahamuni.jpg";

// Import student images - BVCOEW
import bvcoewJanhavi from "@/assets/students/bvcoew-janhavi-mahanavar.jpg";

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

interface Student {
  name: string;
  image: string;
}

interface CollegeData {
  name: string;
  fullName: string;
  students: Student[];
}

const collegeStudents: Record<string, CollegeData> = {
  coep: {
    name: "COEP",
    fullName: "College of Engineering, Pune",
    students: [
      { name: "Prerana Gosavi", image: coepPrerana },
      { name: "Mayur Chavan", image: coepMayur },
      { name: "Minal Rathod", image: coepMinal },
      { name: "Shivanjali Shinde", image: coepShivanjali },
      { name: "Shreyash Shelke", image: coepShreyash },
      { name: "Sharayu Sonawane", image: coepSharayu },
    ],
  },
  ict: {
    name: "ICT Mumbai",
    fullName: "Institute of Chemical Technology, Mumbai",
    students: [
      { name: "Vaishnavi Thombre", image: ictVaishnavi },
      { name: "Prachi Masal", image: ictPrachi },
      { name: "Pragati Gaikwad", image: ictPragati },
      { name: "Anushka Ghodake", image: ictAnushka },
      { name: "Sai Anpat", image: ictSai },
      { name: "Ankita Shinde", image: ictAnkita },
    ],
  },
  spce: {
    name: "SPCE Mumbai",
    fullName: "Sardar Patel College of Engineering, Mumbai",
    students: [
      { name: "Sneha Vagare", image: spceSneha },
      { name: "Aditi Jagtap", image: spceAditi },
      { name: "Pranali Dhumal", image: spcePranali },
      { name: "Amruta Kshirsagar", image: spceAmruta },
      { name: "Tejashree Dhaigude", image: spceTejashree },
    ],
  },
  gcek: {
    name: "GCEK Karad",
    fullName: "Government College of Engineering, Karad",
    students: [
      { name: "Nikhil Kokare", image: gcekNikhil },
      { name: "Sharmin Kazi", image: gcekSharmin },
      { name: "Srushti Shaha", image: gcekSrushti },
      { name: "Vaishnavi Mane", image: gcekVaishnavi },
      { name: "Anushka Dhaware", image: gcekAnushka },
      { name: "Priti Shelke", image: gcekPriti },
    ],
  },
  gcak: {
    name: "GCAK Kolhapur",
    fullName: "Government College of Agriculture, Kolhapur",
    students: [
      { name: "Shamika Mahamuni", image: gcakShamika },
    ],
  },
  bvcoew: {
    name: "BVCOEW",
    fullName: "Bharati Vidyapeeth College of Engineering for Women",
    students: [
      { name: "Janhavi Mahanavar", image: bvcoewJanhavi },
    ],
  },
};

interface Stat {
  icon: typeof Trophy;
  value: string;
  label: string;
  collegeKey?: string;
}

const stats: Stat[] = [
  { icon: Trophy, value: "99.47%", label: "Highest in PCM" },
  { icon: Award, value: "99.35%", label: "Highest in PCB" },
  { icon: GraduationCap, value: "6+", label: "COEP Selections", collegeKey: "coep" },
  { icon: Trophy, value: "6+", label: "ICT Mumbai", collegeKey: "ict" },
  { icon: Building2, value: "5+", label: "SPCE Mumbai", collegeKey: "spce" },
  { icon: GraduationCap, value: "6+", label: "GCEK Karad", collegeKey: "gcek" },
  { icon: Award, value: "1+", label: "GCAK Kolhapur", collegeKey: "gcak" },
  { icon: Building2, value: "1+", label: "BVCOEW", collegeKey: "bvcoew" },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resultImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resultImages.length) % resultImages.length);
  };

  const handleStatClick = (collegeKey?: string) => {
    if (collegeKey) {
      setSelectedCollege(collegeKey);
    }
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => handleStatClick(stat.collegeKey)}
              className={`bg-card rounded-2xl p-5 md:p-6 text-center shadow-sm border border-border transition-all duration-300 ${
                stat.collegeKey
                  ? "hover:border-primary/50 hover:shadow-lg cursor-pointer group"
                  : "hover:border-primary/30"
              }`}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full flex items-center justify-center ${
                stat.collegeKey ? "bg-primary/10 group-hover:bg-primary/20" : "bg-primary/10"
              }`}>
                <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.collegeKey ? "text-primary group-hover:scale-110 transition-transform" : "text-primary"}`} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              {stat.collegeKey && (
                <p className="text-xs text-primary/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view students
                </p>
              )}
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
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-foreground/70">
            {["COEP Pune", "ICT Mumbai", "SPCE Mumbai", "GCEK Karad", "BVCOEW"].map((college) => (
              <div
                key={college}
                className="px-4 md:px-6 py-2 md:py-3 bg-card rounded-full border border-border text-xs md:text-sm font-medium"
              >
                {college}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Students Modal */}
      <Dialog open={!!selectedCollege} onOpenChange={() => setSelectedCollege(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold text-center">
              {selectedCollege && collegeStudents[selectedCollege]?.name} Selections
            </DialogTitle>
            <p className="text-sm text-muted-foreground text-center">
              {selectedCollege && collegeStudents[selectedCollege]?.fullName}
            </p>
          </DialogHeader>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4">
            {selectedCollege &&
              collegeStudents[selectedCollege]?.students.map((student, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 md:p-4 text-center bg-gradient-to-t from-primary/5 to-transparent">
                    <p className="font-semibold text-foreground text-sm md:text-base">{student.name}</p>
                    <p className="text-xs text-primary mt-1">
                      {selectedCollege && collegeStudents[selectedCollege]?.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Achievements;
