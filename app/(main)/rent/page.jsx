import RentHero from "@/components/rent/RentHero";
import RentFilter from "@/components/rent/RentFilter"
import RentProperties from "@/components/rent/RentProperties";

export default function Rent() {
  return (
    <div>
      <RentHero />
      <RentFilter />
      <RentProperties />
    </div>
  );
}