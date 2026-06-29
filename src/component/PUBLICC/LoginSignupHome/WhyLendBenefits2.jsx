import React from "react";
import "./WhyLendBenefits2.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import thumb1 from "../../../assets/about11 (1).png";
// import thumb1 from "../../../assets/videos/about11 (1).png";
// import thumb2 from "../../../assets/videos/about11 (1).png";
// import thumb3 from "../../../assets/videos/about11 (1).png";
// import thumb4 from "../../../assets/videos/about11 (1).png";


import video1 from "../../../assets/fvedio.png";
import video2 from "../../../assets/fvedio.png";
import video3 from "../../../assets/fvedio.png";

import appStoreImg from "../../../assets/Finance-App-Mobile-AppStore-300x100.webp";
import googlePlayImg from "../../../assets/Finance-App-Mobile-Google-Play-300x89.webp";
import downloadBannerImg from "../../../assets/about11 (3).png";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  {
    image: thumb1,
    title: "Episode 01",
    link: "#",
  },
  {
    image: thumb1,
    title: "Episode 02",
    link: "#",
  },
  {
    image: thumb1,
    title: "Episode 03",
    link: "#",
  },
  {
    image: thumb1,
    title: "Episode 04",
    link: "#",
  },
  {
    image: thumb1,
    title: "Episode 05",
    link: "#",
  },
  {
    image: thumb1,
    title: "Episode 06",
    link: "#",
  },
];

function WhyLendBenefits2() {
  return (
    <>
    <section id="why-lenden" className="wlb-section">

      <div className="wlb-container">

        <h2 className="wlb-title">
          Why More Than <span>3.5 Crore</span> Users
          <br />
          Trust <span>LenDenClub</span>
        </h2>

        <div className="wlb-slider-wrapper">

          <button className="wlb-prev">
            <FiChevronLeft />
          </button>

          <button className="wlb-next">
            <FiChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".wlb-prev",
              nextEl: ".wlb-next",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={28}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3.7,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <a
                  href={video.link}
                  className="wlb-video-card"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <p className="wlb-bottom-text">
          Watch real story of real lenders, how they lend,
          manage risk, and build a predictable income
          through LenDenClub.
        </p>

      </div>

    </section>

    {/* =====================================
   KNOW & GROW SECTION
===================================== */}

 <section className="knowGrowSection"  id="why-learn">

      <div className="knowGrowContainer">

        {/* LEFT */}

        <div className="knowGrowContent">
          <h2>
            New to P2P Lending or
            <br />
            Want to Understand it
            <br />
            Better?
          </h2>

          <p>
            Our Know & Grow series breaks down everything you need —
            how LenDenClub works, risks involved, RBI rules,
            earnings, and best practices, explained in simple,
            easy-to-understand language.
          </p>
        </div>

        {/* RIGHT */}

        <div className="knowGrowSliderBox">

          <button className="kg-prev">
            <FaChevronLeft />
          </button>

          <button className="kg-next">
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".kg-prev",
              nextEl: ".kg-next",
            }}
            spaceBetween={20}
            slidesPerView={1.6}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                centeredSlides: true,
                spaceBetween: 16,
              },
              576: {
                slidesPerView: 1.3,
                centeredSlides: true,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 1.5,
                centeredSlides: false,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 1.7,
                centeredSlides: false,
                spaceBetween: 20,
              },
            }}
            className="knowGrowSwiper"
          >
            <SwiperSlide>
              <div className="kgVideoCard">
                <img src={video1} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="kgVideoCard">
                <img src={video2} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="kgVideoCard">
                <img src={video3} alt="" />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="kgVideoCard">
                <img src={video3} alt="" />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="kgVideoCard">
                <img src={video3} alt="" />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="kgVideoCard">
                <img src={video3} alt="" />
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="kgVideoCard">
                <img src={video3} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>

    </section>

    <section className="wlDownloadCtaSection">

  <div className="wlDownloadCtaContainer">

    {/* LEFT */}

    <div className="wlDownloadCtaContent">

      <h2>
        Over 3.5 Cr Users are
        <br />
        Lending.
        <span> Download the App </span>
        &
        <br />
        <span>Start Lending Today!</span>
      </h2>

      <div className="wlDownloadStoreBtns">
        <img src={appStoreImg} alt="App Store" />
        <img src={googlePlayImg} alt="Google Play" />
      </div>

    </div>

    {/* RIGHT */}

    <div className="wlDownloadCtaImage">

      <div className="wlDownloadCircle">
        <img
          src={downloadBannerImg}
          alt="LenDenClub App"
        />
      </div>

    </div>

  </div>

</section>
</>
  );
}

export default WhyLendBenefits2;