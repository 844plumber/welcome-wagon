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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Setup in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="text-7xl font-bold text-primary/10 absolute -top-4 left-1/2 -translate-x-1/2 font-heading select-none">
                {step.num}
              </div>
              <div className="relative pt-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
