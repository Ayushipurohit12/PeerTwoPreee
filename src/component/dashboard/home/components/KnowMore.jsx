import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { videos } from "../data/dashboardData";
import VideoCard from "./VideoCard";

export default function KnowMore() {
  const carouselVideos = [...videos, ...videos];

  return (
    <div className="content-card section-block know-more-section">
      <h2 className="know-more-hdr">
        <span style={{ marginRight: 8 }}>💡</span>
        Know More about LenDenClub
      </h2>
      <Swiper
        className="know-more-swiper"
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={12}
        loop
        speed={4500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove
        grabCursor
      >
        {carouselVideos.map((v, i) => (
          <SwiperSlide key={`${v.title}-${i}`} className="know-more-slide">
            <VideoCard video={v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
