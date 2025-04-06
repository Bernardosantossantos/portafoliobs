// Navbar.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 
        ${isScrolled 
          ? 'bg-gray-800/95 backdrop-blur-sm shadow-lg translate-y-0' 
          : 'bg-gray-800 translate-y-0'
        }
        transition-all duration-300 ease-in-out z-50
      `}
    >
      <nav className="max-w-6xl container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-1">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
          <span>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white text-lg mb-2 sm:mb-0 bg-transparent border-none cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm transition-colors duration-200"
              aria-label="Ir al inicio"
            >
              Bernardo dev
            </button>
          </span>
        </div>
        <ul className="flex flex-row space-x-4 sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-0">
          <li className="relative group">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-white bg-transparent border-none cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm p-2 transition-colors duration-200"
              aria-label="Ir a sección Sobre mí"
            >
              Sobre mi
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </button>
          </li>
          <li className="relative group">
            <button
              onClick={() => scrollToSection('Habilidades & Tecnologías')}
              className="text-white bg-transparent border-none cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm p-2 transition-colors duration-200"
              aria-label="Ir a sección Habilidades"
            >
              Habilidades
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </button>
          </li>
          <li className="relative group">
            <button
              onClick={() => scrollToSection('trabajos')}
              className="text-white bg-transparent border-none cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm p-2 transition-colors duration-200"
              aria-label="Ir a sección Trabajos"
            >
              Trabajos
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </button>
          </li>
          <li className="relative group">
            {/*
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-white bg-transparent border-none cursor-pointer hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm p-2 transition-colors duration-200"
              aria-label="Ir a sección Proyectos"
            >
              Proyectos
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </button>
            */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

