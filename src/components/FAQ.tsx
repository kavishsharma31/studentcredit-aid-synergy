
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "How does AI-powered credit evaluation work?",
      answer:
        "Our AI system analyzes multiple data points beyond traditional credit scores, including academic performance, career potential, and other relevant factors to provide a more comprehensive evaluation of student creditworthiness.",
    },
    {
      question: "Do I need a co-signer for my student loan?",
      answer:
        "No! Our innovative AI-powered system evaluates your potential without requiring a co-signer, making credit more accessible to students.",
    },
    {
      question: "What are the interest rates?",
      answer:
        "Interest rates vary based on your individual profile and are typically competitive with traditional student loans. Our AI evaluation often helps students qualify for better rates.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "Most applications are processed within minutes, thanks to our advanced AI technology. You'll receive an initial decision almost instantly.",
    },
    {
      question: "What documentation do I need to apply?",
      answer:
        "You'll need basic identification, proof of enrollment, and academic records. Our streamlined process requires minimal paperwork compared to traditional loans.",
    },
  ];

  return (
    <section className="section-padding pt-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI-powered student credit
            system
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
