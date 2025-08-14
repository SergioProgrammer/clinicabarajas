import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const instalaciones = [
  { src: "secretaria", label: "Secretaría" },
  { src: "consulta-ORL", label: "Consulta ORL" },
  { src: "sala", label: "Sala de Espera" },
  { src: "terraza", label: "Terraza" },
  { src: "consulta-ORL-2", label: "Consulta ORL 2" },
  { src: "cabina", label: "Cabina" },
  { src: "cabina2", label: "Cabina 2" },
  { src: "cabina3", label: "Cabina 3" },
  { src: "cabina4", label: "Cabina 4" },
  { src: "laboratorio-vestibular", label: "Laboratorio Vestibular" },
  { src: "taller-protesis", label: "Taller de Prótesis" },
  { src: "laboratorio-voz", label: "Laboratorio de Voz" },
  { src: "office", label: "Office" },
  { src: "sede", label: "Sede" },
  { src: "biblioteca", label: "Biblioteca" },
  { src: "aula-formacion", label: "Aula de Formación" }
];

export default function Instalaciones() {
  return (
    <section
      id="instalaciones"
      className="bg-white py-20 px-6 md:px-20 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-10 drop-shadow-lg text-center">
          Instalaciones
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {instalaciones.map((img) => (
            <SwiperSlide key={img.src} className="flex flex-col items-center">
              <div className="w-full h-80 md:h-[28rem]">
                <img
                  src={`/instalaciones/${img.src}.webp`}
                  alt={img.label}
                  className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-xl text-sm shadow-lg">
                {img.label}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .swiper-pagination {
          bottom: 0 !important;
          position: relative;
          margin-top: 1rem;
          text-align: center;
        }
        .swiper-pagination-bullet {
          background: #14b8a6;
          opacity: 0.5;
          transition: opacity 0.2s;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #0f766e;
        }
      `}</style>
    </section>
  );
}
