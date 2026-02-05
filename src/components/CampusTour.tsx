import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import campus1 from "@/assets/campus/campus-1.jpg";
import campus2 from "@/assets/campus/campus-2.jpg";
import campus3 from "@/assets/campus/campus-3.jpg";
import campus4 from "@/assets/campus/campus-4.jpg";
import campus5 from "@/assets/campus/campus-5.jpg";
import campus6 from "@/assets/campus/campus-6.jpg";
import campus7 from "@/assets/campus/campus-7.jpg";

const campusImages = [
  { src: campus1, title: "Felicitation Ceremony" },
  { src: campus2, title: "Classroom Sessions" },
  { src: campus3, title: "Learning Environment" },
  { src: campus4, title: "Our Stalwarts 2024" },
  { src: campus5, title: "Our Stalwarts 2025" },
  { src: campus6, title: "Campus Life" },
  { src: campus7, title: "Team Photo" },
];

interface CampusTourProps {
  variant?: "hero" | "default";
}

const CampusTour = ({ variant = "default" }: CampusTourProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % campusImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <>
      <Button
        size="lg"
        variant={variant === "hero" ? "default" : "outline"}
        onClick={() => setIsOpen(true)}
        className={
          variant === "hero"
            ? "bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-6 py-5 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            : ""
        }
      >
        <Play className="mr-2 w-5 h-5" />
        Campus Tour
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-xl font-semibold">
              Campus Tour - {campusImages[currentIndex].title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative">
            <img
              src={campusImages[currentIndex].src}
              alt={campusImages[currentIndex].title}
              className="w-full h-[60vh] object-contain bg-muted"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {campusImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CampusTour;
