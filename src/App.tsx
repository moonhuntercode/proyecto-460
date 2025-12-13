//inicio file: src/App.tsx

import Navbar from './components/Header/Navbar';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import './App.css'; // Mantenemos tus estilos globales si los usas
import CategorySection from './components/CategorySection/CategorySection';
import PromoSection from './components/PromoSection/PromoSection';
import LightingSection from './components/LightingSection/LightingSection';
import BannerGrid from './components/BannerGrid/BannerGrid';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <>
      {/* 1. Barra de Navegación Superior */}
      <Navbar />

      {/* 2. Contenido Principal */}
      <main>
        {/* Aquí renderizamos nuestro componente de Carrusel */}
        <HeroCarousel />

        {/* Sección de Categorías (Plantas, Herramientas, Cocina) */}
        <CategorySection />

        {/* Sección de Ofertas Destacadas (Mopa y Panel) */}
        <PromoSection />

        {/* Sección de Iluminación */}
        <LightingSection />

        {/* Banners Grandes (Jardín, Baño, Infantil) */}
        <BannerGrid />


      </main>
      <Footer/>
      {/* Más adelante aquí irán: <CategoryCards />, <ProductGrid />, etc. */}
    </>
  );
}

export default App;

//fin file: src/App.tsx