import {
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaChartLine,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";

export default function GoogleTrust() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
              <FaShieldAlt className="mr-2" />
              Google Trust
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Build Trust with Google Presence
            </h2>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Google Presence
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your property listed as{" "}
                    <span className="font-medium text-gray-900">
                      "Asset Sense Workspaces – [City Name]"
                    </span>
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <FaStar className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Google Reviews
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We help you collect reviews to build trust with future clients.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FaChartLine className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    SEO Benefits
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Higher visibility means more organic traffic and leads.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <FaFileAlt className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    SEO-Optimised Blog Content
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We create blogs answering top Google queries to drive traffic to your listing.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FaSearch className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Turn Readers into Leads
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Visitors land on your blog and convert into paying clients via smart CTAs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-3xl blur-3xl" />

            <div className="relative bg-white rounded-2xl border p-6 shadow-lg">
              {/* Map Card */}
              <div className="bg-gray-100 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900">
                      Asset Sense Workspaces – Mumbai
                    </h4>

                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        (127 reviews)
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      Coworking Space • Open 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="space-y-3">
                {[
                  {
                    name: "Rahul M.",
                    text: "Great workspace, very professional!",
                    rating: 5,
                  },
                  {
                    name: "Priya S.",
                    text: "Excellent facilities and support.",
                    rating: 5,
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 border"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-xs font-semibold text-blue-700">
                        {review.name[0]}
                      </div>

                      <span className="text-xs font-medium text-gray-900">
                        {review.name}
                      </span>

                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-[10px]" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}