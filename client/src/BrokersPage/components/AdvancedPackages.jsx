import {
  FaVideo,
  FaHandshake,
  FaStar,
  FaCrown,
  FaArrowRight,
} from "react-icons/fa";

const packages = [
  {
    name: "Gold Package",
    icon: FaStar,
    gradient: "from-yellow-200 to-yellow-100",
    border: "border-yellow-400 hover:border-yellow-500",
    iconColor: "text-yellow-600",
    features: [
      "Prop-Influencers promote your listings",
      "Social media visibility",
      "Content creation support",
    ],
    visual: FaVideo,
    visualText: "Influencer marketing for your properties",
  },
  {
    name: "Platinum Package",
    icon: FaCrown,
    gradient: "from-gray-200 to-gray-100",
    border: "border-gray-400 hover:border-gray-500",
    iconColor: "text-gray-700",
    features: [
      "Deal closure support for resale properties",
      "Assistance in final negotiation",
      "Complete execution support",
    ],
    visual: FaHandshake,
    visualText: "End-to-end deal closure assistance",
  },
];

const AdvancedPackages = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Advanced Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Take your brokerage to the next level with premium packages.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:gap-8 lg:grid-cols-2">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const Visual = pkg.visual;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br ${pkg.gradient} ${pkg.border} p-6 transition-all hover:shadow-xl`}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-white ${pkg.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {pkg.name}
                  </h3>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-400">
                        <FaArrowRight className="h-3 w-3 text-black" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-800">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Info */}
                <div className="mt-6 flex items-center gap-3 rounded-lg bg-white/60 p-4 backdrop-blur-sm">
                  <Visual className={`h-7 w-7 sm:h-8 sm:w-8 ${pkg.iconColor}`} />
                  <p className="text-sm text-gray-700">
                    {pkg.visualText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://assetsense.in/register"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Explore Premium Packages
            <FaArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AdvancedPackages;