import { FaGlobe, FaChair, FaBuilding, FaHandshake } from "react-icons/fa";

const waysToEarn = [
  {
    icon: FaGlobe,
    title: "Virtual Office",
    description:
      "Earn rent without foot traffic. Provide business addresses and mail handling services.",
    highlight: "Passive Income",
  },
  {
    icon: FaChair,
    title: "Coworking Seats",
    description:
      "Choose between Daily Pass and Monthly Pass for maximum occupancy.",
    highlight: "Per Seat Revenue",
  },
  {
    icon: FaBuilding,
    title: "Managed Office",
    description:
      "Turn floor space into premium enterprise suites. We handle operations, you earn.",
    highlight: "Premium Returns",
  },
  {
    icon: FaHandshake,
    title: "Resale Deals",
    description:
      "Sell at a fair price with zero middleman interference. Direct buyer connections.",
    highlight: "Zero Commission",
  },
];

const WaysToEarn = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#EFF2F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            4 Ways to <span className="text-blue-900">Earn</span> from Your Property
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose how you want to monetize your commercial space. Multiple options,
            maximum flexibility.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {waysToEarn.map((way, index) => {
            const Icon = way.icon;

            return (
              <div
                key={index}
                className="h-full border border-gray-200 hover:border-blue-900 hover:shadow-lg transition-all duration-300 rounded-xl p-6 group bg-white"
              >
                
                {/* ICON */}
                <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                  <Icon className="text-blue-900 text-2xl" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {way.title}
                </h3>

                {/* HIGHLIGHT */}
                <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {way.highlight}
                </span>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {way.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WaysToEarn;