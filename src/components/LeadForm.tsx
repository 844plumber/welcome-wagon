import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
    <section id="lead-form" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="text-center mb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Check Availability
          </h2>
          <p className="text-muted-foreground mt-3">
            Fill in your details and we'll check if your city is open.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background border border-border rounded-xl p-8 shadow-sm space-y-5"
        >
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="font-medium text-foreground">Full Name</Label>
            <Input id="fullName" placeholder="John Smith" value={formData.fullName} onChange={handleChange("fullName")} required className="h-11 rounded-md" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="companyName" className="font-medium text-foreground">Company Name</Label>
            <Input id="companyName" placeholder="Smith's Plumbing" value={formData.companyName} onChange={handleChange("companyName")} required className="h-11 rounded-md" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="city" className="font-medium text-foreground">City</Label>
            <Input id="city" placeholder="Austin, TX" value={formData.city} onChange={handleChange("city")} required className="h-11 rounded-md" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="font-medium text-foreground">Phone</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange("phone")} required className="h-11 rounded-md" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="font-medium text-foreground">Email</Label>
              <Input id="email" type="email" placeholder="john@smithplumbing.com" value={formData.email} onChange={handleChange("email")} required className="h-11 rounded-md" />
            </div>
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full py-6 text-base">
            Check Availability
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
