// # inicio file: src/components/Navbar.tsx
import { Link } from "react-router";
import { useAppContext } from "../../context/AppContext";

import LogoNavbarComponent from "../LogoNavbar";
import ChildrenNavbar2 from "../Header/ChildrenNavbar2"; // Ajustado a ./Header si Navbar está en components raíz
import "./Navbar.css";

// Imports de Iconos
import searchIcon from "../../assets/icons/search-icon-2-delgado-thin.svg";
import arrobaIcon from "../../assets/icons/arroba-icon.png";
import correoIcon from "../../assets/icons/correo-icon.png";
import igIcon from "../../assets/icons/ig-icon.png";
import fbIcon from "../../assets/icons/fb-icon.png";
import linkedinIcon from "../../assets/icons/linkedin-icon.png";
import ytIcon from "../../assets/icons/yt-icon.png";
import tiktokIcon from "../../assets/icons/tiktok-icon.png";
import mapIcon from "../../assets/icons/map-icon-2.png";

export default function Navbar() {
  // 3. Obtenemos la función de traducción 't'
  const { t,theme } = useAppContext();
  const accentColor = theme === "light" ? "#ff4d4d" : "white";
  const logoColor2 = theme === "light" ? "blue" : "white";

  return (
    <div className="navbar-container">
      {/* Sección Superior */}
      <section id="children-of-navbar-1">
        <div className="logo-1-inside-navbar">
          <Link to="/" title={t("home")}>
            <LogoNavbarComponent 
            accentColor={accentColor}
            style={{
              color:logoColor2,
            }}
            />
            {/* 🔥 CORRECCIÓN AQUÍ: Usamos traducción y mayúsculas */}
            <span className="logo-text">{t("home").toUpperCase()}</span>
          </Link>
        </div>

        <label id="label-inside-children-1" htmlFor="search">
          <img id="search-icon-img" src={searchIcon} alt="Search icon" />
          <input
            placeholder={t("search_placeholder")} // 4. Placeholder traducido
            type="search"
            name="search"
            id="search"
          />
        </label>

        <div className="icons-inside-navbar-container">
          <Link to="/contacto" title="Contacto">
            <img src={arrobaIcon} alt="Contacto" />
          </Link>
          <img src={correoIcon} alt="Correo" />
          <img src={igIcon} alt="Instagram" />
          <img src={fbIcon} alt="Facebook" />
          <img src={linkedinIcon} alt="LinkedIn" />
          <img src={ytIcon} alt="YouTube" />
          <img src={tiktokIcon} alt="TikTok" />
          <img src={mapIcon} alt="Mapa" />
        </div>
      </section>

      {/* 5. Renderizamos el componente del menú de categorías */}
      <ChildrenNavbar2 />
    </div>
  );
}
// # fin file: src/components/Navbar.tsx
