// # inicio file: src/components/CategorySection/CategorySection.tsx

import React from "react";
import { useAppContext } from "../../context/AppContext"; // 1. Importar el hook
import "./CategorySection.css";

// IMPORTA AQUÍ TUS IMÁGENES LOCALES Y ICONOS
import plantasImg from "../../assets/img/plantas-artificiales-1-sin-letras.png";
import plantaIcon from "../../assets/icons/planta-icon-1.png";
import ferreteriaImg from "../../assets/img/ferreteria-1-sin-letras.png";
import ferreteriaIcon from "../../assets/icons/ferreteria-icon-1.png";
import cocinaImg from "../../assets/img/cocina-1-sin-letras.png";
import cocinaIcon from "../../assets/icons/cocina-icon-1.png";

interface Category {
  id: number;
  titleKey: string; // 2. Cambiamos 'title' por 'titleKey' para ser más explícitos
  image: string;
  icon: string;
}

// 3. Usamos las claves del diccionario en lugar del texto final
const categories: Category[] = [
  {
    id: 1,
    titleKey: "card_plants", // Clave en AppContext
    image: plantasImg,
    icon: plantaIcon,
  },
  {
    id: 2,
    titleKey: "card_hardware", // Clave en AppContext
    image: ferreteriaImg,
    icon: ferreteriaIcon,
  },
  {
    id: 3,
    titleKey: "card_kitchen", // Clave en AppContext
    image: cocinaImg,
    icon: cocinaIcon,
  },
];

const CategorySection: React.FC = () => {
  // 4. Obtenemos la función de traducción
  const { t } = useAppContext();

  return (
    <section className="category-section">
      <div className="category-grid">
        {categories.map((cat) => (
          <article key={cat.id} className="category-card">
            {/* Imagen de Fondo */}
            <img
              src={cat.image}
              // Traducimos el alt text también para accesibilidad
              alt={`Categoría ${t(cat.titleKey as any)}`}
              className="card-image"
            />

            {/* Icono flotante superior izquierdo (Badge) */}
            <div className="icon-badge">
              <img src={cat.icon} alt="" className="category-icon" />
            </div>

            {/* Etiqueta inferior con texto TRADUCIDO */}
            <div className="card-label">
              {/* 5. Usamos la función t() */}
              <h3>{t(cat.titleKey as any)}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

// # fin file: src/components/CategorySection/CategorySection.tsx
