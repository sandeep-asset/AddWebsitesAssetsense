import { FaCheck, FaStar } from "react-icons/fa";

const plans = [
  {
    name: "Silver Plan",
    highlight: true,
    badge: "Most Popular",
    price: "5,000",
    originalPrice: "10,000",
    period: "/month",
    description: "Perfect for getting started",
    adsBudget: "Recommended Ads Budget: ₹5,000/month",
    features: [
      
      
      "Property listing",
      "Google Ads management",
      "Lead capture system",
      "CRM access",
      "Drafting Agreements and E-Signature"
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Gold Plan",
    highlight: false,
    badge: null,
    price: "20,000",
    originalPrice: null,
    period: "/month",
    description: "For serious property owners",
    adsBudget: "Recommended Ads Budget: ₹10,000/month",
    features: [
      "Everything in Silver",
      "Google Business Profile Managment",
      "Social Media Marketing",
      "Influencer marketing",
      "Priority support",
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

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your property goals
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border bg-white p-6 transition flex flex-col ${
                plan.highlight
                  ? "border-blue-500 shadow-xl scale-[1.03]"
                  : "border-gray-200"
              }`}
            >
              
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                    plan.highlight
                      ? "bg-blue-600 text-white"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {plan.highlight && <FaStar className="text-[10px]" />}
                  {plan.badge}
                </div>
              )}

              {/* Content Wrapper */}
              <div className="flex flex-col h-full">
                
                {/* Top Content */}
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        ₹{plan.price}
                      </span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>

                    {/* Discount */}
                    {plan.originalPrice && (
                      <div className="mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">
                            ₹{plan.originalPrice}
                          </span>
                          <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                            50% OFF
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Limited time offer
                        </p>
                      </div>
                    )}

                    {/* Ads Budget */}
                    {plan.adsBudget && (
                      <div className="mt-3 p-2 bg-gray-100 rounded-lg border">
                        <p className="text-xs font-medium text-gray-900">
                          {plan.adsBudget}
                        </p>
                        <p className="text-xs text-gray-500">
                          (Separate from fee)
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <FaCheck className="text-green-500 mt-1 text-xs" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA (Always Bottom) */}
                <div className="mt-auto">
                  <a
                    href="#contact"
                    
                  >
                    <button
                      className={`w-full py-3 cursor-pointer rounded-lg font-medium transition ${
                        plan.highlight
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </a>
                </div>

              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}