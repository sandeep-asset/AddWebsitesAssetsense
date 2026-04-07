import { FaCheck, FaStar } from "react-icons/fa";

const packages = [
  {
    name: "Silver",
    description: "Perfect for getting started",
    featured: false,
    features: [
      "Basic lead volume",
      "Standard listing visibility",
      "Email support",
      "Monthly performance report",
      "Access to property dashboard",
    ],
    cta: "Get Started",
  },
  {
    name: "Gold",
    description: "Most popular choice",
    featured: true,
    features: [
      "Enhanced lead volume",
      "Priority listing placement",
      "Priority support",
      "Weekly performance reports",
      "Featured property badge",
      "Social media promotion",
    ],
    cta: "Get Gold",
  },
  {
    name: "Platinum",
    description: "Maximum visibility & leads",
    featured: false,
    features: [
      "Maximum lead volume",
      "Top listing placement",
      "Dedicated account manager",
      "Real-time analytics dashboard",
      "Premium property showcase",
      "Multi-channel promotion",
      "Custom marketing materials",
    ],
    cta: "Go Platinum",
  },
];

const PricingSection = () => {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Choose Your <span className="text-blue-600">Package</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select the plan that matches your property goals. More visibility means more leads.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-6 transition-all duration-300 bg-white ${
                pkg.featured
                  ? "border-blue-600 shadow-xl scale-105"
                  : "border-gray-200 hover:shadow-lg"
              }`}
            >
              
              {/* POPULAR BADGE */}
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg flex items-center gap-1">
                  <FaStar className="text-[10px]" />
                  Popular
                </div>
              )}

              {/* HEADER */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mt-1">{pkg.description}</p>
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    
                    <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center mt-1">
                      <FaCheck className="text-yellow-600 text-[10px]" />
                    </div>

                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                onClick={scrollToForm}
                className={`w-full py-3 rounded-lg font-medium transition ${
                  pkg.featured
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;