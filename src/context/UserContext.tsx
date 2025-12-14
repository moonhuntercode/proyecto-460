// # inicio file: src/context/UserContext.tsx
import React, { createContext, useContext, useState  } from "react";
import type { ReactNode } from "react";

// Definimos la forma de los datos del usuario
interface UserData {
  name: string;
  email: string;
  phone?: string;
  isRegistered: boolean;
}

interface UserContextType {
  userData: UserData | null;
  saveUserData: (data: UserData) => void;
  clearUserData: () => void; // 🟢 Agregamos función para borrar (Logout)
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Clave para guardar en el navegador
const STORAGE_KEY = "prohome_user_data";

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Inicializamos el estado leyendo del LocalStorage (Lazy Initialization)
  const [userData, setUserData] = useState<UserData | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage", error);
      return null;
    }
  });

  // 2. Función para guardar (Actualiza Estado + LocalStorage)
  const saveUserData = (data: UserData) => {
    setUserData(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  // 3. Función para borrar (Limpia Estado + LocalStorage)
  const clearUserData = () => {
    setUserData(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <UserContext.Provider value={{ userData, saveUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
// # fin file: src/context/UserContext.tsx
