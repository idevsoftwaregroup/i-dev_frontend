import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Banner() {
  const [selectedSlide, setSelectedSlide] = useState<
    (typeof slides)[number] | null
  >(null);
  const slidesPerViewNumber = 3;
  const slides = [
    {
      title: "طراحی و توسعه وب‌سایت",
      text: "وب‌سایت‌های مدرن، سریع و ریسپانسیو برای کسب‌وکار شما",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      label: "توسعه وب",
      description:
        "طراحی و توسعه وب‌سایت‌های شرکتی، فروشگاهی، پورتال‌ها و سامانه‌های اختصاصی با تمرکز بر عملکرد، امنیت و تجربه کاربری.",
    },
    {
      title: "توسعه نرم‌افزار اختصاصی",
      text: "راهکارهای نرم‌افزاری متناسب با نیاز و فرآیندهای کسب‌وکار شما",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      label: "نرم‌افزار اختصاصی",
      description:
        "تحلیل، طراحی و توسعه نرم‌افزارهای اختصاصی برای اتوماسیون فرآیندها، مدیریت کسب‌وکار و ایجاد راهکارهای دیجیتال.",
    },
    {
      title: "طراحی و توسعه اپلیکیشن",
      text: "اپلیکیشن‌های حرفه‌ای برای Android و iOS",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
      label: "اپلیکیشن موبایل",
      description:
        "طراحی و توسعه اپلیکیشن‌های موبایل با رابط کاربری مدرن، عملکرد مناسب و معماری قابل توسعه.",
    },
    {
      title: "UI / UX و طراحی محصول",
      text: "طراحی رابط کاربری زیبا و تجربه کاربری هدفمند",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
      label: "طراحی محصول",
      description:
        "طراحی تجربه کاربری و رابط کاربری برای محصولات دیجیتال با تمرکز بر سادگی، کاربردپذیری و افزایش رضایت کاربران.",
    },
    {
      title: "مشاوره فناوری",
      text: "معماری نرم‌افزار، انتخاب تکنولوژی و طراحی زیرساخت",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      label: "مشاوره فناوری",
      description:
        "ارائه مشاوره تخصصی در زمینه معماری نرم‌افزار، انتخاب فناوری، زیرساخت، امنیت و طراحی سیستم‌های مقیاس‌پذیر.",
    },
  ];
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={20}
        loop={true}
        dir="rtl"
        breakpoints={{
          // Mobile
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          // Laptop / Desktop
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {" "}
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            {" "}
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
              {" "}
              <div
                className="center-align"
                style={{ width: "100%", height: "180px", overflow: "hidden" }}
              >
                {" "}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />{" "}
              </div>{" "}
              <div style={{ padding: "16px", textAlign: "right" }}>
                {" "}
                <span className="small" style={{ opacity: 0.6 }}>
                  {" "}
                  {/* {item.label}{" "} */}
                </span>{" "}
                <h5 style={{ margin: "8px 0" }}> {item.title} </h5>{" "}
                <p
                  className="small"
                  style={{ margin: 0, lineHeight: 1.8, opacity: 0.75 }}
                >
                  {" "}
                  {/* {item.text}{" "} */}
                </p>{" "}
              </div>{" "}
            </article>{" "}
          </SwiperSlide>
        ))}{" "}
      </Swiper>{" "}
      {/* Modal */}{" "}
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
          {" "}
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
            {" "}
            <img
              src={selectedSlide.image}
              alt={selectedSlide.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                display: "block",
              }}
            />{" "}
            <div style={{ padding: "24px", textAlign: "right" }}>
              {" "}
              <span className="small" style={{ opacity: 0.6 }}>
                {" "}
                {selectedSlide.label}{" "}
              </span>{" "}
              <h3 style={{ margin: "8px 0 12px" }}> {selectedSlide.title} </h3>{" "}
              <p style={{ lineHeight: 2, margin: 0, opacity: 0.8 }}>
                {" "}
                {selectedSlide.description}{" "}
              </p>{" "}
              <button
                className="button"
                onClick={() => setSelectedSlide(null)}
                style={{ marginTop: "20px" }}
              >
                {" "}
                بستن{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
}
