"use client";

import {
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  BanknotesIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

export default function MortgageSteps() {
  const steps = [
    { title: "Check Your Budget", desc: "Estimate how much home you can afford based on your income and expenses.", icon: CalculatorIcon },
    { title: "Get Pre-Approved", desc: "A lender evaluates your finances and gives you an estimated loan amount.", icon: ClipboardDocumentCheckIcon },
    { title: "Choose a Loan Plan", desc: "Select the mortgage type that fits your needs and financial goals.", icon: BanknotesIcon },
    { title: "Close the Deal", desc: "Finalize paperwork, sign the documents, and secure your home loan.", icon: HomeModernIcon },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#1A2B3C]">
            How Mortgage Works
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Follow these simple steps to understand the mortgage process and move closer to owning your dream home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 rounded-full bg-[#FFF8E7]">
                  <Icon className="w-10 h-10 text-[#C5A059]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}