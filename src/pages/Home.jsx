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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">
            Soy Ingeniero en Sistemas Computacionales, enfocado en el desarrollo de software y apasionado por crear soluciones innovadoras con un fuerte enfoque en el usuario. Me encanta transformar ideas en aplicaciones que mejoran la experiencia digital.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
