import { FaArrowDown } from "react-icons/fa";

const HeroPropertyList = () => {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center py-10 lg:py-20 overflow-hidden bg-[#EBEEF5]">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,64,175,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Turn Your Commercial Property into {" "}
              <span className="text-blue-900">Multiple Streams of Income</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Turn your vacant office into a high-yield asset. List on <span className="text-blue-900 font-medium">Asset Sense Workspaces</span> for direct access to high-demand leads for Virtual Offices, Coworking, and Managed Spaces. Zero commissions, 100% control. {" "}
              <span className="font-semibold text-gray-900">
                No middlemen, just results.
              </span>
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <a href="#contact">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#189533] hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg"
                >
                  List Your Property Now
                  <FaArrowDown />
                </button>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500">
              {["No Commission", "Direct Leads", "Full Control"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col items-center">
            
            {/* IMAGE FIX */}
            <div className="w-full max-w-lg lg:max-w-none h-[250px] sm:h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/owner.png"
                alt="Property Owner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING CARD FIX */}
            <div className="
              mt-4 w-full max-w-xs
              lg:absolute lg:-bottom-20 lg:left-6 lg:mt-0
              bg-white p-4 rounded-xl shadow-lg border
            ">
              <div className="flex items-center gap-3">
                
                <div className="h-8 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-900">4+</span>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Ways to Monetize
                  </p>
                  <p className="text-sm text-gray-500">
                    Your Property
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroPropertyList;