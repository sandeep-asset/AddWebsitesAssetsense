import {
  FaVideo,
  FaHandshake,
  FaStar,
  FaCrown,
  FaCheck
 
} from "react-icons/fa";

const plans = [
  {
    name: "Silver Plan",
    highlight: true,
    badge: "Most Popular",
    price: "5,000",
    originalPrice: "10,000",
    period: "/month",
    iconColor: "text-yellow-600",
    description: "Perfect for getting started",
    adsBudget: "Recommended Ads Budget: ₹5,000/month",
    features: [
      "30-Day Free Trial",
      "1-year plan",
      "Property listing",
      "Google Ads management",
      "Lead capture system",
      "CRM access",
    ],
    
    cta: "Start Free Trial",
  },
  {
    name: "Gold Plan",
    highlight: false,
    badge: null,
    price: "20,000",
    originalPrice: null,
    iconColor: "text-gray-700",
    period: "/month",
    description: "For serious Business Partners",
    adsBudget: "Recommended Ads Budget: ₹10,000/month",
    features: [
      "Everything in Silver",
      "1-year plan",
      "Priority support",
      "Influencer marketing",
      "Enhanced visibility",
      "Advanced analytics",
    ],
    
    cta: "Get Started",
  },
  {
    name: "Platinum Plan",
    highlight: false,
    badge: "Best for Resale",
    price: "50,000",
    originalPrice: null,
    iconColor: "text-gray-700",
    period: " one-time",
    description: "Quick property resale",
    adsBudget: null,
    features: [
      "0.5% on sale value",
      "3-month contract",
      "Dedicated account manager",
      "Premium listing placement",
      "Professional photography",
      "Virtual tours",
      "Priority marketing",
    ],
    
    cta: "Contact Us",
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Simple, Transparent Pricing
      </h2>
      <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
        Choose the plan that works best for your property goals
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative rounded-2xl border p-6 bg-white transition-all flex flex-col h-full ${
            plan.highlight
              ? "border-black shadow-xl scale-[1.03]"
              : "border-gray-200 hover:shadow-lg"
          }`}
        >
          {/* Badge */}
          {plan.badge && (
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                plan.highlight
                  ? "bg-green-600 text-white"
                  : "bg-green-600 text-gray-100"
              }`}
            >
              {plan.highlight && <FaStar className="text-xs" />}
              {plan.badge}
            </div>
          )}

          {/* Content Wrapper */}
          <div className="flex flex-col flex-1">

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500">
                {plan.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="mb-6">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {plan.originalPrice && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm line-through text-gray-400">
                      ₹{plan.originalPrice}
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                      50% OFF
                    </span>
                  </div>
                </div>
              )}

              {plan.adsBudget && (
                <div className="mt-3 p-2 bg-gray-100 rounded-lg border">
                  <p className="text-xs font-medium text-gray-800">
                    {plan.adsBudget}
                  </p>
                </div>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheck className="mt-1 text-green-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Visual */}
            

            {/* CTA → ALWAYS BOTTOM */}
            <button
              onClick={() => window.open("https://assetsense.in/register", "_blank")}
              className={`mt-auto w-full py-3 rounded-lg cursor-pointer font-medium transition ${
                plan.highlight
                  ? "bg-black text-white hover:bg-gray-800"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {plan.cta}
            </button>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default PricingSection;