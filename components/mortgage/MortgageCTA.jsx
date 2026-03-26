"use client";

export default function MortgageCTA() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Gold Accent */}
        <div className="w-16 h-[3px] bg-[#C5A059] mx-auto mb-8"></div>

        {/* Heading */}
        <h2 className="text-3xl font-serif font-semibold text-[#1A2B3C] mb-6">
          Ready to Calculate Your Mortgage?
        </h2>

        {/* Description */}
        <p className="text-[#333333] text-[16px] leading-relaxed max-w-2xl mx-auto mb-12">
          Use our powerful mortgage calculator to estimate your monthly
          payments, compare loan options, and confidently plan your dream
          home purchase.
        </p>

        {/* Buttons */}
        <div className="flex justify-center mt-8 items-center gap-6 flex-wrap">
          <a
            href="/mortgage/calculator"
            className="px-8 py-3 bg-[#1A2B3C] text-white text-[15px] font-medium rounded-md hover:bg-[#0f1c28] transition"
          >
            Mortgage Calculator
          </a>

          <a
            href="/mortgage/guide"
            className="px-8 py-3 border border-[#C5A059] text-[#1A2B3C] text-[15px] font-medium rounded-md hover:bg-[#C5A059] hover:text-white transition"
          >
            Read Mortgage Guide
          </a>
        </div>
      </div>
    </section>
  );
}