import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is included with my RV rental?",
      answer: "All our RVs come fully equipped with utensils, cookware, games, towels, bedding, and a Blackstone Flat top grill for outdoor cooking. We also provide trailer hitch and sway bars for towing."
    },
    {
      question: "What type of vehicle do I need to tow your RVs?",
      answer: "Our trailers are light and easy to handle for most SUV/Trucks with a V8 engine. We recommend verifying your vehicle's towing capacity before booking."
    },
    {
      question: "How many people can sleep in your RVs?",
      answer: "The Delta Diva sleeps up to 8 people, while the Delta Diamond accommodates up to 10 people, making both perfect for families and groups."
    },
    {
      question: "Do you offer delivery service?",
      answer: "Please contact us at (925) 276-5026 to discuss delivery options and availability for your specific needs."
    },
    {
      question: "What add-on packages are available?",
      answer: "We offer various add-on packages including Traeger smoker, Cornhole boards, generators, and more to enhance your camping experience. Contact us for full details and pricing."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Please contact us directly at (925) 276-5026 to discuss our cancellation policy and any specific circumstances regarding your reservation."
    },
    {
      question: "Is insurance included?",
      answer: "Insurance requirements and options will be discussed during the booking process. Please reach out to us for detailed information about coverage."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking as early as possible, especially during peak season. Contact us to check availability for your desired dates."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about renting with Delta RV
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
