// Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-4">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
          <span className="text-white text-lg mb-2 sm:mb-0">Bernardo dev</span>
        </div>
        <ul className="flex flex-row space-x-4 sm:flex-row  space-y-1 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-0">
          <li><Link className="text-white" to="/">Home</Link></li>
          <li><Link className="text-white" to="/projects">Projects</Link></li>
          <li><Link className="text-white" to="/articles">Articles</Link></li>
          <li><Link className="text-white" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

