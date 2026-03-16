import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Phone className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground tracking-tight">
            844-PLUMBER
          </span>
        </div>

        <Button variant="hero" size="default" onClick={scrollToForm}>
          Check Availability
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
