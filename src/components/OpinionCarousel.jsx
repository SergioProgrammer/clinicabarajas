import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    author_name: "Juan Pérez",
    text: "Excelente atención y profesionalismo. Muy recomendable.",
    rating: 5,
    relative_time_description: "Hace 2 semanas",
    profile_photo_url: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    author_name: "Ana Gómez",
    text: "Me sentí muy cómoda durante mi consulta.",
    rating: 4,
    relative_time_description: "Hace 1 mes",
    profile_photo_url: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    author_name: "Carlos Ruiz",
    text: "El personal es muy amable y resolvieron todas mis dudas.",
    rating: 5,
    relative_time_description: "Hace 3 días",
    profile_photo_url: "https://randomuser.me/api/portraits/men/68.jpg"
  }
];

export default function OpinionCarousel() {
  if (!reviews.length) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
        No hay reseñas disponibles.
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 0", maxWidth: "1100px", margin: "0 auto" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "28px 22px",
                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "240px",
              }}
            >
              {/* Foto de perfil + nombre */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "12px",
                  }}
                />
                <h3 style={{ fontWeight: 600, color: "#222", fontSize: "16px" }}>
                  {review.author_name}
                </h3>
              </div>

              {/* Texto */}
              <p style={{ fontSize: "15px", color: "#444", marginBottom: "18px", flex: 1 }}>
                {review.text}
              </p>

              {/* Estrellas */}
              <div style={{ color: "#f5a623", fontSize: "18px" }}>
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </div>

              {/* Fecha */}
              {review.relative_time_description && (
                <div style={{ fontSize: "13px", color: "#aaa", marginTop: "8px" }}>
                  {review.relative_time_description}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
