import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Otorrinolaringología",
    description:
      "Diagnóstico y tratamiento de las enfermedades de cuello, garganta, nariz y oído. En nuestro centro somos especialistas en enfermedades como otitis, amigdalitis o rinitis así como el diagnóstico médico de la sordera, hipoacusia o el vértigo y problemas de equilibrio.",
    image: "/especialidades/otorrinolaringologia.webp",
  },
  {
    title: "Pérdida de Audición",
    description:
      "Estudio de la pérdida auditiva en adultos, niños y recién nacidos. La sordera en distinto grado puede complicar severamente la vida de quien la padece. En nuestro centro somos especialistas en el diagnostico, tratamiento y seguimiento de la audición a lo largo de toda la vida del paciente.",
    image: "/especialidades/perdida-audicion.webp",
  },
  {
    title: "Audífonos",
    description:
      "Adaptación de audífonos con un enfoque profesional centrándonos en las necesidades clínicas de cada paciente. Nuestro compromiso con un diagnóstico preciso y un seguimiento clínico exhaustivo nos permite asegurar una adaptación óptima durante un largo periódo de tiempo. Contamos con especialistas capacitados en atender tanto a niños como a adultos.",
    image: "/especialidades/audifonos.webp",
  },
  {
    title: "Vértigo",
    description:
      "Diagnóstico y rehabilitación de los trastornos del equilibrio, vértigos y mareos. Contamos con la tecnología para el diagnóstico única en Canarias. Estudiamos y tratamos patología vestibular como la enfermedad de Ménière, la neuritis vestibular, o el Vertigo Paroxistico Beningno.",
    image: "/especialidades/vertigo.webp",
  },
  {
    title: "Ruido en los Oídos",
    description:
      "Los ruidos en los oídos de manera ocasional o constante pueden ser motivo de malestar y causar problemas como imsonio o dificultades para oír. En nuestro centro estudiamos el ruido en los oídos, el acúfeno o tinnitus, mediante la tecnología más avanzada indicando el tratamiento mas apropiado para cada paciente.",
    image: "/especialidades/ruido-oido.webp",
  },
  {
    title: "Niños y Recién Nacidos",
    description:
      "Abordamos tempranamente problemas en los oídos y la audición. Especializados en el tratamiento de infecciones de oído y en el diagnóstico de la pérdida auditiva en recién nacidos y niños pequeños.  Abarcamos el estudio de las dificultades auditivas que pueden interferir en el desarrollo escolar y que pueden darse junto a otros trastornos del desarrollo.",
    image: "/especialidades/pruebas-clinicas.webp",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <style>{`
        .service-card {
          min-height: 300px;
          height: 100%;
          position: relative;
          background: #FFFFFF;
          cursor: pointer;
          transition: box-shadow 0.3s;
        }
        .service-card:hover,
        .service-card:focus-within,
        .service-card:active {
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        }
        .service-card .service-overlay {
          position: absolute;
          inset: 0;
          background: #14b8a6;
          color: #FFFFFF;
          opacity: 0;
          transition: opacity 0.3s, background 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 32px 18px;
          z-index: 2;
          pointer-events: none;
        }
        .service-card:hover .service-overlay,
        .service-card:focus-within .service-overlay,
        .service-card:active .service-overlay {
          opacity: 1;
          pointer-events: auto;
        }
        .service-card .service-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 2px 2px 0 0;
          filter: brightness(1);
          transition: filter 0.3s;
        }
        .service-card:hover .service-img,
        .service-card:focus-within .service-img,
        .service-card:active .service-img {
          filter: brightness(0.5);
        }
        .service-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: #14b8a6;
          margin: 0;
          padding: 28px 0 0 0;
          z-index: 3;
          position: relative;
          transition: opacity 0.3s;
        }
        .service-card:hover .service-title,
        .service-card:focus-within .service-title,
        .service-card:active .service-title {
          opacity: 0;
        }
      `}</style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
      <section className="py-14 bg-[#14b8a6]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-12 mt-0 ">
            Nuestras  
            <span class="bg-white px-3 pt-16 ml-2 pb-1 rounded-xl text-teal-500 shadow-lg">
              Especialidades
            </span>
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                tabIndex={0}
                className="service-card rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                key={service.title}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img"
                />
                <h3 className="service-title">{service.title}</h3>
                <div className="service-overlay">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 14 }}>{service.title}</h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}