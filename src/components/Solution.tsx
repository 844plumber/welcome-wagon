import { Phone, Calendar, AlertTriangle, MessageSquare, Clock, Bot } from "lucide-react";

const features = [
  { icon: Phone, text: "Answers every call instantly" },
  { icon: Calendar, text: "Books jobs directly into your calendar" },
  { icon: AlertTriangle, text: "Flags emergency calls immediately" },
  { icon: MessageSquare, text: "Sends SMS confirmations" },
  { icon: Clock, text: "Works 24/7" },
];

const Solution = () => {
  return (
    <section className="py-28 section-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.07] blur-[150px]" style={{ background: 'hsl(var(--primary))' }} />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">The Solution</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 text-section-dark-foreground tracking-tight">
            844-PLUMBER + 24/7 AI Receptionist
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-secondary/40 border border-border/10 rounded-2xl p-7 hover:border-primary/30 hover:bg-secondary/60 transition-all duration-500"
            >
              <div className="w-13 h-13 rounded-xl bg-primary/12 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-500 w-[52px] h-[52px]">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-section-dark-foreground font-semibold text-lg leading-snug">{f.text}</p>
            </div>
          ))}

          <div className="group bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 rounded-2xl p-7 flex flex-col items-center justify-center text-center hover:from-primary/20 hover:to-primary/10 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <p className="text-section-dark-foreground font-bold text-lg leading-snug">No missed calls.<br />No lost jobs.<br />No hiring staff.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
