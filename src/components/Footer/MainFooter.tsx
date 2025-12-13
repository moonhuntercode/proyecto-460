// inicio file: src/components/Footer/MainFooter.tsx

import React from "react";
import "./MainFooter.css";

import nosotrosIcon from "../../assets/icons/nosotros-icon.png"
import LogasoP from "./LogasoP";
import { Link } from "react-router";
import whatsappIcon from "../../assets/icons/whatsapp-icon-exam.png";
import phoneIcon from "../../assets/icons/phone-icon.png";
const MainFooter: React.FC = () => {
  return (
    <footer className="main-footer">
      {/* --- FILA 1: REDES SOCIALES --- */}
      <div className="social-bar">
        <span className="social-label">Seguinos</span>
        <div className="social-icons">
          <img className="social-icon whatsapp" src={whatsappIcon} alt="WhatsApp" />
          <img className="social-icon phone" src={phoneIcon} alt="Phone" />
          <i className="social-icon mobile"></i>
          <i className="social-icon at"></i>
          <i className="social-icon email"></i>
          <i className="social-icon instagram"></i>
          <i className="social-icon facebook"></i>
          <i className="social-icon linkedin"></i>
          <i className="social-icon youtube"></i>
          <i className="social-icon location"></i>
        </div>
      </div>

      {/* --- FILA 2: COLUMNAS DE ENLACES --- */}
      <div className="footer-columns">
        {/* Columna 1: Nosotros */}
        <div className="footer-col">
          <div className="col-header">
            <img id="nosotros-icon" src={nosotrosIcon} alt="nosotros" />
            <h4>Nosotros</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">🏢</span> Empresa
            </li>
            <li>
              <span className="icon-bullet">📍</span> Ubicación
            </li>
            <li>
              <span className="icon-bullet">📰</span> Noticias
            </li>
            <li>
              <Link to="/contacto" title="Contacto">
                <span className="icon-bullet">@</span> Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 2: Tienda */}
        <div className="footer-col">
          <div className="col-header">
            <IconTag />
            <h4>Tienda</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">🏷️</span> Destacados
            </li>
            <li>
              <span className="icon-bullet">✨</span> Nuevos
            </li>
            <li>
              <span className="icon-bullet">💥</span> Ofertas
            </li>
            <li>
              <span className="icon-bullet">🏁</span> Marcas
            </li>
            <li>
              <span className="icon-bullet">📦</span> Venta por mayor
            </li>
          </ul>
        </div>

        {/* Columna 3: Ayuda */}
        <div className="footer-col">
          <div className="col-header">
            <IconInfo />
            <h4>Ayuda</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">❓</span> Preguntas
            </li>
            <li>
              <span className="icon-bullet">🚚</span> Envíos
            </li>
            <li>
              <span className="icon-bullet">💳</span> Formas de pago
            </li>
            <li>
              <span className="icon-bullet">📄</span> Condiciones
            </li>
            <li>
              <span className="icon-bullet">🔒</span> Privacidad
            </li>
          </ul>
        </div>

        {/* Columna 4: Mi Cuenta */}
        <div className="footer-col">
          <div className="col-header">
            <IconUser />
            <h4>Mi cuenta</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">👤</span> Mi cuenta
            </li>
            <li>
              <span className="icon-bullet">✉️</span> Boletín
            </li>
          </ul>
        </div>

        {/* Columna 5: Información de Contacto */}
        <div className="footer-col contact-col">
          <p className="company-name">PRO Accesorios - ProHome</p>

          <div className="contact-details">
            {/* Logo Circular "P" */}
            <div className="footer-logo-circle">
              {/* <span className="logo-p">P</span>
              <span className="logo-dot"></span> */}
              <LogasoP />
            </div>

            <div className="contact-info-text">
              <p>📞 2900 7264</p>
              <p>
                📱 97 497 597 &nbsp; <span className="whatsapp-label">WhatsApp</span>
              </p>
            </div>
          </div>

          <p className="address-text">
            📍 Cerro Largo 1173 entre Av. Libertador y Cuareim
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- ICONOS SVG HELPER COMPONENTS (Para mantener el JSX limpio) ---

const IconTag = () => (
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
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);
const IconInfo = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
const IconUser = () => (
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
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default MainFooter;

// fin file: src/components/Footer/MainFooter.tsx
