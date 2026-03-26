import BuyHero from "@/components/buy/BuyHero";
import Filter from "@/components/buy/Filter"
import CityProperties from "@/components/buy/CityProperties";

export default function BuyPage() {
  return (
    <div>
      <BuyHero />
      <Filter />
      <CityProperties />
    </div>
  );
}