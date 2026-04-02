import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Start Getting Clients for Your Property in 30 Days
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Try it risk-free. Cancel anytime.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://assetsense.in/register">
            <button className="flex items-center cursor-pointer text-lg px-10 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                Start Free Trial
                <FaArrowRight className="ml-2" />
            </button>
            </a>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-500 text-sm" />
            <span>30-Day Free Trial</span>
          </div>

          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-500 text-sm" />
            <span>No Credit Card Required</span>
          </div>

          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-500 text-sm" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}