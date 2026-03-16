import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-36 pb-24 md:pt-48 md:pb-36 gradient-hero noise-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/[0.07] text-primary text-sm font-medium border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Only one plumbing company per territory
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-extrabold text-foreground leading-[1.05] mb-8 tracking-[-0.03em]">
              Stop Losing Plumbing Jobs to Missed Calls.
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Own <strong className="text-foreground font-semibold">844-PLUMBER</strong> in your city — powered by a 24/7 AI Receptionist that books jobs automatically.
            </p>

            <Button variant="hero" size="lg" className="px-10 h-16 text-base" onClick={scrollToForm}>
              <Phone className="w-5 h-5" />
              Check Availability in My City
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>

            <div className="mt-10 flex flex-wrap items-center gap-8 text-muted-foreground text-sm font-medium">
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">✓</span> No Setup Fees</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">✓</span> 24/7 AI Coverage</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">✓</span> Exclusive Territory</span>
            </div>
          </motion.div>

          {/* Right column — visual */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="w-full max-w-sm aspect-square rounded-[28px] bg-gradient-to-br from-primary/[0.06] to-accent/[0.08] border border-border/60 flex items-center justify-center backdrop-blur-sm">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
