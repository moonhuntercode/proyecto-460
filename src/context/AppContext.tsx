// # inicio file: src/context/AppContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Tipos
type Theme = "light" | "dark";
type Language = "es" | "en";

// Diccionario de traducciones EXPANDIDO
const translations = {
  es: {
    // Generales
    home: "Inicio",
    search_placeholder: "Buscar...",
    toggleTheme: "Cambiar Tema",
    toggleLang: "English",
    welcome: "Bienvenido a ProHome",
    footerText: "Todos los derechos reservados",

    // Categorías del Menú
    cat_cotillon: "COTILLÓN",
    cat_bano: "BAÑO",
    cat_infantes: "INFANTES",
    cat_cocina: "COCINA",
    cat_decoracion: "DECORACIÓN",
    cat_dormitorio: "DORMITORIO",
    cat_mascotas: "MASCOTAS",
    cat_oficina: "OFICINA Y PAPELERÍA",
    cat_indumentaria: "INDUMENTARIA",
    cat_salud: "SALUD Y BELLEZA",
    cat_ofertas: "OFERTAS",
    categorias: "CATEGORÍAS",
    card_plants: "PLANTAS ARTIFICIALES",
    card_hardware: "FERRETERÍA",
    card_kitchen: "COCINA",
    promo_now: "Ahora",
    promo_featured: "DESTACADOS",

    // Títulos largos de productos (para que también cambien)
    promo_mopa_title: "Mopa Trapeador con Escurridor Cabeza Giratoria Reutilizable",
    promo_panel_title: "Panel WPC Decorativo Pared Revestimiento Símil Madera",
    section_lighting: "Iluminación",
    btn_buy: "Comprar",
    prod_solar_lamp: "Lámpara Solar con Sensor Redonda",
    prod_led_50: "50 Luces Led Guirnalda 5 Metros a Pila Luz Cálida",
    prod_himalaya: "Lámpara del Himalaya Sal 2kg con Dimer",
    prod_alum_pendant: "Lámpara de Aluminio Símil Madera Colgante",
    banner_garden: "JARDÍN Y EXTERIOR",
    banner_bathroom: "ARTÍCULOS DE BAÑO",
    banner_kids: "ZONA INFANTIL",
    email_label: "Boletín por email",
    register_email: "Registrarme",
    placeholder_email: "Tu email",
    
  },
  en: {
    // Generales
    home: "Home",
    search_placeholder: "Search...",
    toggleTheme: "Toggle Theme",
    toggleLang: "Español",
    welcome: "Welcome to ProHome",
    footerText: "All rights reserved",
    categorias: "CATEGORIES",

    // Categorías del Menú
    cat_cotillon: "PARTY",
    cat_bano: "BATHROOM",
    cat_infantes: "KIDS",
    cat_cocina: "KITCHEN",
    cat_decoracion: "DECOR",
    cat_dormitorio: "BEDROOM",
    cat_mascotas: "PETS",
    cat_oficina: "OFFICE",
    cat_indumentaria: "CLOTHING",
    cat_salud: "HEALTH & BEAUTY",
    cat_ofertas: "OFFERS",
    card_plants: "ARTIFICIAL PLANTS",
    card_hardware: "HARDWARE",
    card_kitchen: "KITCHEN",
    promo_now: "Now",
    promo_featured: "FEATURED",

    promo_mopa_title: "Mop Floor Cleaner with Spinner Head Reusable",
    promo_panel_title: "WPC Decorative Wall Panel Wood Look Cladding",
    section_lighting: "Lighting",
    btn_buy: "Buy",

    // Lighting Products
    prod_solar_lamp: "Round Solar Sensor Lamp",
    prod_led_50: "50 LED String Lights 5 Meters Battery Warm Light",
    prod_himalaya: "Himalayan Salt Lamp 2kg with Dimmer",
    prod_alum_pendant: "Aluminum Wood-Look Pendant Lamp",
    banner_garden: "GARDEN & OUTDOORS",
    banner_bathroom: "BATHROOM ESSENTIALS",
    banner_kids: "KIDS ZONE",
    email_label: "Email Newsletter",
    register_email: "Sign Up",
    placeholder_email: "Your email",
  },
};

// ... (El resto del archivo se mantiene igual: interfaz, provider, hooks)

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations.es) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: keyof typeof translations.es) => {
    return translations[language][key] || key;
  };

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, toggleLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};

// # fin file: src/context/AppContext.tsx
