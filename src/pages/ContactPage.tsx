import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-95">
              Get in touch with our team to book your next adventure
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
