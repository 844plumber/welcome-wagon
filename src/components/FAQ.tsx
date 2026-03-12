import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Is this a shared number?", a: "No. Only one plumbing company per territory. You own 844-PLUMBER exclusively in your city." },
  { q: "Is this a live call center?", a: "No. It is an AI receptionist built specifically for plumbers — faster, more consistent, and available 24/7." },
  { q: "What happens during emergencies?", a: "Emergency calls are automatically flagged and prioritized so you can respond to urgent situations immediately." },
  { q: "Can it integrate with my calendar?", a: "Yes. We connect directly with your existing calendar so jobs are booked without any manual entry." },
  { q: "What if my city is taken?", a: "You can join a waitlist. We'll notify you immediately if the territory becomes available." },
  { q: "How long does setup take?", a: "Typically 24–72 hours. We handle all the configuration for you." },
  { q: "Do I need technical knowledge?", a: "Not at all. We handle everything — from setup to ongoing support." },
];

const FAQ = () => {
  return (
    <section className="py-28 section-dark relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-section-dark-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-secondary/30 border border-border/8 rounded-2xl px-7 data-[state=open]:border-primary/25 data-[state=open]:bg-secondary/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-section-dark-foreground text-left font-semibold text-lg hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-section-dark-foreground/65 text-base pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
