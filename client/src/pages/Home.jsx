import { FaBuilding, FaUserTie, FaBullhorn } from "react-icons/fa";

export default function HomePage() {
  const options = [
    {
      title: "Business Partner",
      description: "Collaborate with us and grow your business ecosystem.",
      icon: FaUserTie,
      link: "/business-partner",
    },
    {
      title: "Property Owner",
      description: "List your property and start generating leads.",
      icon: FaBuilding,
      link: "/property-owners",
    },
    {
      title: "Prop Influencer",
      description: "Promote properties and earn recurring income.",
      icon: FaBullhorn,
      link: "/prop-influencers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Choose Your Path
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Select how you want to get started with Asset Sense
        </p>

        {/* Options */}
        <div className="grid md:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="group p-8 bg-white border rounded-2xl hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                  <option.icon className="text-blue-600 text-xl" />
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {option.title}
                </h2>

                <p className="text-sm text-gray-600">
                  {option.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
