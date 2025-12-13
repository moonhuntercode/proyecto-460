// inicio file: src/components/ui/LogasoP.tsx
import React from "react";

const LogasoP = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.24 15.52" {...props}>
    {/* Parte Roja: Se mantiene roja siempre */}
    <path
      d="M.56 15.41h3.62s-.01-3.67.19-3.62-3.81 0-3.81 0v3.62Z"
      style={{
        fill: "#d6696c",
      }}
    />
    {/* Parte Azul/Dinámica: Usamos currentColor para controlarlo desde fuera */}
    <path
      d="M.56.26v3.16h7.18s2.14.14 2.33 2.49c.19 2.35-2.15 2.76-2.15 2.76H4.18v3.1h4.87s2.97-.08 3.88-1.74.8-2.81.8-2.81 1.15-5.41-2.89-6.54S.56.26.56.26Z"
      style={{
        fill: "currentColor", // 👈 ESTO ES LA CLAVE
      }}
    />
  </svg>
);

export default LogasoP;
// fin file: src/components/ui/LogasoP.tsx
