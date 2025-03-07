// Home.jsx
function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <h1 className="text-2xl text-gray-300 mb-2">
          Hi, I'm Bernardo A. Santos👋
        </h1>
        <p className="text-4xl font-bold text-white mb-4">
          Full-Stack Web Developer
        </p>
        <p className="text-xl text-gray-300 max-w-2xl">
          Transformando ideas en experiencias digitales excepcionales
        </p>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/bernardo.jpg" // Reemplaza con la ruta de tu foto
              alt="Bernardo A. Santos"
              className="w-48 h-48 rounded-full object-cover mb-6"
            />
            <p className="text-xl text-gray-600 text-center">
              Soy Ingeniero en Sistemas Computacionales, enfocado en el desarrollo de software y apasionado por crear soluciones innovadoras con un fuerte enfoque en el usuario. Me encanta transformar ideas en aplicaciones que mejoran la experiencia digital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mis Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src="/src/assets/project1.jpg" // Reemplaza con la ruta de la imagen de tu proyecto
                alt="Proyecto 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del proyecto.
                </p>
              </div>
            </div>
            {/* Proyecto 2 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src="/src/assets/project2.jpg" // Reemplaza con la ruta de la imagen de tu proyecto
                alt="Proyecto 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
                <p className="text-gray-600">
                  Descripción breve del proyecto.
                </p>
              </div>
            </div>
            {/* Proyecto 3 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src="/src/assets/project3.jpg" // Reemplaza con la ruta de la imagen de tu proyecto
                alt="Proyecto 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Proyecto 3</h3>
                <p className="text-gray-600">
                  Descripción breve del proyecto.
                </p>
              </div>
            </div>
            {/* Agrega más tarjetas de proyecto según lo requieras */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
