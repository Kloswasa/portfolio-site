import { siteConfig } from "@/src/lib/config";
import { HeroSection } from "@/src/components/HeroSection";
import { HomeAboutSection } from "@/src/components/HomeAboutSection";
import { HomeFeaturedSection } from "@/src/components/HomeFeaturedSection";

export const metadata = {
  title: "Home",
  description: siteConfig.tagline,
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HomeFeaturedSection />
      <HomeAboutSection />
    </main>
  );
}