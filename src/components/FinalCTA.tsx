import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
          Be the Plumber Who Always Answers.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Even at 9PM. Even on weekends. Even when you're under a house.
        </p>

        <Button variant="hero" size="lg" className="px-8 py-6 text-base" onClick={scrollToForm}>
          <Phone className="w-5 h-5" />
          Secure My City Now
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
