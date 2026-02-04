import HomeHero from "@/components/sections/HomeHero";
import HomeStats from "@/components/sections/HomeStats";
import HomeFocusAreas from "@/components/sections/HomeFocusAreas";
import HomeActivities from "@/components/sections/HomeActivities";
import HomePartners from "@/components/sections/HomePartners";
import HomeCTA from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFocusAreas />
      <HomeActivities />
      <HomePartners />
      <HomeCTA />
    </>
  );
}
