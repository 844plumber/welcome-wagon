import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Only one plumbing company per territory
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              Stop Losing Plumbing Jobs to{" "}
              <span className="relative inline-block">
                <span className="text-red-600">Missed Calls.</span>
                <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[75%]" viewBox="0 0 200 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 2 Q100 -14 175 2" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M40 7 Q100 -5 160 7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Own <strong className="text-foreground font-semibold">844-PLUMBER</strong> in your city — powered by a 24/7 AI Receptionist that books jobs automatically.
            </p>

            <Button variant="hero" size="lg" className="px-8 py-6 text-base" onClick={scrollToForm}>
              <Phone className="w-5 h-5" />
              Check Availability in My City
            </Button>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <span>✓ No Setup Fees</span>
              <span>✓ 24/7 AI Coverage</span>
              <span>✓ Exclusive Territory</span>
            </div>
          </div>

          {/* Right column — visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square rounded-2xl bg-secondary border border-border flex items-center justify-center">
              <Phone className="w-20 h-20 text-accent" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
