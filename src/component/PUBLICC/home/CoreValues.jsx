import React from "react";
import { motion } from "framer-motion";
import "./CoreValues.css";

import {
  HiCursorClick,
  HiOutlineChartBar,
} from "react-icons/hi";

import { BsGraphUpArrow } from "react-icons/bs";
import { RiMagicLine } from "react-icons/ri";


import phoneImg from "../../../assets/steps-to-signup-in-p2p-lending-as-investor (1).webp";

const cardAnimation = {
  hidden: { opacity: 0, y: 70 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const CoreValues = () => {
  return (
    <div className="cvx-wrapper">

      {/* =========================
          VALUES SECTION
      ========================== */}

      <section className="cvx-values-section">

        <motion.h2
          className="cvx-main-heading"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Core values of our online lending
          <br />
          platform that deliver great results
        </motion.h2>





        <div className="cvx-cards-grid">

          {/* CARD 1 */}

          <motion.div
            className="cvx-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
          >

            <div className="cvx-icon-wrap">
              <HiCursorClick className="cvx-card-icon" />
            </div>

            <h3 className="cvx-card-title">
              100% Digital Process
            </h3>

            <p className="cvx-card-text">
              LenDenClub is a digital-first platform. There is no manual or physical interventions needed to start lending.
            </p>

          </motion.div>



          {/* CARD 2 */}

          <motion.div
            className="cvx-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >

            <div className="cvx-icon-wrap">
              <HiOutlineChartBar className="cvx-card-icon" />
            </div>

            <h3 className="cvx-card-title">
              Fund Diversification
            </h3>

            <p className="cvx-card-text">
             The platform allows you to diversify across hundreds of borrowers with as little as ₹250 per borrower, helping minimise risk.
            </p>

          </motion.div>





          {/* CARD 3 */}

          <motion.div
            className="cvx-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >

            <div className="cvx-icon-wrap">
              <BsGraphUpArrow className="cvx-card-icon" />
            </div>

            <h3 className="cvx-card-title">
              No Withdrawal Fee
            </h3>

            <p className="cvx-card-text">
              There is no charge for the withdrawal of your funds. You can get your funds in your bank a/c within 24 hrs of placing a request post maturity.
            </p>

          </motion.div>





          {/* CARD 4 */}

          <motion.div
            className="cvx-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{ once: true }}
          >

            <div className="cvx-icon-wrap">
              <RiMagicLine className="cvx-card-icon" />
            </div>

            <h3 className="cvx-card-title">
              Complete Transparency
            </h3>

            <p className="cvx-card-text">
             Track where your money is lent, monitor portfolio performance in real time, and stay updated on repayments with complete transparency.
            </p>

          </motion.div>

        </div>





        <motion.button
          className="cvx-create-btn"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Create Account Now
        </motion.button>

      </section>









      {/* =========================
          STEPS SECTION
      ========================== */}

      <section className="cvx-steps-section">

        <div className="cvx-steps-container">

          {/* LEFT */}

          <motion.div
            className="cvx-steps-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="cvx-steps-heading">
              It is easier to start lending.
              Follow these three steps to get started.
            </h2>





            <div className="cvx-steps-list">

              <div className="cvx-step-item">
                <div className="cvx-step-number">1</div>

                <p className="cvx-step-text">
                  Sign up using mobile number
                </p>
              </div>





              <div className="cvx-step-item">
                <div className="cvx-step-number">2</div>

                <p className="cvx-step-text">
                  Complete your KYC
                </p>
              </div>





              <div className="cvx-step-item">
                <div className="cvx-step-number">3</div>

                <p className="cvx-step-text">
                  Start Lending
                </p>
              </div>

            </div>





            <button className="cvx-step-btn">
              Create Account
            </button>

          </motion.div>









          {/* RIGHT */}

          <motion.div
            className="cvx-steps-right"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <motion.img
              src={phoneImg}
              alt="phone"
              className="cvx-phone-image"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default CoreValues;