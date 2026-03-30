import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const ctaPoints = [
  "Free registration",
  "No hidden charges",
  "Instant access to listings",
  "24/7 support available",
];

const FinalCTA = () => {
  return (
    <section className="bg-blue-800 py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Start Getting More Deals Today
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Join Asset Sense and grow your brokerage business with the right tools and support.
        </p>

        {/* Points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {ctaPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <FaCheckCircle className="h-4 w-4 text-blue-300" />
              <span className="text-xs sm:text-sm font-medium">{point}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="https://assetsense.in/register"
            className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg transition-all  hover:shadow-xl"
          >
            Register as Broker
            <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-xs sm:text-sm text-white/70">
          Join 500+ brokers already growing their business with Asset Sense
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;