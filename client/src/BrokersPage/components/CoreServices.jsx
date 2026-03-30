import {
  FaBuilding,
  FaBullseye,
  FaUserCheck,
  FaFileSignature,
  FaUserCircle,
  FaPenNib,
  FaDoorOpen,
   FaStar,
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
    title: "Blogs for Business Partners",
    description: "SEO-Optimised Blog Content to drive organic traffic to your landing page.",
  },
  {
    icon: FaDoorOpen,
    title: "Meeting Rooms Access",
    description: "Close your deals at any of the Asset Sense Workspaces Coworking center.",
  },
  {
    icon: FaStar,
    title: "Google Business Profile",
    description: "We help you collect reviews. Builds trust with future clients.",
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