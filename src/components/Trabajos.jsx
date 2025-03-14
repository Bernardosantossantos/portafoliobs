import React from 'react';

function Trabajos() {
  // Array de proyectos para mapearlos fácilmente
  const proyectos = [
    {
      titulo: "Registro de Personal (Minerd)",
      fecha: "2025 - Actualmente",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://link-sofi-dev.com",
      descripcion: `Levanté los requerimientos del cliente para el desarrollo de la plataforma web de registro de personal, valido los cambios solicitados por el cliente con los entregados por el desarrollador, realico pruebas de funcionalidad y de integración, y documento los cambios realizados.`
    },
    {
      titulo: "Concurso de Oposición Monitores (Minerd)",
      fecha: "2023 - 2024",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://portfolio-cesar.com",
      descripcion: `Colaboré con el desarrollo de la plataforma web del concurso de oposición de monitores, en la actualización de la interfaz de registro de los usuarios, validación de documentos, validación de los cambios de los demás desarrolladores tanto de código como de base de datos y documentación de los cambios realizados. Además, coordiné con el equipo de seguridad y base de datos para los pases a producción de los cambios realizados en el sistema. También validé los cambios solicitados por el cliente y realicé pruebas de funcionalidad e integración.`
    },
    {
      titulo: "Concurso de Oposición Docente (Minerd)",
      fecha: "2022 - 2023",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://blog-sofi-dev.com",
      descripcion: `Contribuí en la actualización del Sistema web del concurso de oposición docente, en la actualización de las interfaces del login y el registro de los usuarios, validé los cambios de los demás desarrolladores tanto de código como de base de datos y documenté los cambios. También coordiné con el equipo de seguridad y base de datos para los pases a producción de los cambios realizados en el sistema.`
    },
    {
      titulo: "Data Center del Estado Dominicano (OGTIC)",
      fecha: "2020 - 2022",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://blog-sofi-dev.com",
      descripcion: `Contribuí en la migración y actualización de Joomla y WordPress de aproximadamente 500 portales del estado dominicano tanto a nivel de aplicación como de base de datos, aplicándoles seguridad con Cloudflare y otras herramientas. También brindé servicio de instalación, configuración y soporte de infraestructura TIC y servicio de correo a las instituciones del estado dominicano.`
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl mb-8 font-serif text-center tracking-wide">
          Trabajos
        </h2>

        <div className="space-y-12">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
            >
              <div>
                <h3 className="text-2xl font-bold mb-1">{proyecto.titulo}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {proyecto.fecha}
                </p>
                <span
                  className={`inline-block ${proyecto.colorEtiqueta} text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wide mb-2`}
                >
                  {proyecto.tipoEtiqueta}
                </span>
                <br />
                <a
                  href={proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm inline-flex items-center gap-1"
                >
                  ↗ Visitar
                </a>
              </div>
              <div>
                <p className="leading-relaxed">
                  {proyecto.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trabajos;
