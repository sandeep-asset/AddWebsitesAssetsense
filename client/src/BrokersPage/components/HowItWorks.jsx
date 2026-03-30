import {
  FaUserPlus,
  FaUserCircle,
  FaList,
  FaBullhorn,
  FaTrophy,
} from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    step: "Step 1",
    title: "Register on Asset Sense",
    description: "Create your free account in minutes.",
  },
  {
    icon: FaUserCircle,
    step: "Step 2",
    title: "Create Your Broker Profile",
    description: "Build your professional online presence.",
  },
  {
    icon: FaList,
    step: "Step 3",
    title: "List Properties or Choose Listings",
    description: "Add your properties or browse our listings.",
  },
  {
    icon: FaBullhorn,
    step: "Step 4",
    title: "Run Ads & Get Leads",
    description: "We help you reach serious buyers.",
  },
  {
    icon: FaTrophy,
    step: "Step 5",
    title: "Close Deals with Backend Support",
    description: "Complete deals with our full support.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-[#0E3A6D] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Get started in 5 simple steps and begin closing more deals.
          </p>
        </div>

        <div className="mt-16">
          
          {/* ✅ Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              
              {/* Line */}
              <div className="absolute left-0 right-0 top-14 h-0.5 bg-white/30" />

              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Circle */}
                      <div className="relative z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-4 ring-blue-600 transition-all hover:bg-white/20">
                        <Icon className="h-10 w-10 text-blue-500" />
                      </div>

                      <span className="mb-2 text-sm font-semibold text-blue-500">
                        {step.step}
                      </span>

                      <h3 className="mb-2 text-base font-bold">
                        {step.title}
                      </h3>

                      <p className="text-sm text-white/70">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ✅ Mobile / Tablet Timeline */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="flex gap-4">
                    
                    {/* Icon + Line */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-2 ring-blue-400">
                        <Icon className="h-6 w-6 text-blue-300" />
                      </div>

                      {index < steps.length - 1 && (
                        <div className="mt-2 h-full w-0.5 bg-white/30" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <span className="text-sm font-semibold text-blue-300">
                        {step.step}
                      </span>

                      <h3 className="mb-1 text-base sm:text-lg font-bold">
                        {step.title}
                      </h3>

                      <p className="text-sm text-white/70">
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

export default HowItWorks;