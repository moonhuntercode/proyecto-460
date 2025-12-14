// inicio file: src/layouts/RootLayout.tsx
import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { useAppContext } from "../context/AppContext";
import whatsappIcon from "../assets/icons/whatsapp-icon-2.png"
// globals 
import '../globals.css';
export default function RootLayout() {
  const { toggleTheme, toggleLanguage,theme, language } = useAppContext();

  return (
    <div className="app-layout">
      {/* Botones Flotantes para Control (Requisito E) */}
      <div id="botones-de-temas"
        style={{
          position: "fixed",
          top: 50,
          right: 60,
          zIndex: 9999,
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={toggleTheme} style={{padding: "8px", cursor: "pointer" }}>
          {theme === "light" ? "🌙": "☀️"}
        </button>
        <button onClick={toggleLanguage} style={{ 
          background:theme === "light" ? "black" : "white",
          color:theme === "light" ? "white" : "black",
          padding: "8px", cursor: "pointer" }}>
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
      <div id="whatsapp-div">
        <a href="https://wa.me/59176173143">
        <img src={whatsappIcon} alt="WhatsApp Icon" />
        </a>
      </div>

      <Navbar />

      {/* Aquí se renderizan las páginas hijas */}
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
// fin file: src/layouts/RootLayout.tsx
