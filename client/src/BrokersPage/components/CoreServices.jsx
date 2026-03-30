import {
  FaBuilding,
  FaBullseye,
  FaUserCheck,
  FaFileSignature,
  FaUserCircle,
  FaPenNib,
  FaDoorOpen,
} from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Commercial Listing Platform",
    description: "Exclusive platform focused only on commercial properties.",
  },
  {
    icon: FaBullseye,
    title: "Google Ads Management",
    description: "Run targeted ads to attract serious buyers and tenants.",
  },
  {
    icon: FaUserCheck,
    title: "Direct Leads",
    description: "Get inquiries directly from interested clients.",
  },
  {
    icon: FaFileSignature,
    title: "Documentation Support",
    description: "Agreement drafting, stamp paper, notarization, and e-sign.",
  },
  {
    icon: FaUserCircle,
    title: "Company Profile Page",
    description: "Create your professional identity online.",
  },
  {
    icon: FaPenNib,
    title: "Blogs for Brokers",
    description: "Share insights and build authority in the market.",
  },
  {
    icon: FaDoorOpen,
    title: "Meeting Rooms Access",
    description: "Use meeting rooms at listed coworking spaces to close deals.",
  },
];

const CoreServices = () => {
  return (
    <section id="services" className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            What You Get
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Core services designed to help you succeed in commercial real estate.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group flex flex-col rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-all group-hover:bg-blue-400">
                  <Icon className="h-6 w-6 text-blue-600 group-hover:text-black" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreServices;