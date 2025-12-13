// inicio file: src/pages/ContactPage.tsx

import { useAppContext } from "../context/AppContext";
import LogasoP from "../components/Footer/LogasoP"; // Asegúrate de importar el componente nuevo
import "./PageStyles.css";

export default function ContactPage() {
  const { theme } = useAppContext();

  // Definimos los colores según el tema
  const textColor = theme === "light" ? "black" : "white";
  // El logo original es azul (#131a62), pero en modo oscuro debe ser blanco para verse
  const logoColor = theme === "light" ? "#131a62" : "white";

  return (
    <div className="page-container contact-page">
      <h1>Contacto</h1>
      <p className="contact-intro">
        Contacta con nuestro equipo y en muy breve te daremos respuesta. Gracias por tu
        tiempo.
      </p>

      <hr className="divider" />

      <div className="contact-layout">
        {/* Columna Izquierda: Información */}
        <div className="contact-info-panel" style={{ color: textColor }}>
          <h3>PRO Accesorios - ProHome</h3>

          {/* 👇 AQUÍ ESTÁ EL CAMBIO: Usamos LogasoP con estilo dinámico */}
          <div style={{ margin: "20px 0", width: "80px" }}>
            <LogasoP
              style={{
                color: logoColor, // Esto cambia el "currentColor" del SVG
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
              📍 Cerro Largo 1173 entre Av. Libertador y Cuareim
              <br />
              Centro, Montevideo Uruguay
            </li>
          </ul>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="contact-form-panel">
          <div className="form-header-gray">Formulario de contacto</div>

          <form className="real-contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nombre y apellido *</label>
                <input type="text" className="form-input-line" />
              </div>
              <div className="form-group">
                <label>Asunto</label>
                <input type="text" className="form-input-line" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Teléfono *</label>
                <input type="tel" className="form-input-line" />
              </div>
              <div className="form-group full-height-row" style={{ gridRow: "span 2" }}>
                <label>Mensaje *</label>
                <textarea className="form-input-line" rows={5}></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
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
                <input type="checkbox" defaultChecked /> Boletín por email
              </label>
              <button type="submit" className="btn-enviar-orange">
                Enviar
              </button>
            </div>

            <p className="privacy-note">
              Los datos suministrados son confidenciales y serán tratados como privados.
              Gracias por el interés.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
// fin file: src/pages/ContactPage.tsx
