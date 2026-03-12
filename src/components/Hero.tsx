import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/[0.92] via-secondary/[0.88] to-background" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px]" style={{ background: 'hsl(var(--primary))' }} />

      <div className="relative z-10 container mx-auto px-6 py-32 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-semibold tracking-wide">Only one plumbing company per territory</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary-foreground leading-[1.1] mb-8 tracking-tight">
          Stop Losing Plumbing Jobs to{" "}
          <span className="text-gradient">Missed Calls.</span>
        </h1>

        <p className="text-lg sm:text-xl text-secondary-foreground/65 max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          Own <strong className="text-primary font-bold">844-PLUMBER</strong> in your city — powered by a 24/7 AI Receptionist that books jobs automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-10 py-7 rounded-xl text-[15px]" onClick={scrollToForm}>
            <Phone className="w-5 h-5" />
            Check Availability in My City
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex items-center justify-center gap-8 text-secondary-foreground/30 text-sm font-medium">
          <span>✓ No Setup Fees</span>
          <span className="w-1 h-1 rounded-full bg-secondary-foreground/20" />
          <span>✓ 24/7 AI Coverage</span>
          <span className="w-1 h-1 rounded-full bg-secondary-foreground/20" />
          <span>✓ Exclusive Territory</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
