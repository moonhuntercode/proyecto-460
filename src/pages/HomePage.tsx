// inicio file: src/pages/HomePage.tsx
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import CategorySection from "../components/CategorySection/CategorySection";
import PromoSection from "../components/PromoSection/PromoSection";
import LightingSection from "../components/LightingSection/LightingSection";
import BannerGrid from "../components/BannerGrid/BannerGrid";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategorySection />
      <PromoSection />
      <LightingSection />
      <BannerGrid />
    </>
  );
}
// fin file: src/pages/HomePage.tsx