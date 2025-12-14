// # inicio file: src/pages/OfertasPage.tsx

import { Link } from "react-router";
import { useAppContext } from "../context/AppContext";
import { useUserContext } from "../context/UserContext"; // Importamos UserContext
import "./PageStyles.css"; // Reutilizamos estilos base si existen

export default function OfertasPage() {
  const { t, theme } = useAppContext();
  const { userData } = useUserContext(); // Obtenemos los datos guardados

  return (
    <div className="page-container">
      {/* Cabecera personalizada */}
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        {userData?.isRegistered ? (
          // Si el usuario llenó el formulario:
          <h1 style={{ color: theme === "light" ? "#d95d5d" : "#ff8080" }}>
            ¡{t("welcome")}, {userData.name}!
          </h1>
        ) : (
          // Si entró directo sin llenar formulario:
          <h1>{t("cat_ofertas")}</h1>
        )}

        <p style={{ marginTop: "10px", fontSize: "1.1rem" }}>
          {userData?.isRegistered
            ? `Hemos enviado un cupón de descuento a ${userData.email}`
            : "Descubre nuestros precios especiales de temporada."}
        </p>
      </div>

      <hr className="divider" />

      {/* Grid de Ofertas (Ejemplo Visual) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Aquí irían tus componentes de productos (ej. LightingSection reutilizado o Cards) */}
        <div
          className="product-card"
          style={{ padding: "20px", border: "1px solid #ddd" }}
        >
          <h3>Oferta Especial 1</h3>
          <p>
            Antes: $500 - <strong>Ahora: $350</strong>
          </p>
        </div>
        <div
          className="product-card"
          style={{ padding: "20px", border: "1px solid #ddd" }}
        >
          <h3>Oferta Especial 2</h3>
          <p>
            Antes: $1200 - <strong>Ahora: $990</strong>
          </p>
        </div>
      </div>

      {!userData?.isRegistered && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>¿Quieres más descuentos?</p>
          <Link
            to="/contacto"
            className="btn-enviar-orange"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Registrate aquí
          </Link>
        </div>
      )}
    </div>
  );
}
// # fin file: src/pages/OfertasPage.tsx
