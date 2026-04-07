import { FaShieldAlt, FaUsers, FaBolt, FaAward } from "react-icons/fa";

const trustFeatures = [
  {
    icon: FaShieldAlt,
    title: "Asset Sense Trust",
    description:
      "Renowned name in Commercial Real Estate since 2012 in Delhi-NCR",
  },
  {
    icon: FaUsers,
    title: "Direct Lead Ownership",
    description:
      "Every lead is yours to manage and convert. Full transparency, full control.",
  },
  {
    icon: FaBolt,
    title: "Fast Onboarding",
    description:
      "Get listed in under 24 hours. Start receiving leads immediately.",
  },
  {
    icon: FaAward,
    title: "Verified Listings",
    description:
      "All properties are verified to ensure quality and authenticity.",
  },
];

const logos = [
  "TechPark Solutions",
  "Metro Business Hub",
  "Startup India",
  "WeWork India",
  "Regus",
];

const TrustSignals = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#EFF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TRUSTED BY */}
        {/*  */}

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-blue-900">Asset Sense?</span>
          </h2>
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="text-center group">
                
                {/* ICON */}
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition">
                  <Icon className="text-blue-900 text-xl" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustSignals;