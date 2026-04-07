import { FaCog, FaBuilding, FaBox, FaBullseye } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaCog,
    title: "Choose Your Services",
    description:
      "Select how you want to monetize your property — Virtual Office, Coworking, Managed Office, or Resale.",
  },
  {
    number: "02",
    icon: FaBuilding,
    title: "List Your Property",
    description:
      "Share your property details and join the AssetSense ecosystem in minutes.",
  },
  {
    number: "03",
    icon: FaBox,
    title: "Select Your Package",
    description:
      "Choose between Silver, Gold, or Platinum packages based on your visibility needs.",
  },
  {
    number: "04",
    icon: FaBullseye,
    title: "Close Deals",
    description:
      "Get direct leads delivered to you and handle them yourself — no middlemen involved.",
  },
];

const OnboardingSteps = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#EFF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Get Started in <span className="text-blue-900">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our streamlined onboarding process gets you earning in no time.
          </p>
        </div>

        {/* DESKTOP TIMELINE */}
        <div className="hidden lg:block">
          <div className="relative">
            
            {/* Line */}
            <div className="absolute top-16 left-0 right-0 h-[2px] bg-gray-600" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative text-center">
                    
                    {/* Circle */}
                    <div className="relative z-10 mx-auto h-32 w-32 rounded-full bg-white border-4 border-blue-900 flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-blue-900">
                          {step.number}
                        </span>
                        <Icon className="text-blue-900 text-2xl mx-auto mt-1" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE TIMELINE */}
        <div className="lg:hidden">
          <div className="relative">
            
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative flex gap-6">
                    
                    {/* Circle */}
                    <div className="relative z-10 flex-shrink-0 h-16 w-16 rounded-full bg-white border-4 border-blue-900 flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-blue-900">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="text-blue-900 text-sm" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-900 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OnboardingSteps;