import { PhoneOff, DollarSign, TrendingDown } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Every Missed Call Is <span className="text-primary">Lost Revenue.</span>
          </h2>
        </div>

        <div className="section-dark rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl text-section-dark-foreground/80 leading-relaxed mb-8">
            You're on a job. Your phone rings. You can't answer.{" "}
            <strong className="text-primary">They call the next plumber.</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <PhoneOff className="w-7 h-7 text-primary" />
              </div>
              <p className="text-section-dark-foreground/70 text-sm">
                <strong className="text-section-dark-foreground text-2xl block mb-1">20–40%</strong>
                of calls missed
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <p className="text-section-dark-foreground/70 text-sm">
                <strong className="text-section-dark-foreground text-2xl block mb-1">Thousands</strong>
                lost monthly
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <TrendingDown className="w-7 h-7 text-primary" />
              </div>
              <p className="text-section-dark-foreground/70 text-sm">
                <strong className="text-section-dark-foreground text-2xl block mb-1">Lost</strong>
                to competitors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
