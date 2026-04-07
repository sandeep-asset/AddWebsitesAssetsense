import { FaArrowDown } from "react-icons/fa";

const HeroPropertyList = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#EBEEF5]">
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,64,175,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Turn Your Commercial Property into a{" "}
              <span className="text-blue-900">Revenue Engine</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              List on AssetSense.in and earn through Virtual Offices, Coworking,
              Managed Spaces, or Direct Resale.{" "}
              <span className="font-semibold text-gray-900">
                No middlemen, just results.
              </span>
            </p>

            {/* BUTTON */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://www.assetsense.in/register">
              <button
                onClick={scrollToForm}
                className="flex items-center cursor-pointer justify-center gap-2 bg-[#189533] hover:bg-green-700 text-white text-lg font-medium px-3 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                List Your Property Now




                <FaArrowDown className="text-sm" />
              </button>
              </a>
            </div>

            {/* FEATURES */}
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500 flex-wrap">
              
              {["No Commission", "Direct Leads", "Full Control"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-700" />
                  <span>{item}</span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/welldone2.png"
                alt="Property Owner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border">
              <div className="flex items-center gap-3">
                
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-900">4+</span>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Ways to Monetize</p>
                  <p className="text-sm text-gray-500">Your Property</p>
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