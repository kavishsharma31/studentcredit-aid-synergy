
import { AlertCircle, Book, Brain, CreditCard, GraduationCap, Lock, Stars, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Assessment",
      description: "Our advanced AI evaluates your academic potential beyond traditional credit scores",
    },
    {
      icon: Lock,
      title: "No Co-Signer Required",
      description: "Get approved based on your own merit without needing a co-signer",
    },
    {
      icon: Stars,
      title: "Competitive Interest Rates",
      description: "Access student-friendly interest rates based on your academic performance",
    },
    {
      icon: CreditCard,
      title: "Quick Disbursement",
      description: "Receive funds directly to your account once approved",
    },
    {
      icon: Book,
      title: "Educational Resources",
      description: "Access financial literacy materials and educational content",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 customer support to assist with your queries",
    },
    {
      icon: AlertCircle,
      title: "Transparent Terms",
      description: "Clear and straightforward loan terms with no hidden fees",
    },
    {
      icon: GraduationCap,
      title: "Academic Rewards",
      description: "Earn benefits for maintaining good academic performance",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose CreditAI?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our innovative platform makes student credit accessible
            and manageable for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass p-6 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
