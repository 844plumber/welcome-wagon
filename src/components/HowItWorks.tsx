import { Search, Settings, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Check Availability",
    desc: "Enter your city to see if 844-PLUMBER is available in your territory.",
  },
  {
    num: "02",
    icon: Settings,
    title: "We Configure Your AI",
    desc: "Connect calendar, define service areas, emergency rules — we handle it all.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Go Live",
    desc: "Calls route instantly and jobs get booked automatically. Done.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-36 bg-background noise-bg">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">How It Works</p>
            <h2 className="text-4xl sm:text-[44px] font-extrabold text-foreground tracking-[-0.02em]">
              Setup in 3 Simple Steps
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="text-center">
                <div className="text-6xl font-extrabold text-border/60 mb-6 font-heading tracking-tight">{step.num}</div>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
