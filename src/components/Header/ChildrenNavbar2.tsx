// # inicio file: src/components/Header/ChildrenNavbar2.tsx
import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router";
import "./ChildrenNavbar2.css";

// Imports de Iconos (Sin cambios)
import bañoIcon from "../../assets/icons/baño-icon.png";
import infantesIcon from "../../assets/icons/infantes-icon.png";
import cocinaIcon from "../../assets/icons/cocina-icon.png";
import decoracionIcon from "../../assets/icons/decoracion-icon.png";
import dormitorioIcon from "../../assets/icons/dormitorio-icon.png";
import mascotasIcon from "../../assets/icons/mascotas-icon.png";
import oficinaIcon from "../../assets/icons/oficina-icon.png";
import indumentariaIcon from "../../assets/icons/indumentaria-icon.png";
import saludIcon from "../../assets/icons/salud-icon.png";
import ofertasIcon from "../../assets/icons/ofertas-icon.png";
import cotillonIcon from "../../assets/icons/cotillon-icon.png";

// 🆕 Definición de Items usando CLAVES DE TRADUCCIÓN (labelKey)
// Nota: 'any' es temporal para evitar errores de tipo estricto con las keys,
// lo ideal sería definir un tipo NavItem.
const NAV_ITEMS = [
  { icon: cotillonIcon, labelKey: "cat_cotillon", path: "/cotillon" },
  { icon: bañoIcon, labelKey: "cat_bano", path: "/bano" },
  { icon: infantesIcon, labelKey: "cat_infantes", path: "/infantes" },
  { icon: cocinaIcon, labelKey: "cat_cocina", path: "/cocina" },
  { icon: decoracionIcon, labelKey: "cat_decoracion", path: "/decoracion" },
  { icon: dormitorioIcon, labelKey: "cat_dormitorio", path: "/dormitorio" },
  { icon: mascotasIcon, labelKey: "cat_mascotas", path: "/mascotas" },
  { icon: oficinaIcon, labelKey: "cat_oficina", path: "/oficina" },
  { icon: indumentariaIcon, labelKey: "cat_indumentaria", path: "/indumentaria" },
  { icon: saludIcon, labelKey: "cat_salud", path: "/salud" },
  { icon: ofertasIcon, labelKey: "cat_ofertas", path: "/ofertas", isSpecial: true },
];

const ChildrenNavbar2: React.FC = () => {
  const { theme, t } = useAppContext(); // Importamos 't'
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper para renderizar items
  const renderNavItem = (item: any, index: number) => (
    <Link
      key={index}
      to={item.path}
      className="nav-link-wrapper"
      onClick={() => setIsOpen(false)}
    >
      <div className="nav-category-item">
        <img
          src={item.icon}
          alt="icon"
          className={item.isSpecial ? "icon-ofertas" : ""}
        />
        {/* 🔥 AQUÍ USAMOS LA TRADUCCIÓN */}
        <span className="nav-category-label">{t(item.labelKey)}</span>
      </div>
    </Link>
  );

  return (
    <section
      id="children-2-of-navbar"
      className={`children-navbar-container ${!isOpen ? "menu-open" : ""}`}
      style={{ background: theme === "light" ? "#d95d5d" : "black" }}
    >
      {/* Botón Hamburguesa */}
      <div className="mobile-header-controls">
        <button className="hamburger-btn" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
          <span style={{ marginLeft: 10, fontSize: "0.9rem", fontWeight: "bold" }}>
            {t("categorias")}
          </span>
        </button>
      </div>

      {/* Lista Desktop */}
      <div className="desktop-nav-list">
        {NAV_ITEMS.map((item, index) => renderNavItem(item, index))}
      </div>

      {/* Menú Móvil */}
      <div className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item, index) => renderNavItem(item, index))}
      </div>
    </section>
  );
};

export default ChildrenNavbar2;
// # fin file: src/components/Header/ChildrenNavbar2.tsx
