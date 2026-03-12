import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 bg-background relative overflow-hidden section-divide">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: 'hsl(var(--primary))' }} />

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
          Be the Plumber Who <span className="text-primary">Always Answers.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-4">
          Even at 9PM. Even on weekends. Even when you're under a house.
        </p>

        <div className="mt-12">
          <Button variant="hero" size="lg" className="text-base px-10 py-7 rounded-xl" onClick={scrollToForm}>
            <Phone className="w-5 h-5" />
            Secure My City Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
