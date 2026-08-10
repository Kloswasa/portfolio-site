"use client";

import { useMemo } from "react";
import { HeroSection } from "@/src/components/home/HeroSection";
import { HomeAboutSection } from "@/src/components/home/HomeAboutSection";
import { HomeFeaturedSection } from "@/src/components/home/HomeFeaturedSection";
import { ImagePreloader } from "@/src/components/ui/ImagePreloader";
import { collectWorkCardImages } from "@/src/lib/collect-card-images";
import { getFeaturedWorkCards } from "@/src/lib/work/data";

const FEATURED_COUNT = 3;

export function HomePageContent() {
  const imageUrls = useMemo(
    () => collectWorkCardImages(getFeaturedWorkCards(FEATURED_COUNT)),
    [],
  );

  return (
    <ImagePreloader imageUrls={imageUrls}>
      <HeroSection />
      <HomeFeaturedSection />
      <HomeAboutSection />
    </ImagePreloader>
  );
}
