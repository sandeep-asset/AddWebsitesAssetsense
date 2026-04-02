import { FaMobileAlt, FaBuilding, FaBullhorn, FaHandshake } from "react-icons/fa";

const steps = [
  {
    stepNumber: "01",
    stepIcon: FaMobileAlt,
    stepTitle: "Register & Verify",
    stepDescription: "Simple mobile OTP + Aadhaar verification",
  },
  {
    stepNumber: "02",
    stepIcon: FaBuilding,
    stepTitle: "List Your Property",
    stepDescription: "We help create and optimize your listing",
  },
  {
    stepNumber: "03",
    stepIcon: FaBullhorn,
    stepTitle: "Run Ads & Get Leads",
    stepDescription: "Google Ads brings interested clients",
  },
  {
    stepNumber: "04",
    stepIcon: FaHandshake,
    stepTitle: "Close Deals Directly",
    stepDescription: "You talk to clients and close deals",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Four simple steps to start getting leads for your property
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center group">
                  {/* Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-7xl font-bold text-blue-100 select-none">
                    {step.stepNumber}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border shadow-md flex items-center justify-center mb-6 group-hover:border-blue-400 transition">
                    <step.stepIcon className="h-7 w-7 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.stepTitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.stepDescription}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <svg
                      className="w-8 h-8 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}