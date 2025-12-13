// # inicio file: src/components/PromoSection/PromoSection.tsx

import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./PromoSection.css";

// IMPORTA AQUÍ TUS IMÁGENES
import mopaImg from "../../assets/img/mopa-trapeador-1.webp";
import panelImg from "../../assets/img/panel-revestimiento-1.webp";

const PromoSection: React.FC = () => {
  // Obtenemos la función de traducción y el tema
  const { t, theme } = useAppContext();

  // Color dinámico para textos dentro de las tarjetas blancas/negras
  // Nota: Si usas variables CSS en PromoSection.css, esto no sería necesario.
  const textColor = theme === "light" ? "black" : "white";
  const cardBg = theme === "light" ? "white" : "#2d2d2d"; // Color de fondo tarjeta

  return (
    <section className="promo-section">
      <div className="promo-container">
        {/* --- TARJETA IZQUIERDA: MOPA --- */}
        <div
          className="promo-card mopa-card"
          style={{ backgroundColor: cardBg }} // Control de fondo por tema
        >
          <div className="promo-content" style={{ color: textColor }}>
            <div className="image-wrapper">
              <img
                src={mopaImg}
                alt={t("promo_mopa_title")}
                className="product-img mopa-img"
              />
            </div>

            <div className="info-wrapper">
              <h3 className="promo-title" style={{ color: textColor }}>
                {t("promo_mopa_title")}
              </h3>

              <div className="price-tag">
                <span className="price-label">{t("promo_now")}</span>
                <span className="price-amount">$u 290</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- TARJETA DERECHA: PANEL WPC --- */}
        <div
          className="promo-card panel-card"
          style={{ backgroundColor: cardBg }} // Control de fondo por tema
        >
          {/* Badge de "Destacados" traducido */}
          <div className="badge-destacado">
            <span>★ {t("promo_featured")}</span>
          </div>

          <div className="promo-content" style={{ color: textColor }}>
            <div className="info-wrapper">
              <h3 className="promo-title" style={{ color: textColor }}>
                {t("promo_panel_title")}
              </h3>

              <div className="price-tag">
                <span className="price-label">{t("promo_now")}</span>
                <span className="price-amount">$u 1.750</span>
              </div>
            </div>

            <div className="image-wrapper">
              <img
                src={panelImg}
                alt={t("promo_panel_title")}
                className="product-img panel-img"
              />
            </div>
          </div>

          {/* Pequeños botones de navegación */}
          <div className="mini-nav">
            <button className="mini-btn" aria-label="Anterior">
              &lt;
            </button>
            <button className="mini-btn" aria-label="Siguiente">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

// # fin file: src/components/PromoSection/PromoSection.tsx
