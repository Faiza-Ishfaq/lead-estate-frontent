"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MortgageFAQ() {
  const faqs = [
    { q: "How much down payment is required?", a: "Most lenders require 10% to 20% down payment depending on the loan type." },
    { q: "What affects mortgage interest rates?", a: "Interest rates depend on credit score, loan term, and market conditions." },
    { q: "Can I pay my mortgage early?", a: "Yes, most lenders allow early payments which can reduce total interest." },
    { q: "What is a fixed rate mortgage?", a: "A fixed-rate mortgage keeps the same interest rate for the entire loan term." }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-[#1A2B3C] mb-10">
          Mortgage FAQs
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-4  rounded-lg shadow-md">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-[#1A2B3C]">{faq.q}</span>
                <ChevronDownIcon className={`w-5 h-5 transition ${open === idx ? "rotate-180" : ""}`} />
              </button>
              {open === idx && <div className="px-5 pb-5 text-gray-600 text-sm">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}