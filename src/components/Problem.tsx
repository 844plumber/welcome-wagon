import { PhoneOff, DollarSign, TrendingDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Problem = () => {
  return (
    <section className="py-24 md:py-36 gradient-section-alt noise-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">The Problem</p>
            <h2 className="text-4xl sm:text-[44px] font-extrabold text-foreground tracking-[-0.02em] leading-tight">
              Every Missed Call Is Lost Revenue.
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="premium-card max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              You're on a job. Your phone rings. You can't answer.{" "}
              <strong className="text-foreground">They call the next plumber.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: PhoneOff, stat: "20–40%", label: "of calls missed" },
                { icon: DollarSign, stat: "Thousands", label: "lost monthly" },
                { icon: TrendingDown, stat: "Lost", label: "to competitors" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-secondary/60 border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-foreground text-2xl block mb-1 font-bold tracking-tight">{item.stat}</strong>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Problem;
