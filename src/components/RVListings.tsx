import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Bed, Utensils, Wifi, Wind, Droplets } from "lucide-react";
import rvInterior from "@/assets/rv-interior.jpg";
import rvBunks from "@/assets/rv-bunks.jpg";

const RVListings = () => {
  const rvs = [
    {
      name: "Delta Diva",
      subtitle: "30ft BunkHouse",
      model: "2022 Jayco - Jay Feather 24BH",
      sleeps: 8,
      weight: "5,995 lbs",
      description: "Our trailers are light and easy to handle for most SUV/Trucks with a V8. They sleep up to 8 people, great for families! Many basics are provided, including utensils, cookware, games, towels, bedding, and a Blackstone Flat top grill provided for outdoor cooking convenience. Trailer hitch and sway bars are also provided.",
      features: ["Sleeps 8", "Bunk beds", "Full kitchen", "Outdoor grill included", "Tow package included"],
      amenities: [
        { icon: Wind, text: "A/C & Heating" },
        { icon: Droplets, text: "Hot Water" },
        { icon: Wifi, text: "Entertainment System" }
      ],
      image: rvInterior
    },
    {
      name: "Delta Diamond",
      subtitle: "33.5ft BunkHouse",
      model: "2024 Jayco - Jay Flight 286BHSW",
      sleeps: 10,
      weight: "6,815 lbs",
      description: "Our newest and most spacious trailer! Light and easy to handle for most SUV/Trucks with a V8. Sleeps up to 10 people comfortably with modern amenities throughout. Includes all basics: utensils, cookware, games, towels, bedding, and a Blackstone Flat top grill. Trailer hitch and sway bars provided.",
      features: ["Sleeps 10", "Multiple bunks", "Spacious layout", "Outdoor grill included", "Tow package included"],
      amenities: [
        { icon: Wind, text: "Dual A/C Units" },
        { icon: Droplets, text: "Hot Water System" },
        { icon: Wifi, text: "Smart TV & Sound" }
      ],
      image: rvBunks
    }
  ];

  return (
    <section id="rentals" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our RV Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our well-maintained, family-friendly RVs perfect for your adventure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rvs.map((rv, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={rv.image} 
                  alt={`${rv.name} interior showing modern amenities and comfortable living space`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-primary mb-1">{rv.name}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{rv.subtitle}</p>
                  <p className="text-sm font-medium text-accent">{rv.model}</p>
                </div>

                <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border flex-wrap">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Sleeps {rv.sleeps}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Bunk beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Full kitchen</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex gap-4 mb-4 pb-4 border-b border-border">
                  {rv.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <amenity.icon className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{amenity.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {rv.description}
                </p>

                <Button variant="default" size="lg" className="w-full hover-scale" asChild>
                  <a href="/contact">Check Availability</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RVListings;
