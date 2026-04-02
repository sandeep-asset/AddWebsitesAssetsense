import {
  FaFileAlt,
  FaBullseye,
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
  FaFileSignature,
} from "react-icons/fa";

const services = [
  {
    icon: FaFileAlt,
    title: "Property Listing",
    description: "Professional property profiles",
  },
  {
    icon: FaBullseye,
    title: "Google Ads Management",
    description: "Optimized ad campaigns",
  },
  {
    icon: FaGlobe,
    title: "Landing Pages",
    description: "High-converting web pages",
  },
  {
    icon: FaMobileAlt,
    title: "Lead Capture System",
    description: "Never miss a lead",
  },
  {
    icon: FaDatabase,
    title: "CRM & Backend",
    description: "Complete management tools",
  },
  {
    icon: FaFileSignature,
    title: "Documentation & E-Sign",
    description: "Paperless processes",
  },
];

export default function WhatWeHandle() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What We Handle for You
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            You focus on closing deals. We handle everything else.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border hover:border-blue-400 hover:shadow-md transition-all group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-1">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}