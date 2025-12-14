// # inicio file: src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AppProvider } from "./context/AppContext";
import "./globals.css";

// Layouts y Páginas
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import DormitorioPage from "./pages/DormitorioPage"; // Página 2
import ContactPage from "./pages/ContactPage"; // Página 3
import KitchenPage from "./pages/KitchenPage"; // Página 4 
import OfertasPage from "./pages/OfertasPage";
// (Filler para cumplir requisito)
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "dormitorio", Component: DormitorioPage }, // Ruta Dormitorio
      { path: "contacto", Component: ContactPage }, // Ruta Contacto
      { path: "cocina", Component: KitchenPage },
      { path: "ofertas", Component: OfertasPage },
      // Ruta para manejar URLs no definidas
      {
        path: "*",
        element: (
          <div style={{ padding: 50, textAlign: "center" }}>
            404 - Página no encontrada
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("app-container")!).render(
  <StrictMode>
    <AppProvider>
      <UserProvider>
      <RouterProvider router={router} />
      </UserProvider>
    </AppProvider>
  </StrictMode>
);
// # fin file: src/main.tsx
