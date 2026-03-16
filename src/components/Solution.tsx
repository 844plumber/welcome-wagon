import { Phone, Calendar, AlertTriangle, MessageSquare, Clock, Bot } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  { icon: Phone, text: "Answers every call instantly" },
  { icon: Calendar, text: "Books jobs directly into your calendar" },
  { icon: AlertTriangle, text: "Flags emergency calls immediately" },
  { icon: MessageSquare, text: "Sends SMS confirmations" },
  { icon: Clock, text: "Works 24/7" },
];

const Solution = () => {
  return (
    <section className="py-24 md:py-36 gradient-section-alt noise-bg">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">The Solution</p>
            <h2 className="text-4xl sm:text-[44px] font-extrabold text-foreground tracking-[-0.02em] leading-tight">
              844-PLUMBER + 24/7 AI Receptionist
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="premium-card h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-foreground font-semibold text-lg leading-snug">{f.text}</p>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.4}>
            <div className="premium-card h-full bg-gradient-to-br from-primary/[0.04] to-accent/[0.06] border-primary/15">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Bot className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-foreground font-bold text-lg leading-snug">No missed calls.<br />No lost jobs.<br />No hiring staff.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Solution;
