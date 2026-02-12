import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
          Be the Plumber Who <span className="text-primary">Always Answers.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-4">
          Even at 9PM. Even on weekends. Even when you're under a house.
        </p>

        <div className="mt-10">
          <Button variant="hero" size="lg" className="text-base px-10 py-6" onClick={scrollToForm}>
            <Phone className="w-5 h-5" />
            Secure My City Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
