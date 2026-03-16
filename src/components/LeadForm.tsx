import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    city: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll check availability and get back to you within 24 hours.");
    setFormData({ fullName: "", companyName: "", city: "", phone: "", email: "" });
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="lead-form" className="py-24 md:py-36 bg-background noise-bg">
      <div className="container mx-auto px-6 max-w-xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">Get Started</p>
            <h2 className="text-4xl sm:text-[44px] font-extrabold text-foreground tracking-[-0.02em]">
              Check Availability
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Fill in your details and we'll check if your city is open.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="premium-card space-y-6 hover:translate-y-0"
          >
            <div className="space-y-2">
              <Label htmlFor="fullName" className="font-medium text-foreground text-sm">Full Name</Label>
              <Input id="fullName" placeholder="John Smith" value={formData.fullName} onChange={handleChange("fullName")} required className="h-12 rounded-xl border-border/60 bg-secondary/30 focus:bg-background transition-colors" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="font-medium text-foreground text-sm">Company Name</Label>
              <Input id="companyName" placeholder="Smith's Plumbing" value={formData.companyName} onChange={handleChange("companyName")} required className="h-12 rounded-xl border-border/60 bg-secondary/30 focus:bg-background transition-colors" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="font-medium text-foreground text-sm">City</Label>
              <Input id="city" placeholder="Austin, TX" value={formData.city} onChange={handleChange("city")} required className="h-12 rounded-xl border-border/60 bg-secondary/30 focus:bg-background transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-medium text-foreground text-sm">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange("phone")} required className="h-12 rounded-xl border-border/60 bg-secondary/30 focus:bg-background transition-colors" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-foreground text-sm">Email</Label>
                <Input id="email" type="email" placeholder="john@smithplumbing.com" value={formData.email} onChange={handleChange("email")} required className="h-12 rounded-xl border-border/60 bg-secondary/30 focus:bg-background transition-colors" />
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full h-14 text-base mt-2">
              Check Availability
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeadForm;
