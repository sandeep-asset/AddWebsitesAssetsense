import {
  FaUsers,
  FaBullhorn,
  FaFileAlt,
  FaBuilding,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const highlights = [
  { icon: FaUsers, text: "Direct Leads" },
  { icon: FaBullhorn, text: "Google Ads Support" },
  { icon: FaFileAlt, text: "Legal & Documentation Help" },
  { icon: FaBuilding, text: "Exclusive Commercial Listings" },
];

const flowSteps = ["Business Partner", "Listings", "Google Ads", "Leads", "Closed Deals"];

const BrokerHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0E3A6D] py-16 text-white sm:py-24 lg:py-32">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Scale Your Commercial Brokerage Business with <span className="text-yellow-500">More Leads & Faster Closures</span> 
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            Join Asset Sense and access listings, leads, and complete backend support for commercial property deals.
          </p>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm transition-transform hover:scale-105"
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="https://assetsense.in/register"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              Register as Business Partner
              <FaArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Flow Section */}
          <div className="mt-16">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-white/60">
              Your Journey with Asset Sense
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {flowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-4">
                  
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 sm:px-4 sm:py-3">
                    <FaCheckCircle className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                    <span className="text-sm font-medium sm:text-base">
                      {step}
                    </span>
                  </div>

                  {index < flowSteps.length - 1 && (
                    <FaArrowRight className="hidden h-4 w-4 text-white/40 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrokerHeroSection;