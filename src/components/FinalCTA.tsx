import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 md:py-40 gradient-cta noise-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-3xl text-center relative">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-primary-foreground mb-6 tracking-[-0.02em] leading-tight">
            Be the Plumber Who Always Answers.
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-12 max-w-xl mx-auto">
            Even at 9PM. Even on weekends. Even when you're under a house.
          </p>

          <Button 
            variant="default" 
            size="lg" 
            className="px-10 h-16 text-base bg-background text-foreground hover:bg-background/90 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold" 
            onClick={scrollToForm}
          >
            <Phone className="w-5 h-5" />
            Secure My City Now
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
