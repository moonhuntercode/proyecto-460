//inicio file: src/components/HeroCarousel/HeroCarousel.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { DotIndicator } from '../ui/DotIndicator';
import './HeroCarousel.css';

// 1. Importación de imágenes estáticas (Slides)
import img1 from '../../assets/img/presentaciones0_8060-2-fondo-sin-letras.jpg';
import img2 from '../../assets/img/agricultura-presentacion-1.jpg';
import img3 from '../../assets/img/cotillon-presentacion-1.jpg';

// 2. Importación del asset de la flecha
// Ajusta la ruta si guardaste el archivo en otro lugar
import arrowPng from '../../assets/icons/arrow-icon.png';

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: img1,
    title: "ILUMINÁ CADA RINCÓN",
    subtitle: "DE TU HOGAR",
  },
  {
    id: 2,
    image: img2,
    title: "DISFRUTÁ TU JARDÍN",
    subtitle: "CÓMO NUNCA",
  },
  {
    id: 3,
    image: img3,
    title: "TODO EN COTILLÓN",
    subtitle: "PARA TUS FIESTAS",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Lógica de avance (Next)
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [isTransitioning]);

  // Lógica de retroceso (Prev)
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play (Timer)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Reset del flag de transición
  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="hero-carousel" aria-label="Galería principal">
      {/* Pista deslizante (Track) */}
      <div 
        className="carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="carousel-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="content-container">
              <h2 className="slide-title">
                {slide.title} <span className="slide-subtitle">{slide.subtitle}</span>
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* --- BOTONES DE NAVEGACIÓN --- */}
      
      {/* Botón Izquierdo (Anterior) */}
      <button 
        className="nav-btn prev-btn" 
        onClick={prevSlide} 
        aria-label="Ver imagen anterior"
      >
        {/* Usamos el mismo PNG, la clase 'arrow-icon' manejará la rotación */}
        <img src={arrowPng} alt="" className="arrow-icon left" />
      </button>

      {/* Botón Derecho (Siguiente) */}
      <button 
        className="nav-btn next-btn" 
        onClick={nextSlide} 
        aria-label="Ver imagen siguiente"
      >
        <img src={arrowPng} alt="" className="arrow-icon right" />
      </button>

      {/* --- INDICADORES (Dots) --- */}
      <div className="indicators">
        {slides.map((_, index) => (
          <DotIndicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
            ringColor="white"
            ariaLabel={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

//fin file: src/components/HeroCarousel/HeroCarousel.tsx