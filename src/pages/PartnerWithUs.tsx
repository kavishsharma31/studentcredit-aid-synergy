
import Navigation from "@/components/Navigation";
import PartnerForm from "@/components/PartnerForm";

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8">Partner With Us</h1>
        <div className="max-w-2xl mx-auto">
          <PartnerForm />
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
