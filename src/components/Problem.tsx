import { PhoneOff, DollarSign, TrendingDown } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Every Missed Call Is Lost Revenue.
          </h2>
        </div>

        <div className="bg-background rounded-xl border border-border p-8 sm:p-12 max-w-3xl mx-auto shadow-sm">
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            You're on a job. Your phone rings. You can't answer.{" "}
            <strong className="text-foreground">They call the next plumber.</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: PhoneOff, stat: "20–40%", label: "of calls missed" },
              { icon: DollarSign, stat: "Thousands", label: "lost monthly" },
              { icon: TrendingDown, stat: "Lost", label: "to competitors" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-5 rounded-lg bg-secondary border border-border">
                <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground text-2xl block mb-1 font-bold">{item.stat}</strong>
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
