import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Exclusivity = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-36 gradient-section-alt noise-bg">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <AnimatedSection>
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-accent" strokeWidth={1.5} />
          </div>

          <h2 className="text-4xl sm:text-[44px] font-extrabold text-foreground mb-6 tracking-[-0.02em] leading-tight">
            Own 844-PLUMBER in Your City.
          </h2>

          <p className="text-xl text-muted-foreground mb-2">
            One plumbing company per territory.
          </p>
          <p className="text-muted-foreground text-lg mb-12">
            Lock down your city before someone else does.
          </p>

          <Button variant="hero" size="lg" className="px-10 h-16 text-base" onClick={scrollToForm}>
            Check My City Now
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Exclusivity;
