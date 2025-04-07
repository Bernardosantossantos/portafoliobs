import React from 'react';

function Trabajos() {
  // Array de proyectos para mapearlos fácilmente
  const proyectos = [
    {
      titulo: "Registro de Personal (Minerd)",
      fecha: "2025 - Actualmente",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://apps.minerd.gob.do/controlacademicocentros/",
      descripcion: ` Contribuí en el levantamiento de los requisitos del cliente para el desarrollo de
 la plataforma web de registro de personal. Asimismo, validé los cambios
 solicitados frente a los entregados por el desarrollador, realicé pruebas de
 funcionalidad e integración y documenté todos los ajustes realizados.
 Finalmente, elaboré toda la documentación para el cliente, así como los
 manuales de usuario.`
    },
    {
      titulo: "Concurso de Oposición Docente (Minerd)",
      fecha: "2023 - 2024",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://apps1.minerd.gob.do/seconcursofocalizado2024/Login/IniciarSesion?ReturnUrl=%2fseconcursofocalizado2024%2f",
      descripcion: `Contribuí a la actualización del sistema web del concurso de oposición docente, mejorando las interfaces de inicio de sesión y registro de usuarios. También validé los cambios de otros desarrolladores tanto de código como de base de datos y documenté cada modificación. Asimismo, coordiné con los equipos de seguridad y base de datos para llevar a producción los cambios realizados en el sistema. Además, realicé pruebas de funcionalidad e integración y validé los ajustes solicitados por el cliente.`
    },
    {
      titulo: "Concurso de Oposición Monitores (Minerd)",
      fecha: "2022 - 2023",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://apps.minerd.gob.do/semonitoresdocentes/Login/IniciarSesion?ReturnUrl=%2fsemonitoresdocentes",
      descripcion: `Colaboré en el desarrollo de la plataforma web para el concurso de oposición de monitores, actualizando la interfaz de registro de usuarios y validación de documentos. También supervisé los cambios de otros desarrolladores tanto de código como de base de datos y documenté las modificaciones realizadas. Además, coordiné con los equipos de seguridad y base de datos para la puesta en producción de dichas actualizaciones. Asimismo, validé los ajustes solicitados por el cliente y realicé pruebas de funcionalidad e integración.`
    },
    {
      titulo: "Data Center del Estado Dominicano (OGTIC)",
      fecha: "2020 - 2022",
      tipoEtiqueta: "Contribución",
      colorEtiqueta: "bg-purple-600",
      url: "https://ogtic.gob.do/data-center",
      descripcion: `Contribuí en la migración y actualización de aproximadamente 500 portales web del Estado dominicano, tanto a nivel de aplicación (Joomla y WordPress) como de base de datos, implementando medidas de seguridad con Cloudflare y otras herramientas para garantizar la integridad de la información. Asimismo, brindé servicios de instalación, configuración y soporte de infraestructura TIC, así como servicio de correo electrónico, para diversas instituciones del Estado, entre otras funciones.`
    },
  ];

  return (
    <section id='trabajos' className="w-full bg-gray-900 text-white py-24">
      {/* Contenedor principal */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 pt-14">
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
