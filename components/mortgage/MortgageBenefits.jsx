"use client";

import { CalculatorIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function MortgageBenefits() {
  const benefits = [
    { icon: CalculatorIcon, title: "Accurate Calculations", desc: "Estimate monthly payments instantly using our advanced mortgage calculator." },
    { icon: CurrencyDollarIcon, title: "Smart Financial Planning", desc: "Understand interest rates and total loan cost before making decisions." },
    { icon: ClockIcon, title: "Fast & Simple Process", desc: "Calculate your mortgage in seconds without complex paperwork." },
    { icon: ShieldCheckIcon, title: "Trusted Information", desc: "Reliable mortgage insights based on real estate market trends." }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A2B3C]">
            Why Use Our Mortgage Tools
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our tools help you make smarter home financing decisions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
              >
                <Icon className="w-10 h-10 text-[#C5A059] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}