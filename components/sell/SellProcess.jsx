import { HomeIcon, UserGroupIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function SellProcess() {
  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A2B3C] mb-4">
            How to Sell Your Property
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow a simple process to list your property and connect with
            serious buyers quickly and securely.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 flex items-center justify-center bg-[#C5A059]/20 text-[#C5A059] rounded-full mx-auto mb-5">
              <HomeIcon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">
              List Your Property
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Add details of your house, apartment, or commercial property
              including images, price, and location.
            </p>

          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 flex items-center justify-center bg-[#C5A059]/20 text-[#C5A059] rounded-full mx-auto mb-5">
              <UserGroupIcon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">
              Connect With Buyers
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Your property becomes visible to thousands of buyers and trusted
              real estate agents across major cities.
            </p>

          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 flex items-center justify-center bg-[#C5A059]/20 text-[#C5A059] rounded-full mx-auto mb-5">
              <CurrencyDollarIcon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">
              Close the Deal
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Receive offers, schedule property visits, and finalize the deal
              with the right buyer quickly.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}