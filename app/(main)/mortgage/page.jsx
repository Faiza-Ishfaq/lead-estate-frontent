// pages/mortgage.jsx
import MortgageHero from "@/components/mortgage/MortgageHero"; 
import MortgagePlans from "@/components/mortgage/MortgagePlans";
import LoanTypes from "@/components/mortgage/LoanTypes";
import MortgageBenefits from "@/components/mortgage/MortgageBenefits";
import MortgageFAQ from "@/components/mortgage/MortgageFAQ";
import MortgageCTA from "@/components/mortgage/MortgageCTA";

export default function Mortgage() {
  return (
    <div className="bg-[#F8F9FA]">
      <MortgageHero />
      <MortgagePlans />
      <LoanTypes />
      <MortgageBenefits />
      <MortgageFAQ />
      <MortgageCTA />
    </div>
  );
}