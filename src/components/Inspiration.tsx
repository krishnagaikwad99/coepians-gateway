import drAmbedkar from "@/assets/inspiration/dr-ambedkar.jpg";
import savitribaiPhule from "@/assets/inspiration/savitribai-phule.jpg";
import mahatmaPhule from "@/assets/inspiration/mahatma-phule.jpg";
import shahuMaharaj from "@/assets/inspiration/shahu-maharaj.jpg";

const Inspiration = () => {
  const inspirations = [
    {
      name: "Dr. Babasaheb Ambedkar",
      nameMarathi: "डॉ. बाबासाहेब आंबेडकर",
      image: drAmbedkar,
      imagePosition: "object-top",
      quoteEnglish: "A nation progresses only when education reaches every citizen equally.",
      quoteMarathi: "जेव्हा शिक्षण प्रत्येक नागरिकापर्यंत समानतेने पोहोचते तेव्हाच राष्ट्र प्रगती करते.",
    },
    {
      name: "Savitribai Phule",
      nameMarathi: "सावित्रीबाई फुले",
      image: savitribaiPhule,
      quoteEnglish: "Education is the true strength and ornament of a woman.",
      quoteMarathi: "शिक्षण हेच स्त्रीचे खरे बळ आणि भूषण आहे.",
    },
    {
      name: "Mahatma Jyotirao Phule",
      nameMarathi: "महात्मा ज्योतिराव फुले",
      image: mahatmaPhule,
      quoteEnglish: "True education teaches equality and humanity.",
      quoteMarathi: "खरे शिक्षण समता आणि मानवता शिकवते.",
    },
    {
      name: "Chhatrapati Shahu Maharaj",
      nameMarathi: "छत्रपती शाहू महाराज",
      image: shahuMaharaj,
      quoteEnglish: "Without education, the oppressed cannot rise, society cannot become equal, and true democracy cannot survive.",
      quoteMarathi: "शिक्षणाशिवाय दबलेले घटक उन्नती करू शकत नाहीत, समाज समतावादी होऊ शकत नाही आणि खरी लोकशाही टिकू शकत नाही.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold-dark font-medium rounded-full text-sm mb-4">
            Our Inspiration
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            प्रेरणास्थान
          </h2>
        </div>

        {/* Inspiration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {inspirations.map((person) => (
            <div
              key={person.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Photo Frame */}
              <div className="relative p-6 pb-4 flex justify-center">
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent rounded-full" />
                  <div className="absolute -inset-2 border-2 border-gold/40 rounded-full" />
                  <img
                    src={person.image}
                    alt={person.name}
                    className={`relative w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-card shadow-lg ${person.imagePosition || ''}`}
                  />
                </div>
              </div>

              {/* Name */}
              <div className="text-center px-4 pb-2">
                <h3 className="text-base lg:text-lg font-bold text-foreground">{person.name}</h3>
                <p className="text-sm text-gold-dark font-medium">{person.nameMarathi}</p>
              </div>

              {/* Quotes */}
              <div className="px-4 pb-5 space-y-2">
                {/* English Quote */}
                <div className="bg-primary/5 rounded-xl p-3 border-l-4 border-primary">
                  <p className="text-xs lg:text-sm text-muted-foreground italic leading-relaxed">
                    "{person.quoteEnglish}"
                  </p>
                </div>

                {/* Marathi Quote */}
                <div className="bg-gold/10 rounded-xl p-3 border-l-4 border-gold">
                  <p className="text-xs lg:text-sm text-foreground font-medium leading-relaxed">
                    "{person.quoteMarathi}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
