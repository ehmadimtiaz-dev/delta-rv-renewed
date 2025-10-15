import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      date: "March 2025",
      rating: 5,
      review: "Amazing experience! The RV was spotless and had everything we needed for our week-long trip. The team at Delta RV was incredibly helpful during pickup and answered all our questions. We took the Delta Diva to Yosemite and our kids absolutely loved it. The bunk beds were perfect for them, and the outdoor grill made meal times a breeze. We'll definitely be renting from Delta RV again next summer!"
    },
    {
      name: "John D.",
      date: "February 2025",
      rating: 5,
      review: "Professional service from start to finish. The team was helpful with all our questions and the RV was in perfect condition. They took the time to walk us through everything before we left, which made us feel very confident. The Delta Diamond was spacious enough for our family of 6, and having all the kitchen equipment included saved us so much money and hassle. Highly recommend!"
    },
    {
      name: "Lisa K.",
      date: "January 2025",
      rating: 5,
      review: "Our kids loved the bunk beds! The RV was comfortable and well-equipped with everything we needed. We appreciated that they provided linens, towels, and even board games. The Blackstone grill was a huge hit - we cooked some amazing meals at our campsite. Delta RV made our first RV experience stress-free and enjoyable."
    },
    {
      name: "Michael R.",
      date: "December 2024",
      rating: 5,
      review: "Great value for the price! We rented the Delta Diva for a long weekend trip and it exceeded our expectations. The trailer was easy to tow with our truck, and the setup was straightforward thanks to the tutorial we received. Everything was clean and in excellent working order. The customer service was outstanding - they checked in with us during our trip to make sure everything was going well."
    },
    {
      name: "Jennifer P.",
      date: "November 2024",
      rating: 5,
      review: "This was our third rental with Delta RV and they never disappoint! The consistency in quality and service keeps us coming back. The RVs are always immaculate, fully stocked, and ready to go. We love that they include the tow package and all the camping essentials. It makes planning our trips so much easier!"
    },
    {
      name: "David T.",
      date: "October 2024",
      rating: 5,
      review: "Fantastic family adventure! We took the Delta Diamond to Lake Tahoe and had the best time. The RV slept all 8 of us comfortably, and having multiple bathrooms was a lifesaver. The kitchen was fully equipped - we didn't have to buy anything extra. Delta RV's communication was excellent throughout the entire process. Five stars all around!"
    },
    {
      name: "Amanda S.",
      date: "September 2024",
      rating: 5,
      review: "Best RV rental experience! As first-time RV renters, we were nervous, but the Delta RV team made it so easy. They patiently answered all our questions and provided clear instructions. The RV was beautiful and had modern amenities that made our trip comfortable. We loved the add-on options too - the Traeger smoker was a game changer!"
    },
    {
      name: "Robert H.",
      date: "August 2024",
      rating: 5,
      review: "Highly recommend Delta RV Rentals! We've rented from other companies before, but Delta RV stands out with their attention to detail and customer care. The RV was in pristine condition, and they include so many extras that other companies charge for. The booking process was smooth, and pickup/dropoff was efficient. Will definitely rent again!"
    },
    {
      name: "Emily W.",
      date: "July 2024",
      rating: 5,
      review: "Perfect for our family vacation! We rented the Delta Diva for two weeks and explored California's coast. The RV handled beautifully on the road, and the interior was comfortable and cozy. Our teenagers loved having their own space in the bunks. Everything worked perfectly, and we appreciated the 24/7 support line for peace of mind."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Customer Reviews
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-95">
              Hear what our happy customers have to say about their Delta RV experience
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    "{review.review}"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Own Adventure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing family of satisfied customers and book your RV today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href="/rentals">View Available RVs</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
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

export default Reviews;
