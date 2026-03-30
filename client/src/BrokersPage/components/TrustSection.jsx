import {
  FaShieldAlt,
  FaMobileAlt,
  FaFingerprint,
  FaUsers,
  FaQuoteLeft,
} from "react-icons/fa";

const trustFactors = [
  {
    icon: FaMobileAlt,
    title: "OTP Verification",
    description: "Secure login with mobile OTP.",
  },
  {
    icon: FaFingerprint,
    title: "Aadhaar Verified",
    description: "All brokers are verified for authenticity.",
  },
  {
    icon: FaShieldAlt,
    title: "Genuine Ecosystem",
    description: "Only verified properties and brokers.",
  },
  {
    icon: FaUsers,
    title: "Trusted Network",
    description: "Join a community of professional brokers.",
  },
];

const testimonials = [
  {
    quote:
      "Asset Sense helped me close 3 deals in my first month. The backend support is excellent!",
    author: "Rajesh Kumar",
    role: "Commercial Broker, Mumbai",
  },
  {
    quote:
      "Finally a platform that understands what brokers need. The leads are genuine and the support is top-notch.",
    author: "Priya Sharma",
    role: "Property Consultant, Delhi",
  },
  {
    quote:
      "The documentation support alone saves me so much time. Highly recommend Asset Sense.",
    author: "Amit Patel",
    role: "Real Estate Agent, Bangalore",
  },
];

const TrustSection = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Trusted by Brokers Across India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            We ensure a secure and genuine ecosystem for all our brokers.
          </p>
        </div>

        {/* Trust Factors */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                  <Icon className="h-6 w-6 text-black" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {factor.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl sm:text-2xl font-bold text-gray-900">
            What Brokers Say
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="mb-4 h-6 w-6 text-blue-600 opacity-70" />

                {/* Quote */}
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;