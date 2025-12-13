import type { SVGProps } from "react";

interface LogoNavbarProps extends SVGProps<SVGSVGElement>{
  accentColor?: string;
}
const LogoNavbarComponent = ({ accentColor = "#ff4d4d",
  ...props
 }:LogoNavbarProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Capa_1"
    viewBox="0 0 44.64 15.52"
    {...props}
  >
    <defs>
      <style>{".st0{fill:#131a62}"}</style>
    </defs>
    <path
      d="M.56 15.41h3.62s-.01-3.67.19-3.62-3.81 0-3.81 0v3.62Z"
      style={{
        fill: accentColor
      }}
    />
    <path
      d="M.56.26v3.16h7.18s2.14.14 2.33 2.49-2.15 2.76-2.15 2.76H4.18v3.1h4.87s2.97-.08 3.88-1.74.8-2.81.8-2.81 1.15-5.41-2.89-6.54S.56.26.56.26ZM28.17 4.71c-.93-5.03-6.5-4.25-6.5-4.25h-7l-.18 15.06h3.61V11.5h3.68l1.43 4.02h4.14l-2.43-4.59s4.18-1.18 3.25-6.21Zm-3.54 1.21c-.36 3.55-6.54 2.33-6.54 2.33V3.53s6.89-1.17 6.54 2.38ZM36.51.42c-4.17 0-7.55 3.38-7.55 7.55s3.38 7.55 7.55 7.55 7.55-3.38 7.55-7.55S40.68.42 36.51.42Zm0 12.29c-2.62 0-4.74-2.12-4.74-4.74s2.12-4.74 4.74-4.74 4.74 2.12 4.74 4.74-2.12 4.74-4.74 4.74Z"
      className="st0"
      style={{
        fill: "currentColor",
      }}
    />
  </svg>
);
export default LogoNavbarComponent;
