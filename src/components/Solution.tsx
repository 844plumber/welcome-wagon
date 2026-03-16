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
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            844-PLUMBER + 24/7 AI Receptionist
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <f.icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
              <p className="text-foreground font-semibold text-base leading-snug">{f.text}</p>
            </div>
          ))}

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col justify-center">
            <Bot className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
            <p className="text-foreground font-bold text-base leading-snug">No missed calls.<br />No lost jobs.<br />No hiring staff.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
