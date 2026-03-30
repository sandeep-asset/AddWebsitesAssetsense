import {
  FaChartLine,
  FaUsers,
  FaHeadphones,
  FaAward,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaChartLine,
    text: "More deals without extra marketing effort",
  },
  {
    icon: FaUsers,
    text: "Direct client access (no dependency)",
  },
  {
    icon: FaHeadphones,
    text: "Professional support system",
  },
  {
    icon: FaAward,
    text: "Build personal brand",
  },
  {
    icon: FaWallet,
    text: "Increase income potential",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Benefits for Business Partner
            </h2>

            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Join thousands of successful Business Partner who have transformed their business with Asset Sense.
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <li
                    key={index}
                    className="flex items-center gap-4 rounded-lg bg-gray-100 p-4 transition-all hover:bg-gray-200"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
                      <Icon className="h-5 w-5 text-black" />
                    </div>

                    <span className="text-sm sm:text-base font-medium text-gray-800">
                      {benefit.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Stats Card */}
          <div className="relative">
            <div className="rounded-2xl bg-blue-600 p-6 sm:p-8 text-white shadow-lg">
              
              {/* Title */}
              <div className="mb-6 flex items-center gap-2">
                <FaCheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                <span className="text-lg sm:text-xl font-bold">
                  Why Asset Sense?
                </span>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                
                <div className="rounded-lg bg-white/10 p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">
                    Active Business Partner
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    1000+
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">
                    Properties Listed
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">
                    Business Partner Satisfaction
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;