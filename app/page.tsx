import { HomePageContent } from "@/src/components/home/HomePageContent";
import { siteConfig } from "@/src/lib/config";

export const metadata = {
  title: "Home",
  description: siteConfig.tagline,
};

export default function HomePage() {
  return (
    <main>
      <HomePageContent />
    </main>
  );
}
