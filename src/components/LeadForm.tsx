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
    <section id="lead-form" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Get Started</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Check Availability
          </h2>
          <p className="text-muted-foreground mt-3">
            Fill in your details and we'll check if your city is open.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="John Smith" value={formData.fullName} onChange={handleChange("fullName")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" placeholder="Smith's Plumbing" value={formData.companyName} onChange={handleChange("companyName")} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Austin, TX" value={formData.city} onChange={handleChange("city")} required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange("phone")} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@smithplumbing.com" value={formData.email} onChange={handleChange("email")} required />
            </div>
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6">
            Check Availability
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
