import { Search, Settings, Zap } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Setup in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-extrabold text-border mb-4 font-heading">{step.num}</div>
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
