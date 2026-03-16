import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

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
    <section className="py-24 md:py-36 gradient-section-alt noise-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-[44px] font-extrabold text-foreground tracking-[-0.02em]">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="premium-card px-8 py-0 data-[state=open]:shadow-md hover:translate-y-0"
              >
                <AccordionTrigger className="text-foreground text-left font-semibold text-base hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
