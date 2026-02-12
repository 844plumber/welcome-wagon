import { Phone } from "lucide-react";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" />
          <span className="font-heading font-bold text-lg text-secondary-foreground">
            844-PLUMBER
          </span>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Check Availability
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
