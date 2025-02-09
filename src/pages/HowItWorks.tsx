
import Navigation from "@/components/Navigation";
import { Brain, ChartBar, CreditCard, User } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: User,
      title: "Student Application",
      description:
        "Complete a simple application with your academic and personal information",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our AI evaluates multiple data points to assess creditworthiness beyond traditional metrics",
    },
    {
      icon: ChartBar,
      title: "Risk Assessment",
      description:
        "Advanced algorithms categorize risk profiles for accurate evaluation",
    },
    {
      icon: CreditCard,
      title: "Loan Decision",
      description: "Receive a quick decision on your loan application",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-gradient-to-b from-white to-blue-50 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How CreditAI Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform revolutionizes student credit assessment,
              making loans accessible without traditional requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="glass p-6 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorksPage;
