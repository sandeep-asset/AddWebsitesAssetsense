import {
  FaList,
  FaBolt,
  FaHeadphones,
  FaCircleCheck,
  FaXmark
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";  // ❌ different version

const reasons = [
  {
    icon: FaList,
    title: "More Listings",
    description: "Access exclusive commercial properties to grow your portfolio.",
  },
  {
    icon: FaCheckCircle,
    title: "Verified Leads",
    description: "Get quality inquiries from serious buyers and tenants.",
  },
  {
    icon: FaBolt,
    title: "Faster Closures",
    description: "Close deals quickly with streamlined support systems.",
  },
  {
    icon: FaHeadphones,
    title: "Full Support System",
    description: "Complete backend support for every stage of your deal.",
  },
];

const WhyBrokersChoose = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Brokers Choose Asset Sense
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need to grow your brokerage business in one platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-blue-600 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-blue-400 mx-auto">
                  <Icon className="h-7 w-7 text-gray-700 group-hover:text-black" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyBrokersChoose;