import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Replace with your number
  const message = encodeURIComponent(
    "I want to know multiple options to earn from my commercial property."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden sm:inline font-medium">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;