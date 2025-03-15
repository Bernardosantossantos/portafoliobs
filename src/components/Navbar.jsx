// Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-4">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
          <span>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white text-lg mb-2 sm:mb-0 bg-transparent border-none cursor-pointer"
            >
              Bernardo dev
            </button>
          </span>
        </div>
        <ul className="flex flex-row space-x-4 sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-0">
          <li>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-white bg-transparent border-none cursor-pointer"
            >
              Sobre mi
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('Habilidades & Tecnologías')}
              className="text-white bg-transparent border-none cursor-pointer"
            >
              Habilidades
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('trabajos')}
              className="text-white bg-transparent border-none cursor-pointer"
            >
              Trabajos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-white bg-transparent border-none cursor-pointer"
            >
              Proyectos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

