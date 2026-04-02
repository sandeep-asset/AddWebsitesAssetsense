import {
  FaUsers,
  FaChartLine,
  FaLayerGroup,
  FaShieldAlt,
  FaHeadphones,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaUsers,
    title: "Direct Leads",
    description:
      "No middlemen, no brokers. Connect directly with interested clients.",
  },
  {
    icon: FaChartLine,
    title: "Higher Visibility",
    description:
      "Your property ranks higher on Google with our SEO optimization.",
  },
  {
    icon: FaLayerGroup,
    title: "Multiple Income Options",
    description:
      "Earn from coworking, virtual office, meeting rooms, and more.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted Platform",
    description:
      "Verified owners and clients for safe, secure transactions.",
  },
  {
    icon: FaHeadphones,
    title: "Full Support System",
    description:
      "Dedicated team to help you at every step of the journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Asset Sense
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The smart way to monetize your commercial property
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-white border hover:border-blue-400 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <reason.icon className="h-5 w-5 text-blue-600" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}