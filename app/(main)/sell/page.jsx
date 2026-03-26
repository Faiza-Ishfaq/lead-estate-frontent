import SellHeroSection from "@/components/sell/SellHeroSection";
import SellProcess from "@/components/sell/SellProcess";
import PopularAgents from "@/components/sell/PopularAgents";
import RecentlySold from "@/components/sell/RecentlySold";
import CalltoActionBanner from "@/components/sell/CalltoActionBanner";

export default function Sell() {
  return (
    <div className="flex flex-col gap-24">
      <SellHeroSection />
      <SellProcess />
      <PopularAgents />
      <RecentlySold />
      <CalltoActionBanner />
    </div>
  );
}