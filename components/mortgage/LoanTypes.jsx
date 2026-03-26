"use client";

import { BanknotesIcon, BuildingOfficeIcon, HomeIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function LoanTypes() {

  const loans = [
    {
      title: "Fixed Rate Mortgage",
      description:
        "Stable interest rate and predictable monthly payments throughout the entire loan term.",
      icon: HomeIcon,
      link: "/mortgage/guide#fixed",
    },
    {
      title: "Adjustable Rate Mortgage",
      description:
        "Interest rate may change over time, usually starting with a lower initial rate.",
      icon: AdjustmentsHorizontalIcon,
      link: "/mortgage/guide#arm",
    },
    {
      title: "FHA Loan",
      description:
        "Government-backed loan designed for first-time buyers with lower down payment requirements.",
      icon: BuildingOfficeIcon,
      link: "/mortgage/guide#fha",
    },
    {
      title: "VA Loan",
      description:
        "Special loan program available for eligible veterans and military service members.",
      icon: BanknotesIcon,
      link: "/mortgage/guide#va",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A2B3C] mb-4">
            Explore Mortgage Loan Options
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understand different mortgage types to choose the best financing option
            for your dream home.
          </p>
        </div>

        {/* Loan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F8F9FA] mb-5 group-hover:bg-[#C5A059] transition">
                <loan.icon className="w-7 h-7 text-[#1A2B3C] group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">
                {loan.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {loan.description}
              </p>

              {/* Button */}
              <a
                href={loan.link}
                className="inline-block px-4 py-2 text-sm font-semibold text-[#1A2B3C] border border-[#C5A059] rounded-md hover:bg-[#C5A059] hover:text-white transition"
              >
                Learn More
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}