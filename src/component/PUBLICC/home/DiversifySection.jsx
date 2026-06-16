// DiversifySection.jsx

import React from "react";

import "./DiversifySection.css";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaShieldAlt,
  FaHandHoldingUsd,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================
   LOAN DATA
========================================= */

const loanData = [
  {
    id: 1,
    name: "Dilshad...",
    rate: "36.00%",
    tenure: "3 Month(s)",
    amount: "₹ 10,000",
  },

  {
    id: 2,
    name: "Pratik...",
    rate: "25.20%",
    tenure: "6 Month(s)",
    amount: "₹ 45,000",
  },

  {
    id: 3,
    name: "Yarlagadda...",
    rate: "35.88%",
    tenure: "3 Month(s)",
    amount: "₹ 13,700",
  },

  {
    id: 4,
    name: "Rajesh...",
    rate: "35.88%",
    tenure: "3 Month(s)",
    amount: "₹ 6,000",
  },

  {
    id: 5,
    name: "Gopal...",
    rate: "25.20%",
    tenure: "6 Month(s)",
    amount: "₹ 40,000",
  },

  {
    id: 6,
    name: "Kumar...",
    rate: "35.88%",
    tenure: "4 Month(s)",
    amount: "₹ 37,500",
  },
];

/* =========================================
   WHY DATA
========================================= */

const whyData = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Verified Borrowers",
    desc: "Every borrower goes through strict AI verification process.",
  },

  {
    id: 2,
    icon: <FaHandHoldingUsd />,
    title: "Diversified Lending",
    desc: "Spread investments across multiple borrowers for lower risk.",
  },

  {
    id: 3,
    icon: <FaUsers />,
    title: "Trusted Community",
    desc: "India’s largest trusted peer to peer lending ecosystem.",
  },

  {
    id: 4,
    icon: <FaChartLine />,
    title: "Smart Analytics",
    desc: "Advanced borrower insights & portfolio tracking system.",
  },

  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Secure Platform",
    desc: "Enterprise grade fintech security & compliance system.",
  },

  {
    id: 6,
    icon: <FaUsers />,
    title: "Dedicated Support",
    desc: "Professional customer support & collection assistance.",
  },

  {
    id: 7,
    icon: <FaChartLine />,
    title: "Stable Returns",
    desc: "Consistent earning opportunities with risk management.",
  },
];

const DiversifySection = () => {
  return (
    <section className="diversify-section">

      {/* =========================================
          TITLE
      ========================================= */}

      <motion.h2
        className="diversify-title"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Diversify Your Portfolio
      </motion.h2>

      <motion.p
        className="diversify-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Spread your capital across multiple borrowers to manage risk and
        earn strong returns with intelligent diversification.
      </motion.p>

      <motion.h3
        className="green-title"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Lend Smarter, Spread the Risk
      </motion.h3>

      {/* =========================================
          LOAN GRID
      ========================================= */}

      <div className="loan-grid">

        {loanData.map((item, index) => (
          <motion.div
            className="loan-card"
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
            }}
          >

            {/* TOP */}

            <div className="loan-top">

              <div>

                <p className="small-text">
                  Borrower Name
                </p>

                <h4>{item.name}</h4>

              </div>

              <span className="view-details">
                View Details
                <FaArrowRight />
              </span>

            </div>

            {/* BOTTOM */}

            <div className="loan-bottom">

              <div>
                <p>Interest Rate</p>
                <h5>{item.rate}</h5>
              </div>

              <div>
                <p>Loan Tenure</p>
                <h5>{item.tenure}</h5>
              </div>

              <div>
                <p>Loan Amount</p>
                <h5>{item.amount}</h5>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* =========================================
          BUTTON
      ========================================= */}

      <motion.button
        className="signup-loan-btn"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.03,
        }}
      >
        Sign Up or Login to View all Loans
      </motion.button>

      {/* =========================================
          WHY TITLE
      ========================================= */}

      <motion.h2
        className="why-title"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Join The Largest P2P Lending Platform In India?
      </motion.h2>

      {/* =========================================
          SLIDER
      ========================================= */}

      <Swiper
        slidesPerView={3}
        spaceBetween={22}
        loop={true}
        speed={900}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}

        breakpoints={{

          0: {
            slidesPerView: 1,
          },

          700: {
            slidesPerView: 2,
          },

          1100: {
            slidesPerView: 3,
          },

        }}

        modules={[
          Pagination,
          Autoplay,
        ]}

        className="why-swiper"
      >

        {whyData.map((item) => (

          <SwiperSlide key={item.id}>

            <motion.div
              className="why-card"

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -7,
              }}
            >

              {/* ICON */}

              <div className="why-icon">
                {item.icon}
              </div>

              {/* TITLE */}

              <h3>{item.title}</h3>

              {/* DESC */}

              <p>{item.desc}</p>

            </motion.div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default DiversifySection;