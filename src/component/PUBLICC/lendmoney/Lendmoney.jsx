import React from "react";
import "./Lendmoney.css";

import lendingPhoneImg from "../../../assets/manual-lending-1-1024x915.webp"; // image import


import { motion } from "framer-motion";

import {
  FaRupeeSign,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
    },
  }),
};

const manualCards = [
  {
    icon: <FaRupeeSign />,
    title: "Loan selection",
    desc: "You can manually select borrowers based on demographic, financial, and credit information.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Flexible Loan Tenures",
    desc: "You can choose to lend for short—or long-term loan tenures, starting with two months and going up to 36 months.",
  },
  {
    icon: <FaChartLine />,
    title: "Lend in hundreds of loans at once",
    desc: "You can use sort and filter option as per your criteria. Diversify your money into multiple loans to mitigate risk.",
  },
];






const Lendmoney = () => {
  return (
    <>
    <section className="lendControl-section">

      <div className="lendControl-container">

        {/* LEFT */}
        <div className="lendControl-left">

          <img
            src={lendingPhoneImg}
            alt="Live Loans"
            className="lendControl-image"
          />

        </div>

        {/* RIGHT */}
        <div className="lendControl-right">

          <h2>
            Pick your own borrowers to lend.
          </h2>

          <p>
            Meet the future of P2P lending. Take control of your
            lending with our latest offering.
          </p>

          <button className="lendControl-btn">
            Start Lending
          </button>

        </div>

      </div>

      {/* BOTTOM FEATURES */}

      <div className="lendControl-features">

        <div className="lendControl-feature">
          ✓ Start Lending from <strong>₹ 250</strong>/loan
        </div>

        <div className="lendControl-feature">
          ↗ Pick your own loans
        </div>

        <div className="lendControl-feature">
          📈 Earn Attractive <strong>Interest</strong>
        </div>

      </div>

    </section>

     
     <section className="manualLending-section">

      <div className="manualLending-header">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What is manual lending?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Experience a new way of lending that puts you in control.
          Select your borrowers manually based on your criteria.
          Lend on loan tenure starting with 1 month and up to
          36 months.
        </motion.p>

      </div>

      <div className="manualLending-grid">

        {manualCards.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="manualLending-card"
          >
            <div className="manualLending-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </motion.div>
        ))}

      </div>

    </section>
    </>

  );
};

export default Lendmoney;