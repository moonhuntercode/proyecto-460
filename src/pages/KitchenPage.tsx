// inicio file: src/pages/KitchenPage.tsx
import PromoSection from "../components/PromoSection/PromoSection";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import LightingSection from "../components/LightingSection/LightingSection";

export default function KitchenPage() {
  return (
    <div >
      <h1>Cocina y Accesorios</h1>
      {/* Reutilizando componente 1 */}
      <PromoSection />
      {/* Reutilizando componente 2 (Aunque sea el Hero, sirve para demo) */}
      <HeroCarousel />
      {/* Reutilizando componente 3 */}
      <LightingSection />
    </div>
  );
}
// fin file: src/pages/KitchenPage.tsx