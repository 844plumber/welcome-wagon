import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" />
          <span className="font-heading font-bold text-lg text-foreground">
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
