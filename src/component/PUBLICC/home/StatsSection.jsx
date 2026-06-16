// StatsSection.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./StatsSection.css";

import {
  FaWallet,
  FaChartPie,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

import { motion } from "framer-motion";

/* =========================
   STATS DATA
========================= */

const statsData = [
  {
    id: 1,
    icon: FaWallet,
    value: 1260,
    suffix: "Cr",
    title: "in Asset Under Management",
  },

  {
    id: 2,
    icon: FaChartPie,
    value: 18000,
    suffix: "Cr+",
    title: "Total Amount Disbursed",
  },

  {
    id: 3,
    icon: FaUsers,
    value: 3.5,
    suffix: "Cr+",
    title: "Registered Users",
  },

  {
    id: 4,
    icon: FaChartBar,
    value: 3.09,
    suffix: "Cr",
    title: "No of Loans Disbursed",
  },
];

/* =========================
   COUNTER
========================= */

const Counter = ({ value, startAnimation }) => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!startAnimation) return;

    let start = 0;

    const duration = 2500;

    const increment = value / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= value) {

        setCount(value);

        clearInterval(timer);

      } else {

        setCount(start);
      }

    }, 16);

    return () => clearInterval(timer);

  }, [value, startAnimation]);

  return (
    <>
      {
        value % 1 !== 0
          ? count.toFixed(2)
          : Math.floor(count).toLocaleString()
      }
    </>
  );
};

/* =========================
   MAIN COMPONENT
========================= */

const StatsSection = () => {

  const sectionRef = useRef(null);

  const [startCounter, setStartCounter] =
    useState(false);

  /* =========================
     INTERSECTION OBSERVER
  ========================= */

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setStartCounter(true);

          observer.disconnect();
        }
      },

      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {

      observer.observe(sectionRef.current);
    }

    return () => {

      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

  }, []);

  return (
    <section
      className="stats-section"
      ref={sectionRef}
    >

      {/* TITLE */}

      <motion.h2
        className="stats-title"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        India's largest peer to peer lending platform
      </motion.h2>

      {/* GRID */}

      <div className="stats-grid">

        {statsData.map((item, index) => {

          const Icon = item.icon;

          return (
            <motion.div
              className="stats-card"
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
            >

              {/* ICON */}

              <div className="stats-icon">
                <Icon />
              </div>

              {/* CONTENT */}

              <div className="stats-content">

                <h3>
                  ₹

                  <Counter
                    value={item.value}
                    startAnimation={
                      startCounter
                    }
                  />

                  {item.suffix}
                </h3>

                <p>{item.title}</p>

              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default StatsSection;