import {
  FaDesktop,
  FaUsers,
  FaCoffee,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";

const incomeOptions = [
  {
    icon: FaDesktop,
    title: "Virtual Office",
    description: "Business address & mail handling",
  },
  {
    icon: FaUsers,
    title: "Managed Office",
    description: "10/20 seat ready-to-use spaces",
  },
  {
    icon: FaCoffee,
    title: "Coworking",
    description: "Flexible workspace solutions",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Meeting Rooms",
    description: "Hourly & daily room rentals",
  },
  {
    icon: FaCalendarAlt,
    title: "Day/Monthly Pass",
    description: "Flexible access options",
  },
  {
    icon: FaHome,
    title: "Property Sale",
    description: "Complete property transactions",
  },
];

export default function IncomeStreams() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Multiple Ways to Earn
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            One property. Multiple income streams.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {incomeOptions.map((option, index) => (
            <div
              key={index}
              className="group border rounded-xl p-6 flex flex-col items-center text-center hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <option.icon className="h-6 w-6 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed hidden lg:block">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}