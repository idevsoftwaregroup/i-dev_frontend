import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { data } from "../data/data";

interface BannerProps {
  searchTerm?: string;
}

export default function Banner({ searchTerm = "" }: BannerProps) {
  const [selectedSlide, setSelectedSlide] = useState<
    (typeof data)[number] | null
  >(null);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredSlides = data.filter((item) => {
    if (!normalizedSearch) {
      return true;
    }

    return (
      item.title.toLowerCase().includes(normalizedSearch) ||
      item.text.toLowerCase().includes(normalizedSearch) ||
      item.label.toLowerCase().includes(normalizedSearch) ||
      item.description.toLowerCase().includes(normalizedSearch)
    );
  });

  return (
    <>
      {filteredSlides.length > 0 ? (
        <Swiper
          spaceBetween={20}
          loop={filteredSlides.length > 1}
          dir="rtl"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {filteredSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <article
                className="card border borderInput round gray"
                dir="rtl"
                onClick={() => setSelectedSlide(item)}
                style={{
                  border: "1px solid #dedede",
                  overflow: "hidden",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <div
                  className="center-align"
                  style={{
                    width: "100%",
                    height: "180px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "16px",
                    textAlign: "right",
                  }}
                >
                  <span
                    className="small"
                    style={{
                      opacity: 0.6,
                    }}
                  >
                    {item.label}
                  </span>

                  <h5
                    style={{
                      margin: "8px 0",
                    }}
                  >
                    {item.title}
                  </h5>

                  <p
                    className="small"
                    style={{
                      margin: 0,
                      lineHeight: 1.8,
                      opacity: 0.75,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          dir="rtl"
          className="center-align"
          style={{
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          <i className="large">search_off</i>

          <h5 style={{ marginTop: "10px" }}>نتیجه‌ای پیدا نشد</h5>

          <p style={{ opacity: 0.7 }}>
            موردی مطابق با «{searchTerm}» در خدمات ما پیدا نشد.
          </p>
        </div>
      )}

      {/* Modal */}

      {selectedSlide && (
        <div
          onClick={() => setSelectedSlide(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
            style={{
              width: "100%",
              maxWidth: "650px",
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,.25)",
            }}
          >
            <img
              src={selectedSlide.image}
              alt={selectedSlide.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                padding: "24px",
                textAlign: "right",
              }}
            >
              <span
                className="small"
                style={{
                  opacity: 0.6,
                }}
              >
                {selectedSlide.label}
              </span>

              <h3
                style={{
                  margin: "8px 0 12px",
                }}
              >
                {selectedSlide.title}
              </h3>

              <p
                style={{
                  lineHeight: 2,
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                {selectedSlide.description}
              </p>

              <button
                className="button"
                onClick={() => setSelectedSlide(null)}
                style={{
                  marginTop: "20px",
                }}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
