//  inicio file: src/components/Footer/Footer.tsx

import React from 'react';

import MainFooter from './MainFooter'; // Importamos el archivo negro que me mostraste
import BoletinEmail from '../BoletinEmail/BoletinEmail';

const Footer: React.FC = () => {
  return (
    // Usamos una etiqueta semántica <footer> que envuelve todo
    <footer id="main-footer-container">
      {/* Boletín email */}
      <BoletinEmail />

      {/* 2. Renderizamos la parte negra abajo */}
      <MainFooter />
    </footer>
  );
};

export default Footer;

// fin file: src/components/Footer/Footer.tsx