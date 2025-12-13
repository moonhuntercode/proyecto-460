// # inicio file: src/pages/DormitorioPage.tsx

import "./PageStyles.css";
import percha from '../assets/img/percha-img.png'
import almohada from '../assets/img/almohada-img.png'
import zapatosCombo from '../assets/img/zapatos-combo.png'
import perchasCombo from '../assets/img/ganchos-2.png'
// Mock data basada en tu imagen pagina2.jpg
const products = [
  {
    id: 1,
    title: "Percha 8 en 1 Organizador Tendedero Ropa 360g",
    price: 90,
    image: percha,
  },
  {
    id: 2,
    title: "Almohada Inflable Cuello Para Viaje Cómodo",
    price: 195,
    image:almohada,
  },
  {
    id: 3,
    title: "Organizador De Zapatos Almacenamiento Bajo Cama",
    price: 210,
    image: zapatosCombo,
  },
  {
    id: 4,
    title: "Perchas Antideslizante Perchas Acero Inoxidable Set X10",
    price: 250,
    image: perchasCombo,
  },
];

export default function DormitorioPage() {
  // 🚫 Eliminamos useAppContext y la lógica JS de colores

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span> &gt; <span>Dormitorio</span>
      </div>

      <div className="category-layout">
        {/* Sidebar Lateral */}
        <aside className="sidebar">
          <h3>Accesorios Dormitorio</h3>
          <h3>Organizadores</h3>

          {/* El CSS maneja el color de fondo y texto automáticamente */}
          <div className="bestsellers-box">
            <h4>Más vendidos</h4>
            <ul>
              <li>👞 Organizador De Zapatos</li>
              <li>👕 Percha 8 en 1</li>
            </ul>
          </div>
        </aside>

        {/* Contenido Principal */}
        <main className="category-content">
          <h1>Dormitorio</h1>

          {/* Barra de Filtros */}
          <div className="filter-bar">
            <span>5 productos</span>
            <div className="filters">
              <select className="filter-select">
                <option>Ordenado por Precio menor</option>
              </select>
              <select className="filter-select">
                <option>Marca...</option>
              </select>
              <button className="grid-view-btn">▦</button>
            </div>
          </div>

          {/* Grilla de Productos */}
          <div className="product-grid-display">
            {products.map((prod) => (
              <div key={prod.id} className="grid-product-card">
                <button className="heart-icon">♥</button>
                <img src={prod.image} alt={prod.title} />

                {/* El título usa var(--page-text) */}
                <h3>{prod.title}</h3>

                {/* El precio usa var(--price-color) */}
                <p className="price">$u {prod.price}</p>

                <div className="buy-action">
                  <input type="number" defaultValue="1" min="1" />
                  <button className="btn-comprar-orange">🛒 Comprar</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
// # fin file: src/pages/DormitorioPage.tsx
