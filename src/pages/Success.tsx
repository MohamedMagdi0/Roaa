import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Success = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Reservation Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your reservation. We will contact you shortly with
          confirmation details.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
