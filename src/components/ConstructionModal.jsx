import { useState, useEffect } from 'react';
import { FaHardHat } from 'react-icons/fa';

function ConstructionModal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Will hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in-down">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-center shadow-lg rounded-r-lg max-w-sm">
        <FaHardHat className="text-yellow-400 text-xl mr-3 animate-bounce" />
        <div>
          <p className="text-sm text-yellow-700">
            ¡Sitio en construcción! Estamos mejorando tu experiencia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConstructionModal;