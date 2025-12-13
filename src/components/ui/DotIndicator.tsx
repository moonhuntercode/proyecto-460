//inicio file: src/components/UI/DotIndicator/DotIndicator.tsx

import React from 'react';
import './DotIndicator.css';

export type DotVariant = 'default' | 'gold' | 'silver';

interface DotIndicatorProps {
  active: boolean;
  onClick: () => void;
  variant?: DotVariant;
  /**
   * Ahora ringColor acepta nombres de clase semánticos o 'white'/'black' 
   * en lugar de códigos Hex arbitrarios, para evitar estilos inline.
   */
  ringColor?: 'white' | 'black' | 'default'; 
  isGrayscale?: boolean;
  ariaLabel?: string;
}

export const DotIndicator: React.FC<DotIndicatorProps> = ({
  active,
  onClick,
  variant = 'default',
  ringColor = 'default',
  isGrayscale = false,
  ariaLabel = 'Ver diapositiva'
}) => {
  
  // Construcción de clases dinámicas (BEM-ish approach)
  const classNames = [
    'dot-indicator',
    active ? 'active' : '',
    isGrayscale ? 'grayscale' : '',
    // Mapeamos la variante a una clase CSS
    variant !== 'default' ? `variant-${variant}` : '',
    // Mapeamos el color del anillo a una clase CSS
    ringColor === 'white' ? 'ring-white' : ''
  ].filter(Boolean).join(' '); // Une las clases y elimina espacios vacíos

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={active}
      
    >
      <svg 
        className="dot-svg" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 445 403.33"
        role="presentation" // Semántica SVG decorativo
      >
        <path 
          className="circle-outer" 
          d="M222.5,11.08C117.41,11.08,31.92,96.57,31.92,201.66s85.49,190.59,190.58,190.59c47.42,0,90.85-17.4,124.23-46.17l19.84-19.79c28.97-33.43,46.51-77.03,46.51-124.63,0-105.09-85.49-190.58-190.58-190.58ZM222.5,364.25c-89.65,0-162.58-72.94-162.58-162.59S132.85,39.08,222.5,39.08s162.58,72.93,162.58,162.58-72.93,162.59-162.58,162.59Z"
        />
        <path 
          className="circle-inner" 
          d="M222.5,39.08c-89.65,0-162.58,72.93-162.58,162.58s72.93,162.59,162.58,162.59,162.58-72.94,162.58-162.59S312.15,39.08,222.5,39.08Z"
        />
      </svg>
    </button>
  );
};

// fin file: src/components/UI/DotIndicator/DotIndicator.tsx