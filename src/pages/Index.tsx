
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
    </main>
  );
};

export default Index;
