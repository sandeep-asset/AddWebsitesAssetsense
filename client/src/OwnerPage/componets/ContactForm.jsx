import { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    propertyType: "",
  });

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSffk7qtC_K0WC_jK-1rw8BminJ72Co5St4MLgzDWQJuXVljnQ/formResponse";

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formBody = new FormData();

  formBody.append("entry.1651396325", formData.name.trim());
  formBody.append("entry.275335167", formData.phone.trim());
  formBody.append("entry.938881153", formData.location.trim());
  formBody.append("entry.1869637177", formData.propertyType.trim());

  console.log([...formBody.entries()]); // DEBUG

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    });

    setIsSubmitted(true);
    toast.success("Form Submitted Successfully");
  } catch (error) {
    console.error("Error:", error);
  }
};
  return (
    <section id="contact-form" className="py-20 lg:py-28 bg-blue-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-8">
          
          {/* HEADER */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              List Your Property Today
            </h2>
            <p className="text-gray-600 mt-2">
              Fill in your details and our team will reach out within 24 hours.
            </p>
          </div>

          {/* SUCCESS STATE */}
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                We’ve received your details. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Location
                </label>
                <input
                  type="text"
                  placeholder="City, Area"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* SELECT */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) =>
                    setFormData({ ...formData, propertyType: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select property type</option>
                  <option value="Office Space">Office Space</option>
                <option value="Commercial Building">Commercial Building</option>
                <option value="Retail Space">Retail Space</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Mixed Use Property">Mixed Use Property</option>
                </select>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center cursor-pointer justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
              >
                Submit Your Details
                <FaPaperPlane />
              </button>

              {/* FOOTNOTE */}
              <p className="text-xs text-center text-gray-500">
                By submitting, you agree to be contacted regarding your property listing.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactForm;