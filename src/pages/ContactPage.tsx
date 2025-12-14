// # inicio file: src/pages/ContactPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router"; // Para redirigir
import { useAppContext } from "../context/AppContext";
import { useUserContext } from "../context/UserContext"; // Importamos el UserContext
import LogasoP from "../components/Footer/LogasoP";
import "./PageStyles.css";

export default function ContactPage() {
  const { theme, t } = useAppContext();
  const { saveUserData } = useUserContext(); // Función para guardar en global
  const navigate = useNavigate();

  const textColor = theme === "light" ? "black" : "white";
  const logoColor = theme === "light" ? "#131a62" : "white";

  // Estado local del formulario
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    message: "",
    email: "",
    newsletter: true,
  });

  // Manejar cambios en inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Guardamos en el estado Global (UserContext)
    saveUserData({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      isRegistered: true,
    });

    // 2. Simulamos envío o mostramos alerta (opcional)
    // alert("Datos guardados. Redirigiendo a ofertas...");

    // 3. Redirigimos a la página de ofertas
    navigate("/ofertas");
  };

  return (
    <div className="page-container contact-page">
      <h1>{t("contact_page_title")}</h1>
      <p className="contact-intro">{t("contact_intro")}</p>
      <hr className="divider" />

      <div className="contact-layout">
        {/* Columna Izquierda: Info (Sin cambios) */}
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
              📍 {t("footer_address")}
              <br />
              {t("footer_address_city")}
            </li>
          </ul>
        </div>

        {/* Columna Derecha: Formulario (Con lógica) */}
        <div className="contact-form-panel">
          <div className="form-header-gray">{t("contact_form_title")}</div>

          <form className="real-contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t("label_name")}</label>
                <input
                  type="text"
                  name="name"
                  className="form-input-line"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{t("label_subject")}</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input-line"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t("label_phone")}</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input-line"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-height-row" style={{ gridRow: "span 2" }}>
                <label>{t("label_message")}</label>
                <textarea
                  name="message"
                  className="form-input-line"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t("label_email")}</label>
                <input
                  type="email"
                  name="email"
                  className="form-input-line"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
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