import "slick-carousel/slick/slick-theme.css";
import Trabajos from '../components/Trabajos';
import ConstructionModal from '../components/ConstructionModal';
import HabilidadesyTecnologias from '../components/HabilidadesyTecnologias';

// Home.jsx
function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id='hero' className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-16 sm:pt-0">
        <div className='w-full max-w-7xl mx-auto px-4 min-h-screen py-2 flex flex-col md:flex-row items-center justify-center'>

          {/* Imagen a la izquierda */}
          <div className="md:w-1/2 flex justify-center m-2 md:mb-0">
            <img
              src="/assets/bernardo-santos.png" 
              alt="Foto de Bernardo"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Contenido a la derecha */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-2xl text-gray-300">
              ¡Hola! Soy <span className="font-bold">Bernardo Santos</span> 👋
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
                href="mailto:"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
              >
                Contáctame
              </a>
              {/*
              <a
                href="#proyectos"
                className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2 px-4 rounded transition-colors"
              >
                Ver proyectos
              </a>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mi */}
      <section id="sobre-mi" className="w-full py-24 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 pt-14">
              Sobre Mí
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mi nombre es Bernardo Aneudy Santos Santos, aunque mis amigos me llaman Aneudy o, en ocasiones, Neo. Di mis primeros pasos en programación en la universidad, creando un sistema de facturación en C# Windows Forms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hoy en día, he tenido la oportunidad de contribuir y liderar proyectos que han tenido un impacto significativo en la población dominicana.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              En mi tiempo libre disfruto explorar temas de Inteligencia Artificial, cloud computing, desarrollar proyectos personales y escribir artículos técnicos en mi LinkedIn y blog.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Desarrollador Full-Stack</li>
              <li>Apasionado por la educación tecnológica y el mentoring</li>
            </ul>

            {/* Botón de descarga CV */}
            <a
              href="/assets/cv-bernardo-santos.pdf" 
              download="CV-Bernardo-Santos.pdf"
              className="inline-blockbg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2 px-4 rounded shadow transition-colors"
            >
              Descargar CV
            </a>
          </div>

          {/* Imagen (derecha) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/bernardo-santos.png"
              alt="Bernardo trabajando en un proyecto"
              className="rounded-lg shadow-lg w-full md:w-96"
            />
          </div>
        </div>
      </section>

      {/* Habilidades y Tecnologias */}
      <section className="w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <HabilidadesyTecnologias />
        </div>
      </section>

      {/* Trabajos */}

          <Trabajos />


      <ConstructionModal />
    </>
  );
}

export default Home;
