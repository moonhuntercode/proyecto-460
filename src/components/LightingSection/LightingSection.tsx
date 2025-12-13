// # inicio file: src/components/LightingSection/LightingSection.tsx
import React, { useRef } from "react";
import "./LightingSection.css";
import { useAppContext } from "../../context/AppContext";

// Importamos tu flecha existente para la navegación lateral
import arrowPng from "../../assets/icons/arrow-icon.png";

// Imports de imágenes
import lamparaSolar from "../../assets/img/lampara-solar-1.webp";
import lucesLed from "../../assets/img/luces-led-1.webp";
import luzHimalaya from "../../assets/img/lampara-himalaya.webp";
import lamparaSimil from "../../assets/img/lampara-simil.webp";

interface Product {
  id: number;
  titleKey: string; // 🟢 Cambio: Ahora guardamos la CLAVE, no el texto
  price: number;
  image: string;
}

// 🟢 Definimos los productos usando las claves del AppContext
const products: Product[] = [
  {
    id: 1,
    titleKey: "prod_solar_lamp",
    price: 200,
    image: lamparaSolar,
  },
  {
    id: 2,
    titleKey: "prod_led_50",
    price: 145,
    image: lucesLed,
  },
  {
    id: 3,
    titleKey: "prod_himalaya",
    price: 495,
    image: luzHimalaya,
  },
  {
    id: 4,
    titleKey: "prod_alum_pendant",
    price: 1650,
    image: lamparaSimil,
  },
];

const LightingSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🟢 Obtenemos 't' y 'theme'
  const { theme, t } = useAppContext();

  // Lógica de Scroll Horizontal suave
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="lighting-section">
      {/* 1. Barra de Título */}
      <div className="section-header">
        {/* 🟢 Título traducido */}
        <h2>{t("section_lighting")}</h2>
      </div>

      <div className="carousel-container">
        {/* Botón Izquierda */}
        <button
          className="nav-arrow left-arrow"
          onClick={() => scroll("left")}
          aria-label="Ver productos anteriores"
        >
          <img src={arrowPng} alt="" className="arrow-icon-rotate" />
        </button>

        {/* --- LISTA DE PRODUCTOS --- */}
        <div className="products-track" ref={scrollRef}>
          {products.map((product) => (
            <article key={product.id} className="product-card">
              {/* Icono de Favorito */}
              <button className="wishlist-btn" aria-label="Agregar a favoritos">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#999"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>

              <div className="card-image-wrapper">
                <img
                  src={product.image}
                  alt={t(product.titleKey as any)}
                  className="card-img"
                />
              </div>

              <div className="card-info">
                <h3
                  className="product-title"
                  style={{ color: theme === "light" ? "#333" : "#ccc" }}
                >
                  {/* 🟢 Traducción dinámica del producto */}
                  {t(product.titleKey as any)}
                </h3>
                <p
                  className="product-price"
                  style={{ color: theme === "light" ? "#333" : "#ccc" }}
                >
                  $u {product.price}
                </p>

                {/* Controles de Compra */}
                <div className="purchase-controls">
                  <input type="number" min="1" defaultValue="1" className="qty-input" />

                  <button className="buy-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="cart-icon"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    {/* 🟢 Botón traducido */}
                    {t("btn_buy")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón Derecha */}
        <button
          className="nav-arrow right-arrow"
          onClick={() => scroll("right")}
          aria-label="Ver productos siguientes"
        >
          <img src={arrowPng} alt="" />
        </button>
      </div>
    </section>
  );
};

export default LightingSection;
// # fin file: src/components/LightingSection/LightingSection.tsx
