
import { MessageSquare, Star, UserRound } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Medical Student",
      message: "CreditAI made it possible for me to pursue my dream of medical school. Their AI-driven approach looked at my academic achievements rather than just credit history.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Engineering Student",
      message: "The process was incredibly smooth and transparent. I got approved within 24 hours and the rates were better than any traditional lender I approached.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Law Student",
      message: "What stands out about CreditAI is their dedicated support team. They guided me through every step and made the entire process stress-free.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "David Park",
      role: "Business Student",
      message: "As an international student, getting financial support was challenging until I found CreditAI. Their platform truly understands student potential.",
      rating: 5,
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who transformed their educational journey with CreditAI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <UserRound className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
              <div className="flex-1 flex items-start">
                <MessageSquare className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">{testimonial.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
