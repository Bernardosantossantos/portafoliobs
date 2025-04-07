import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Copyright */}
          <p className="text-gray-400">
            © {new Date().getFullYear()} Bernardo A Santos Santos.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
          <p className="text-gray-400">
            Sigueme
          </p>
            <a
              href="https://www.linkedin.com/in/bernardosantossa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <FaLinkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Bernardosantossantos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors flex items-center gap-2"
            >
              <FaGithub className="w-6 h-6" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

