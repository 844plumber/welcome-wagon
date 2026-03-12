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
    <section id="lead-form" className="py-28 bg-background relative">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">Get Started</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-foreground tracking-tight">
            Check Availability
          </h2>
          <p className="text-muted-foreground mt-3">
            Fill in your details and we'll check if your city is open.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="premium-card p-10 space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="fullName" className="font-semibold">Full Name</Label>
            <Input id="fullName" placeholder="John Smith" value={formData.fullName} onChange={handleChange("fullName")} required className="h-12 rounded-xl bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName" className="font-semibold">Company Name</Label>
            <Input id="companyName" placeholder="Smith's Plumbing" value={formData.companyName} onChange={handleChange("companyName")} required className="h-12 rounded-xl bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="font-semibold">City</Label>
            <Input id="city" placeholder="Austin, TX" value={formData.city} onChange={handleChange("city")} required className="h-12 rounded-xl bg-background" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold">Phone</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange("phone")} required className="h-12 rounded-xl bg-background" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold">Email</Label>
              <Input id="email" type="email" placeholder="john@smithplumbing.com" value={formData.email} onChange={handleChange("email")} required className="h-12 rounded-xl bg-background" />
            </div>
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full text-base py-7 rounded-xl">
            Check Availability
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
