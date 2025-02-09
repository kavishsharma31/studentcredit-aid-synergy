
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
    </main>
  );
};

export default Index;
