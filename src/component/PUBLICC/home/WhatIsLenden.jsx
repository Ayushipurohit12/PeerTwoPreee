import React from "react";
import "./WhatIsLenden.css";

import { motion } from "framer-motion";


import mapImage from '../../../assets/india-map-e1694493678263-650x650.webp'
import p2pImage from '../../../assets/how-p2p-lending-works-1024x367.webp'
import phoneImage from '../../../assets/Website-Screen-2-2-322x650.webp'

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const phoneAnim = {
  hidden: {
    opacity: 0,
    y: 220,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: -70,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhatIsLenden = () => {
  return (
    <div className="wl-wrapper">

      {/* HERO SECTION */}

      <section className="wl-hero-section">

        <div className="wl-hero-container">

          <motion.div
            className="wl-hero-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <p className="wl-hero-tag">
              We are growing, join us!
            </p>

            <h1 className="wl-hero-heading">
              Over 3.5 Cr Indians have joined LenDenClub. What about you?
            </h1>

            <button className="wl-hero-btn">
              Start Lending
            </button>

          </motion.div>



          <motion.div
            className="wl-hero-right"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <div className="wl-hero-blur"></div>

            <img
              src={mapImage}
              alt="map"
              className="wl-hero-map"
            />

          </motion.div>

        </div>

      </section>






      {/* P2P SECTION */}

      <section className="wl-p2p-section">

        <div className="wl-p2p-container">

          <motion.h2
            className="wl-section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What is P2P lending?
          </motion.h2>


          <motion.p
            className="wl-section-para"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
           Peer-to-Peer (P2P) lending in India connects individuals for lending activities through RBI-regulated platforms. Since its emergence in 2012 and regulatory recognition in 2018, the sector has grown steadily, with projections estimating a CAGR of 21.6% and a market size of USD 10 billion by 2026. Users can complete KYC verification, review available options based on tenure, risk categories and allocate funds accordingly to earn interest based on repayments. While the model has contributed to financial inclusion, outcomes depend on repayment behavior, and there may be delays or defaults. You can learn more in the detailed article on peer-to-peer lending in India.
          </motion.p>



          <motion.div
            className="wl-diagram-wrap"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            viewport={{ once: true }}
          >

            <img
              src={p2pImage}
              alt="diagram"
              className="wl-diagram-image"
            />

          </motion.div>

        </div>

      </section>








      {/* MOBILE SECTION */}

  

<section className="wl-mobile-section">

  <div className="wl-mobile-container">

    {/* PHONE */}

    <motion.div
      className="wl-mobile-left"
      variants={phoneAnim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <img
        src={phoneImage}
        alt="phone"
        className="wl-phone-image"
      />

    </motion.div>




    {/* CONTENT */}

    <motion.div
      className="wl-mobile-right"
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <h2 className="wl-mobile-heading">

        Why settle for less when you can earn
        <u className="under"> better interest with us?</u>

      </h2>


      <p className="wl-mobile-text">

        Download the LenDenClub app now, or start your
        peer to peer lending journey from here itself!

      </p>


      <div className="wl-btn-wrap">

        <button className="wl-primary-btn">
          Create Account
        </button>

        <button className="wl-secondary-btn">
          Download App
        </button>

      </div>

    </motion.div>

  </div>

</section>

    </div>
  );
};

export default WhatIsLenden;