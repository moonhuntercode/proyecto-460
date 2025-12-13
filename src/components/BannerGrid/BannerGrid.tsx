// # inicio file: src/components/BannerGrid/BannerGrid.tsx

import React from "react";
import "./BannerGrid.css";
import { useAppContext } from "../../context/AppContext"; // 1. Importamos el hook

// ----------------------------------------------------------------------
// IMPORTA AQUÍ TUS IMÁGENES LOCALES
import jardinImg from "../../assets/img/jardin-exterior-1.png";
import banoImg from "../../assets/img/articulos-bano-1.png";
import infantilImg from "../../assets/img/zona-infantil-1.png";
// ----------------------------------------------------------------------

interface Banner {
  id: number;
  titleKey: string; // 2. Cambiamos 'title' por 'titleKey'
  image: string;
}

// 3. Usamos las claves definidas en AppContext
const banners: Banner[] = [
  {
    id: 1,
    titleKey: "banner_garden",
    image: jardinImg,
  },
  {
    id: 2,
    titleKey: "banner_bathroom",
    image: banoImg,
  },
  {
    id: 3,
    titleKey: "banner_kids",
    image: infantilImg,
  },
];

const BannerGrid: React.FC = () => {
  const { t } = useAppContext(); // 4. Obtenemos la función de traducción

  return (
    <section className="banner-section">
      <div className="banner-grid">
        {banners.map((banner) => (
          <article key={banner.id} className="banner-card">
            {/* Imagen de Fondo con efecto Zoom */}
            <div className="banner-image-wrapper">
              <img
                src={banner.image}
                // 5. Traducimos también el ALT para accesibilidad (SEO)
                alt={t(banner.titleKey as any)}
                className="banner-img"
              />
            </div>

            {/* Etiqueta Flotante (Botón Rojo) */}
            <div className="banner-label">
              {/* 6. Renderizamos el título traducido */}
              <h3>{t(banner.titleKey as any)}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BannerGrid;

// # fin file: src/components/BannerGrid/BannerGrid.tsx
