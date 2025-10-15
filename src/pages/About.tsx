import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Shield } from "lucide-react";
import familyCamping from "@/assets/family-camping.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About Delta RV Rentals
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-95">
              Your trusted partner in creating unforgettable family adventures
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Delta RV Rentals was founded in 2020 with a simple mission: to make quality RV experiences 
                    accessible and affordable for families throughout the San Francisco Bay Area and beyond.
                  </p>
                  <p>
                    As a family-owned and operated business, we understand the importance of creating lasting 
                    memories with your loved ones. We've experienced firsthand the joy of RV adventures, and 
                    we're passionate about sharing that experience with others.
                  </p>
                  <p>
                    Our fleet consists of well-maintained, modern RVs that are perfect for families of all sizes. 
                    We take pride in providing exceptional customer service, ensuring that every rental is a 
                    stress-free and enjoyable experience from start to finish.
                  </p>
                  <p>
                    What sets us apart is our commitment to going the extra mile. From providing comprehensive 
                    tutorials to including essential amenities at no extra charge, we're dedicated to making 
                    your RV adventure as smooth and memorable as possible.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={familyCamping} 
                  alt="Family enjoying RV camping" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Family First</h3>
                <p className="text-muted-foreground">
                  We treat every customer like family and prioritize your safety and happiness above all else.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-border">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  Our RVs are meticulously maintained and equipped with modern amenities for your comfort.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-border">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trust & Integrity</h3>
                <p className="text-muted-foreground">
                  Transparent pricing, honest communication, and reliable service you can count on.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Care</h3>
                <p className="text-muted-foreground">
                  From booking to return, we're here to support you every step of your journey.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Why Families Choose Delta RV</h2>
              <div className="space-y-6">
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    As Bay Area locals, we know the best camping spots and can provide insider tips for your trip.
                  </p>
                </Card>
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-bold mb-3 text-primary">All-Inclusive Packages</h3>
                  <p className="text-muted-foreground">
                    Unlike other rental companies, we include essentials like bedding, kitchen equipment, and outdoor 
                    gear at no extra charge.
                  </p>
                </Card>
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Flexible Options</h3>
                  <p className="text-muted-foreground">
                    Weekend getaways or extended adventures - we offer flexible rental periods and add-on packages 
                    to customize your experience.
                  </p>
                </Card>
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Peace of Mind</h3>
                  <p className="text-muted-foreground">
                    24/7 roadside assistance, comprehensive tutorials, and responsive support ensure you're never 
                    alone on your adventure.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Delta RV Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Join hundreds of families who've trusted us with their adventures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="/rentals">View Our Fleet</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
