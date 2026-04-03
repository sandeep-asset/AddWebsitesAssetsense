
import { FaBuilding, FaBullhorn, FaUsers, FaGlobe } from "react-icons/fa";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const highlights = [
  { icon: FiCheckCircle, text: "30-Day Free Trial" },
  { icon: FiCheckCircle, text: "Cancel Anytime" },
  { icon: FaUsers, text: "Direct Leads to You" },
  { icon: FaGlobe, text: "Google Visibility" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-purple-100/40" />

      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 mb-6">
              For Commercial Property Owners
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Turn Your Property into a{" "}
              <span className="text-blue-600">
                Lead-Generating Machine
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Get direct clients, run ads, and earn more from your commercial
              space—without depending on brokers.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <item.icon className="h-4 w-4 text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://assetsense.in/register" target="_blank" rel="noopener noreferrer">
              <button className="text-base px-8 py-3 cursor-pointer rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
                Start Free Trial
                <FiArrowRight className="ml-2" />
              </button>
              </a>
             <a href="https://assetsense.in/register" target="_blank" rel="noopener noreferrer">
              <button className="text-base px-8 py-3 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                Learn More
              </button>
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-3xl blur-3xl" />

            <div className="relative bg-white rounded-2xl border p-8 shadow-lg">
              <div className="flex flex-col items-center gap-6">
                {/* Flow */}
                <div className="grid grid-cols-4 gap-4 w-full">
                  {[
                    { icon: FaBuilding, label: "Property", color: "bg-blue-100 text-blue-600" },
                    { icon: FaBullhorn, label: "Ads", color: "bg-purple-100 text-purple-600" },
                    { icon: FaUsers, label: "Leads", color: "bg-blue-100 text-blue-600" },
                    { icon: FiCheckCircle, label: "Owner", color: "bg-purple-100 text-purple-600" },
                  ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                      <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-2`}>
                        <step.icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-medium text-gray-800">
                        {step.label}
                      </span>

                      {index < 3 && (
                        <FiArrowRight className="hidden sm:block absolute right-[-18px] top-5 text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-gray-200 my-4" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 w-full text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-500">Properties Listed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10K+</div>
                    <div className="text-xs text-gray-500">Leads Generated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-xs text-gray-500">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

