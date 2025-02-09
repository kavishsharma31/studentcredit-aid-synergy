
import Navigation from "@/components/Navigation";
import EligibilityForm from "@/components/EligibilityForm";

const CheckEligibility = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8">Check Your Eligibility</h1>
        <div className="max-w-2xl mx-auto">
          <EligibilityForm />
        </div>
      </div>
    </div>
  );
};

export default CheckEligibility;
