import { Phone, PhoneOff, Calendar, AlertTriangle, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/85 to-secondary/95" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-4xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30">
          <span className="text-primary text-sm font-medium tracking-wide">Only one plumbing company per territory</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight mb-6">
          Stop Losing Plumbing Jobs to{" "}
          <span className="text-gradient">Missed Calls.</span>
        </h1>

        <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Own <strong className="text-primary">844-PLUMBER</strong> in your city — powered by a 24/7 AI Receptionist that books jobs automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={scrollToForm}>
            <Phone className="w-5 h-5" />
            Check Availability in My City
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
