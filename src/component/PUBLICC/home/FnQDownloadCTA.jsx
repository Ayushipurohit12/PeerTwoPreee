import React, { useState } from "react";
import "./FnQDownloadCTA.css";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// IMPORT YOUR IMAGES
import phoneMockupp from "../../../assets/Screens-4-04-1024x1024.webp";
import appStoree from "../../../assets/Finance-App-Mobile-AppStore-300x100.webp";
import playStoree from "../../../assets/Finance-App-Mobile-Google-Play-300x89.webp";

const faqData = [
  {
    question: "Is P2P lending legal in India?",
    answer:
      "Yes. P2P lending is regulated by the Reserve Bank of India (RBI) under the NBFC-P2P framework introduced in 2017.",
  },
  {
    question: "What is P2P lending and how does it work?",
    answer:
      "P2P lending allows investors to lend directly to verified borrowers through an online platform and earn attractive interest.",
  },
  {
    question: "Is my lent amount safe with LenDenClub?",
    answer:
      "All borrowers go through verification and risk assessment processes before loan disbursal.",
  },
  {
    question: "Is P2P lending through LenDenClub regulated?",
    answer:
      "Yes, the platform operates under RBI regulations applicable to NBFC-P2P platforms.",
  },
  {
    question: "How does LenDenClub verify borrowers?",
    answer:
      "Borrowers are checked through KYC, bank verification, credit profiling, and risk analysis.",
  },
  {
    question: "What if the borrower doesn’t repay?",
    answer:
      "P2P lending involves risk. Diversification across multiple borrowers helps reduce risk exposure.",
  },
];

const FnQDownloadCTA = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="dlx-wrapper">

      {/* =========================
          DOWNLOAD CTA SECTION
      ========================= */}

      <section className="dlx-cta-section">

        <motion.div
          className="dlx-cta-container"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* LEFT */}

          <motion.div
            className="dlx-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="dlx-heading">
              Ready to start
              <br />
              diversifying your
              <br />
              funds?
            </h2>

            <p className="dlx-text">
              Diversify your portfolio with LenDenClub and earn
              attractive interest by lending money in loans.
            </p>

            <div className="dlx-store-row">

              <div className="dlx-store-box">
                <span className="dlx-store-label">For IOS :</span>

                <img
                  src={appStoree}
                  alt="app-store"
                  className="dlx-store-img"
                />
              </div>

              <div className="dlx-store-box">
                <span className="dlx-store-label">For Android :</span>

                <img
                  src={playStoree}
                  alt="play-store"
                  className="dlx-store-img"
                />
              </div>

            </div>

          </motion.div>





          {/* RIGHT */}

          <motion.div
            className="dlx-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <img
              src={phoneMockupp}
              alt="phone"
              className="dlx-phone-img"
            />

          </motion.div>

        </motion.div>

      </section>









      {/* =========================
          FAQ SECTION
      ========================= */}

      <section className="dlx-faq-section">

        <motion.h2
          className="dlx-faq-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions (FAQs)
        </motion.h2>





        <div className="dlx-faq-list">

          {faqData.map((item, index) => (

            <motion.div
              key={index}
              className={`dlx-faq-item ${
                active === index ? "dlx-faq-active" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              <button
                className="dlx-faq-question"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >

                <span>{item.question}</span>

                {active === index ? (
                  <Minus className="dlx-faq-icon" />
                ) : (
                  <Plus className="dlx-faq-icon" />
                )}

              </button>





              <div
                className={`dlx-faq-answer-wrap ${
                  active === index ? "show" : ""
                }`}
              >

                <p className="dlx-faq-answer">
                  {item.answer}
                </p>

              </div>

            </motion.div>

          ))}

        </div>





        <motion.p
          className="dlx-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>Note:</strong> P2P lending involves certain risks,
          including chances of partial or entire principal loss and
          returns are not guaranteed.
        </motion.p>

      </section>

    </div>
  );
};

export default FnQDownloadCTA;