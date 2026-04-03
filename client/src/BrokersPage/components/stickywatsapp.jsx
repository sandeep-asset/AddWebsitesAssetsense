// App.jsx or Layout.jsx
import { FaWhatsapp } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";

function StickyWatsapp() {
  const location = useLocation();

  // ✅ Route-based messages
  const whatsappMessages = {
    "/":
      "Hi, I want to know more about Asset Sense services.",

    "/prop-influencers":
      "Hi, I am interested in joining the Asset Sense Prop-Influencer Program. I need more info on this.",

    "/property-owners":
      "Hi, I am interested in onboarding my commercial property on Asset Sense Workspaces. Please share more info on this.",

    "/business-partner":
      "Hi, I want to join Asset Sense as a Business Partner. Please share more info on this.",
  };

  // ✅ Pick message based on route
  const message =
    whatsappMessages[location.pathname] ||
    "Hi, I want to know more about Asset Sense.";

  const phoneNumber = "919907800600";

  // ✅ Encode message for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <Outlet />

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-2.5 right-4 z-50 animate-scale-in">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white shadow-xl rounded-full p-2 transition-all duration-300 hover:shadow-2xl"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}

export default StickyWatsapp;