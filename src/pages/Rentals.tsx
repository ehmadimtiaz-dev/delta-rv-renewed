import Navigation from "@/components/Navigation";
import RVListings from "@/components/RVListings";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Rentals = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our RV Fleet
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-95">
              Choose from our selection of well-maintained, fully-equipped RVs perfect for your family adventure
            </p>
          </div>
        </section>

        <RVListings />

        {/* What's Included Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What's Included with Every Rental
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need for a comfortable adventure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Complete kitchen setup with utensils and cookware",
                "Comfortable bedding and fresh towels",
                "Blackstone Flat top grill for outdoor cooking",
                "Board games and entertainment",
                "Trailer hitch and sway bars",
                "Full propane tanks",
                "Camping chairs",
                "Cleaning supplies",
                "First aid kit",
                "RV operation tutorial",
                "24/7 roadside assistance",
                "Delivery options available"
              ].map((item, index) => (
                <Card key={index} className="p-4 flex items-start gap-3 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rentals;
