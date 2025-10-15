import Navigation from "@/components/Navigation";
import FAQComponent from "@/components/FAQ";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-95">
              Find answers to common questions about renting with Delta RV
            </p>
          </div>
        </section>

        <FAQComponent />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
