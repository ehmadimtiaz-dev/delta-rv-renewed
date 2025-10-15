import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhyChoose />
        
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
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <a href="/reviews">Read More Reviews</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Book your RV today and create memories that will last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/rentals">Browse RVs</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
