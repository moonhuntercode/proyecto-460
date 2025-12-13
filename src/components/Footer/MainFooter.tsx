// # inicio file: src/components/Footer/MainFooter.tsx

import React from "react";
import "./MainFooter.css";
import { Link } from "react-router";
import { useAppContext } from "../../context/AppContext"; // 1. Importamos Context

import nosotrosIcon from "../../assets/icons/nosotros-icon.png";
import whatsappIcon from "../../assets/icons/whatsapp-icon-exam.png";
import phoneIcon from "../../assets/icons/phone-icon-black.png";
import LogasoP from "./LogasoP";
import cellIcon from "../../assets/icons/cell-phone-icon-2.png"
import atIcon from "../../assets/icons/arroba-icon.png"
import emailIcon from "../../assets/icons/correo-icon.png"
import igIcon from "../../assets/icons/ig-icon.png"
import fbIcon from "../../assets/icons/fb-icon.png"
import linkedinIcon from "../../assets/icons/linkedin-icon.png"
import ytIcon from "../../assets/icons/yt-icon.png"
import tiktokIcon from "../../assets/icons/tiktok-icon.png"


const MainFooter: React.FC = () => {
  const { t, theme } = useAppContext(); // 2. Obtenemos 't' y 'theme'

  // Definimos color del logo dinámico para el footer
  // Generalmente los footers son oscuros, así que el texto/logo suele ser blanco
  const logoTextColor = theme === "light" ? "#333" : "white";

  return (
    <footer className="main-footer">
      {/* --- FILA 1: REDES SOCIALES --- */}
      <div className="social-bar">
        {/* Traducido: Seguinos / Follow Us */}
        <span className="social-label">{t("footer_follow")}</span>
        <div className="social-icons">
          <img className="social-icon whatsapp" src={whatsappIcon} alt="WhatsApp" />
          <img className="social-icon phone" src={phoneIcon} alt="Phone" />
          <img className="social-icon cell" src={cellIcon} alt="Cell Phone" />
          <img className="social-icon at" src={atIcon} alt="Email" />
          <img className="social-icon email" src={emailIcon} alt="Email" />
          <img className="social-icon ig" src={igIcon} alt="Instagram" />
          <img className="social-icon fb" src={fbIcon} alt="Facebook" />
          <img className="social-icon linkedin" src={linkedinIcon} alt="LinkedIn" />
          <img className="social-icon yt" src={ytIcon} alt="YouTube" />
          <img className="social-icon tiktok" src={tiktokIcon} alt="TikTok" />
        </div>
      </div>

      {/* --- FILA 2: COLUMNAS DE ENLACES --- */}
      <div className="footer-columns">
        {/* Columna 1: Nosotros */}
        <div className="footer-col">
          <div className="col-header">
            <img id="nosotros-icon" src={nosotrosIcon} alt="nosotros" />
            <h4>{t("footer_about_title")}</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">🏢</span> {t("footer_company")}
            </li>
            <li>
              <span className="icon-bullet">📍</span> {t("footer_location")}
            </li>
            <li>
              <span className="icon-bullet">📰</span> {t("footer_news")}
            </li>
            <li>
              <Link to="/contacto" title={t("footer_contact")}>
                <span className="icon-bullet">@</span> {t("footer_contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 2: Tienda */}
        <div className="footer-col">
          <div className="col-header">
            <IconTag />
            <h4>{t("footer_store_title")}</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">🏷️</span> {t("footer_featured")}
            </li>
            <li>
              <span className="icon-bullet">✨</span> {t("footer_new")}
            </li>
            <li>
              <span className="icon-bullet">💥</span> {t("footer_offers")}
            </li>
            <li>
              <span className="icon-bullet">🏁</span> {t("footer_brands")}
            </li>
            <li>
              <span className="icon-bullet">📦</span> {t("footer_wholesale")}
            </li>
          </ul>
        </div>

        {/* Columna 3: Ayuda */}
        <div className="footer-col">
          <div className="col-header">
            <IconInfo />
            <h4>{t("footer_help_title")}</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">❓</span> {t("footer_faq")}
            </li>
            <li>
              <span className="icon-bullet">🚚</span> {t("footer_shipping")}
            </li>
            <li>
              <span className="icon-bullet">💳</span> {t("footer_payment")}
            </li>
            <li>
              <span className="icon-bullet">📄</span> {t("footer_terms")}
            </li>
            <li>
              <span className="icon-bullet">🔒</span> {t("footer_privacy")}
            </li>
          </ul>
        </div>

        {/* Columna 4: Mi Cuenta */}
        <div className="footer-col">
          <div className="col-header">
            <IconUser />
            <h4>{t("footer_account_title")}</h4>
          </div>
          <ul className="footer-links">
            <li>
              <span className="icon-bullet">👤</span> {t("footer_my_account")}
            </li>
            <li>
              <span className="icon-bullet">✉️</span> {t("footer_newsletter")}
            </li>
          </ul>
        </div>

        {/* Columna 5: Información de Contacto */}
        <div className="footer-col contact-col">
          <p className="company-name">PRO Accesorios - ProHome</p>

          <div className="contact-details">
            {/* Logo Circular "P" */}
            <div className="footer-logo-circle">
              <LogasoP
                style={{
                  width: "100%",
                  height: "auto",
                  color: logoTextColor, // El footer puede requerir un color específico
                }}
              />
            </div>

            <div className="contact-info-text">
              <p>📞 2900 7264</p>
              <p>
                📱 97 497 597 &nbsp; <span className="whatsapp-label">WhatsApp</span>
              </p>
            </div>
          </div>

          <p className="address-text">
            {/* Dirección Traducida (Por si quieres cambiar "entre" por "between") */}
            📍 {t("footer_address")}
            <br />
            {t("footer_address_city")}
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- ICONOS SVG HELPER COMPONENTS ---

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
