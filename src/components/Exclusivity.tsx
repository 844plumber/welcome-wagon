import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Exclusivity = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-[0.08] blur-[100px]" style={{ background: 'hsl(var(--primary))' }} />

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 flex items-center justify-center mx-auto mb-10">
          <Shield className="w-10 h-10 text-primary" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-section-dark-foreground mb-6 tracking-tight">
          Own 844-PLUMBER in <span className="text-primary">Your City.</span>
        </h2>

        <p className="text-xl text-section-dark-foreground/70 mb-4">
          One plumbing company per territory.
        </p>
        <p className="text-lg text-section-dark-foreground/45 mb-12">
          Lock down your city before someone else does.
        </p>

        <Button variant="hero" size="lg" className="text-base px-10 py-7 rounded-xl" onClick={scrollToForm}>
          Check My City Now
        </Button>
      </div>
    </section>
  );
};

export default Exclusivity;
