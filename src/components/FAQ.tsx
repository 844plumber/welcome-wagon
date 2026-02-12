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
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-section-dark-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-secondary/50 border border-border/10 rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-section-dark-foreground text-left font-medium text-lg hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-section-dark-foreground/70 text-base pb-5">
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
