import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Exclusivity = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-8">
          <Shield className="w-10 h-10 text-primary" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-section-dark-foreground mb-6">
          Own 844-PLUMBER in <span className="text-primary">Your City.</span>
        </h2>

        <p className="text-xl text-section-dark-foreground/70 mb-4">
          One plumbing company per territory.
        </p>
        <p className="text-lg text-section-dark-foreground/50 mb-10">
          Lock down your city before someone else does.
        </p>

        <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={scrollToForm}>
          Check My City Now
        </Button>
      </div>
    </section>
  );
};

export default Exclusivity;
