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
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">The Solution</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-section-dark-foreground">
            844-PLUMBER + 24/7 AI Receptionist
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-secondary/50 border border-border/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-section-dark-foreground font-medium text-lg">{f.text}</p>
            </div>
          ))}

          <div className="group bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <Bot className="w-10 h-10 text-primary mb-3" />
            <p className="text-section-dark-foreground font-bold text-lg">No missed calls.<br />No lost jobs.<br />No hiring staff.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
