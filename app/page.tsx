import { siteConfig } from "@/src/lib/config";
import { HeroSection } from "@/src/components/home/HeroSection";
import { HomeAboutSection } from "@/src/components/home/HomeAboutSection";
import { HomeFeaturedSection } from "@/src/components/home/HomeFeaturedSection";

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