import AgentsHeroSection from "@/components/agents/AgentsHeroSection";
import FilterAgents from "@/components/agents/FilterAgents"
import AgentsGrid from "@/components/agents/AgentsGrid";
import WhyChooseAgents from "@/components/agents/WhyChooseAgents";

export default function Agents() {
  return (
    <div>
      <AgentsHeroSection />
      <FilterAgents />
      <AgentsGrid />
      <WhyChooseAgents />
    </div>
  );
}