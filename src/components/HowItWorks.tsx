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
    <section className="py-28 bg-background relative section-divide">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 text-foreground tracking-tight">
            Setup in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="text-8xl font-black text-primary/[0.06] absolute -top-6 left-1/2 -translate-x-1/2 font-heading select-none">
                {step.num}
              </div>
              <div className="relative pt-14">
                <div className="w-18 h-18 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-500 w-[72px] h-[72px] border border-primary/10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10">
                  <div className="border-t-2 border-dashed border-primary/15 w-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
