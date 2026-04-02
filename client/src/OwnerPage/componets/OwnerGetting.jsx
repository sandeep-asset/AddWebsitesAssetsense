import {
  FaUserPlus,
  FaShieldAlt,
  FaFileAlt,
  FaGlobe,
  FaBullhorn,
  FaPhone,
  FaHandshake,
} from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    title: "Sign Up on Asset Sense",
    description: "Choose Property Owner",
  },
  {
    icon: FaShieldAlt,
    title: "Verify Mobile & Profile",
    description: "Quick OTP process",
  },
  {
    icon: FaFileAlt,
    title: "Share Property Details",
    description: "Just basic info—title, location",
  },
  {
    icon: FaGlobe,
    title: "We Create Your Listing",
    description: "Optimized for Google",
  },
  {
    icon: FaBullhorn,
    title: "Start Ads with ₹5,000 Budget",
    description: "We manage everything",
  },
  {
    icon: FaPhone,
    title: "Get Leads Directly",
    description: "Leads come to your phone",
  },
  {
    icon: FaHandshake,
    title: "Close Deals & Earn",
    description: "You close, you earn",
  },
];

export default function GettingStarted() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Getting Started is Easy
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start getting leads
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-200 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Icon + Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white border shadow-sm flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-md transition">
                    <step.icon className="h-5 w-5 text-blue-600" />
                  </div>

                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="bg-white rounded-xl border p-4 group-hover:border-blue-300 group-hover:shadow-sm transition">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}