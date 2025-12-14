// # inicio file: src/pages/ContactPage.tsx

import { useAppContext } from "../context/AppContext";
import LogasoP from "../components/Footer/LogasoP";
import "./PageStyles.css";

export default function ContactPage() {
  // 1. Obtenemos 't' además de 'theme'
  const { theme, t } = useAppContext();

  const textColor = theme === "light" ? "black" : "white";
  const logoColor = theme === "light" ? "#131a62" : "white";

  return (
    <div className="page-container contact-page">
      {/* Título Traducido */}
      <h1>{t("contact_page_title")}</h1>

      {/* Intro Traducida */}
      <p className="contact-intro">{t("contact_intro")}</p>

      <hr className="divider" />

      <div className="contact-layout">
        {/* Columna Izquierda: Información */}
        <div className="contact-info-panel" style={{ color: textColor }}>
          <h3>PRO Accesorios - ProHome</h3>

          <div style={{ margin: "20px 0", width: "80px" }}>
            <LogasoP
              style={{
                color: logoColor,
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <ul className="info-list" style={{ color: textColor }}>
            <li>📞 2900 7264</li>
            <li>📱 97 497 597</li>
            <li>💬 WhatsApp</li>
            <li style={{ marginTop: "20px" }}>
              {/* 🟢 REUTILIZACIÓN: Usamos las claves del Footer para la dirección */}
              📍 {t("footer_address")}
              <br />
              {t("footer_address_city")}
            </li>
          </ul>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="contact-form-panel">
          {/* Título del Formulario */}
          <div className="form-header-gray">{t("contact_form_title")}</div>

          <form className="real-contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>{t("label_name")}</label>
                <input type="text" className="form-input-line" />
              </div>
              <div className="form-group">
                <label>{t("label_subject")}</label>
                <input type="text" className="form-input-line" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t("label_phone")}</label>
                <input type="tel" className="form-input-line" />
              </div>
              <div className="form-group full-height-row" style={{ gridRow: "span 2" }}>
                <label>{t("label_message")}</label>
                <textarea className="form-input-line" rows={5}></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t("label_email")}</label>
                <input type="email" className="form-input-line" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <select className="form-input-line" defaultValue="Bolivia">
                  <option>Bolivia</option>
                  <option>Uruguay</option>
                  <option>Argentina</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <label className="checkbox-label">
                {/* Checkbox Label Traducido */}
                <input type="checkbox" defaultChecked /> {t("email_label")}
              </label>
              <button type="submit" className="btn-enviar-orange">
                {t("btn_send")}
              </button>
            </div>

            <p className="privacy-note">{t("privacy_note")}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
// # fin file: src/pages/ContactPage.tsx
