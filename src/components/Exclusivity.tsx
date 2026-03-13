import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Exclusivity = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <Shield className="w-10 h-10 text-accent mx-auto mb-6" strokeWidth={1.5} />

        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
          Own 844-PLUMBER in Your City.
        </h2>

        <p className="text-lg text-muted-foreground mb-2">
          One plumbing company per territory.
        </p>
        <p className="text-muted-foreground mb-10">
          Lock down your city before someone else does.
        </p>

        <Button variant="hero" size="lg" className="px-8 py-6 text-base" onClick={scrollToForm}>
          Check My City Now
        </Button>
      </div>
    </section>
  );
};

export default Exclusivity;
