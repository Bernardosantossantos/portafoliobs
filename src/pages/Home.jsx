// Asegúrate de tener instalados React Icons: npm install react-icons
import { FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNextdotjs,
  SiAstro,
  SiVuedotjs,
  SiWordpress,
  SiJoomla,
  SiDotnet
} from 'react-icons/si';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Home.jsx
function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Aumentado para mostrar más elementos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">

        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 flex justify-center m-2 md:mb-0">
          <img
            src="/src/assets/bernardo.jpg"  // Reemplaza con la ruta de tu imagen
            alt="Foto de Bernardo"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-2xl text-gray-300">
            ¡Hola! Soy <span className="font-bold">Bernardo A. Santos</span> 👋
          </h1>

          <p className="text-4xl font-bold text-white">
            Full-Stack Web Developer
          </p>

          <p className="text-xl text-gray-300 max-w-2xl">
            Transformando ideas en experiencias digitales excepcionales.
            <br />
            <span className="inline-block mt-2 font-semibold text-yellow-400">
              Disponible para trabajar
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
            >
              Contáctame
            </a>
            <a
              href="#projects"
              className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2 px-4 rounded transition-colors"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mi */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto (izquierda) */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sobre Mí
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soy Ingeniero en Sistemas Computacionales y me apasiona
              crear soluciones innovadoras que mejoren la vida de las personas.
              Me encanta aprender nuevas tecnologías, colaborar con equipos
              multidisciplinarios y superar constantemente mis límites.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              En mi tiempo libre disfruto explorar temas de Inteligencia Artificial,
              desarrollar proyectos personales y escribir artículos técnicos en mi blog.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Graduado con honores en XYZ</li>
              <li>Experiencia en desarrollo Full-Stack (MERN, .NET)</li>
              <li>Apasionado por la educación tecnológica y el mentoring</li>
            </ul>
          </div>

          {/* Imagen (derecha) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/src/assets/bernardo.jpg"
              alt="Bernardo trabajando en un proyecto"
              className="rounded-lg shadow-lg max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Habilidades & Tecnologías
          </h2>

          <div className="mb-12">
            <Slider {...sliderSettings}>
              <div className="flex flex-col items-center space-y-2 px-2">
                <FaReact className="text-blue-500 text-5xl" />
                <p className="text-lg font-medium">React</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiJavascript className="text-yellow-500 text-5xl" />
                <p className="text-lg font-medium">JavaScript</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiTypescript className="text-blue-600 text-5xl" />
                <p className="text-lg font-medium">TypeScript</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiHtml5 className="text-orange-500 text-5xl" />
                <p className="text-lg font-medium">HTML5</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiCss3 className="text-blue-500 text-5xl" />
                <p className="text-lg font-medium">CSS3</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiSass className="text-pink-500 text-5xl" />
                <p className="text-lg font-medium">Sass</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiTailwindcss className="text-teal-500 text-5xl" />
                <p className="text-lg font-medium">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiBootstrap className="text-purple-500 text-5xl" />
                <p className="text-lg font-medium">Bootstrap</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiNextdotjs className="text-black text-5xl" />
                <p className="text-lg font-medium">Next.js</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiAstro className="text-purple-500 text-5xl" />
                <p className="text-lg font-medium">Astro</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiVuedotjs className="text-green-600 text-5xl" />
                <p className="text-lg font-medium">Vue</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiNodedotjs className="text-green-500 text-5xl" />
                <p className="text-lg font-medium">Node.js</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiDotnet className="text-purple-700 text-5xl" />
                <p className="text-lg font-medium">.NET</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiWordpress className="text-blue-700 text-5xl" />
                <p className="text-lg font-medium">WordPress</p>
              </div>
              <div className="flex flex-col items-center space-y-2 px-2">
                <SiJoomla className="text-red-600 text-5xl" />
                <p className="text-lg font-medium">Joomla</p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-white">
        {/* Contacto */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contáctame</h2>
          {/* Aquí irá tu formulario de contacto */}
        </div>
      </section>
    </>
  );
}

export default Home;
