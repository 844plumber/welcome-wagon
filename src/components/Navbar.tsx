import { Phone } from "lucide-react";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-xl border-b border-border/5">
      <div className="container mx-auto px-6 h-18 flex items-center justify-between py-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Phone className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg text-secondary-foreground tracking-tight">
            844-PLUMBER
          </span>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
        >
          Check Availability
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
