
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />
      
      <div className="container mx-auto px-4 h-[calc(100vh-4rem)] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                AI-Powered Student Credit
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empowering Students with Smart Credit
              <span className="block text-primary">No Co-Signer, No Hassle!</span>
            </h1>
            
            <p className="text-lg text-gray-600 md:pr-12">
              Our AI evaluates your true potential beyond traditional credit scores,
              making student loans accessible and fair.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg">
                Check Your Credit Score
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Partner with Us
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">96%</p>
                <p className="text-sm text-gray-600">Approval Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24h</p>
                <p className="text-sm text-gray-600">Fast Processing</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50k+</p>
                <p className="text-sm text-gray-600">Students Helped</p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent rounded-full filter blur-3xl" />
            <img
              src="/placeholder.svg"
              alt="Student using app"
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
