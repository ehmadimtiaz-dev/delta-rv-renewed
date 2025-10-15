import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import familyCamping from "@/assets/family-camping.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your adventure? Contact us today to book your RV rental
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card className="p-8 border-border">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:9252765026" className="text-accent hover:underline text-lg">
                    (925) 276-5026
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Call us for immediate assistance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@deltarvrentals.com" className="text-accent hover:underline">
                    info@deltarvrentals.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Send us your questions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Service Area</h4>
                  <p className="text-muted-foreground">
                    San Francisco Bay Area, California
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Booking CTA Card */}
          <Card className="p-8 border-border overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <img 
                src={familyCamping} 
                alt="Family enjoying RV camping"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Start your adventure today! Give us a call to check availability, 
                discuss your needs, and reserve your perfect RV for your next family getaway.
              </p>
              
              <div className="space-y-4">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="tel:9252765026">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now to Book
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="mailto:info@deltarvrentals.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-center font-medium">
                  🌟 Family-owned and operated • Serving the Bay Area since 2020
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
