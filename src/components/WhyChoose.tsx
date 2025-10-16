import { Card } from "@/components/ui/card";
import { Check, Home, Package, DollarSign } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: Check,
      title: "We Provide Quality",
      description: "Our well-maintained RVs offer modern amenities, reliability, and comfort. Enjoy a seamless travel experience with top-quality service, ensuring a stress-free and memorable adventure."
    },
    {
      icon: Home,
      title: "Fully Furnished RVs",
      description: "Our RVs are fully equipped with modern amenities, cozy interiors, and essential conveniences, ensuring a comfortable and hassle-free travel experience for your next adventure."
    },
    {
      icon: Package,
      title: "Add-on Packages",
      description: "Enhance your trip with our optional add-on packages, including a Traeger smoker, Cornhole boards, generators and more. Customize your rental for a more comfortable and convenient adventure."
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "We offer competitive pricing on all our RV rentals, ensuring you get the best value for your adventure. Enjoy quality, comfort and reliability at budget-friendly rates."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Delta RV Rentals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for quality RV experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
