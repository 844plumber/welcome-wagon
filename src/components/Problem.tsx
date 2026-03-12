import { PhoneOff, DollarSign, TrendingDown } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-28 bg-background relative section-divide">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 text-foreground tracking-tight">
            Every Missed Call Is <span className="text-primary">Lost Revenue.</span>
          </h2>
        </div>

        <div className="section-dark rounded-3xl p-10 sm:p-14 max-w-3xl mx-auto relative overflow-hidden">
          {/* Decorative corner glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-30" style={{ background: 'hsl(var(--primary))' }} />

          <p className="text-lg sm:text-xl text-section-dark-foreground/80 leading-relaxed mb-10 relative z-10">
            You're on a job. Your phone rings. You can't answer.{" "}
            <strong className="text-primary">They call the next plumber.</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: PhoneOff, stat: "20–40%", label: "of calls missed" },
              { icon: DollarSign, stat: "Thousands", label: "lost monthly" },
              { icon: TrendingDown, stat: "Lost", label: "to competitors" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-secondary/30 border border-border/5">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-section-dark-foreground/70 text-sm">
                  <strong className="text-section-dark-foreground text-2xl block mb-1 font-extrabold">{item.stat}</strong>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
