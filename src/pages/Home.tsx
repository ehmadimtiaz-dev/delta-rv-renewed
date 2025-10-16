import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Award, TrendingUp } from "lucide-react";
import outdoorCooking from "@/assets/outdoor-cooking.jpg";
import campingDestination from "@/assets/camping-destination.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Award, label: "Years in Business", value: "5+" },
                { icon: Star, label: "5-Star Reviews", value: "150+" },
                { icon: Calendar, label: "Successful Trips", value: "500+" },
                { icon: TrendingUp, label: "Customer Satisfaction", value: "98%" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChoose />
        
        {/* Popular Destinations Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Popular Camping Destinations
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore California's most beautiful camping spots with our RVs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border animate-fade-in hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={campingDestination} 
                    alt="Scenic California coastal camping destination with ocean views" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">Lake Tahoe</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Mountain Paradise</h3>
                  <p className="text-muted-foreground mb-4">
                    Crystal-clear waters, stunning mountain views, and endless outdoor activities. Perfect for summer adventures and winter getaways alike.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Multiple RV-friendly campgrounds
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Hiking, swimming, and water sports
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      3-4 hour drive from Bay Area
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border animate-fade-in hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={outdoorCooking} 
                    alt="Family outdoor cooking experience at campsite" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">Yosemite National Park</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Nature's Masterpiece</h3>
                  <p className="text-muted-foreground mb-4">
                    Iconic granite cliffs, waterfalls, and giant sequoias. Experience one of America's most beloved national parks in comfort.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      World-class hiking and photography
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Wildlife viewing opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      4 hour drive from Bay Area
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="default" size="lg" asChild>
                <a href="/rentals">Plan Your Trip</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Testimonial Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from families who've experienced Delta RV
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Sarah M.",
                  review: "Amazing experience! The RV was spotless and had everything we needed for our week-long trip. Delta RV made our family vacation unforgettable!",
                  rating: 5
                },
                {
                  name: "John D.",
                  review: "Professional service from start to finish. The team was helpful with all our questions and the RV was in perfect condition. Highly recommend!",
                  rating: 5
                },
                {
                  name: "Lisa K.",
                  review: "Our kids loved the bunk beds! The RV was comfortable and well-equipped. We'll definitely be renting from Delta RV again next summer.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary animate-scale-in" style={{ animationDelay: `${(index * 0.1) + (i * 0.05)}s` }} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.review}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="default" size="lg" className="hover-scale" asChild>
                <a href="/reviews">Read More Reviews</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Book your RV today and create memories that will last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 hover-scale" asChild>
                <a href="/rentals">Browse RVs</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-scale"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
