import { useState, useEffect } from 'react';
import { FaHardHat, FaTools } from 'react-icons/fa';

function ConstructionModalCompleto() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <FaHardHat className="text-yellow-500 text-3xl" />
          <FaTools className="text-gray-600 text-3xl" />
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-4">
          ¡Sitio en Construcción!
        </h2>
        
        <p className="text-gray-600 text-center mb-6">
          Estamos trabajando para mejorar tu experiencia. Disculpa las molestias.
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConstructionModalCompleto;