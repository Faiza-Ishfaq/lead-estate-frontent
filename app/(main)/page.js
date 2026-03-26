import HomeHero from "@/components/HomeHero";
import PropertyTypes from "@/components/PropertyTypes";
import FeaturedLocations from "@/components/FeaturedLocations";
import WhyChooseUs from "@/components/WhyChooseUs";
import LatestProperties from "@/components/LatestProperties";
import PropertyAlerts from "@/components/PropertyAlerts";
import TestimonialsCTA from "@/components/TestimonialsCTA";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <PropertyTypes />
      <FeaturedLocations />
      <WhyChooseUs />
      <LatestProperties />
      <TestimonialsCTA />
      <PropertyAlerts />
    </div>
  );
}