// HeroSection.jsx

import React from "react";
import "./HeroSection.css";

import heroImg from "../../../assets/lendenclub-p2p-lending-app-png.webp";
import person1 from "../../../assets/avatar-1-png.webp";
import person2 from "../../../assets/avatar-4-png.webp";
// import person3 from "../../assets/person3.jpg";

import {
  FaCoins,
  FaUsers,
  FaChartLine,
  FaVideo,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../../layout/Navbar";


const HeroSection = () => {
  return (
    <>
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">

        <p className="hero-tag">
          Operating Since 2015
        </p>

        <h1>
          RBI Registered P2P <br />
          Lending Platform
        </h1>

        <p className="hero-desc">
          Lend money online to creditworthy borrowers, diversify your
          portfolio, and build a steady income stream that isn’t affected by
          market ups and downs.
        </p>

        {/* STATS */}

        <div className="hero-stats">

          <div className="stat-item">
            <FaCoins />
            <span>₹18K Cr+ disbursed</span>
          </div>

          <div className="stat-item">
            <FaUsers />
            <span>3.5 Cr+ registered users</span>
          </div>

          <div className="stat-item">
            <FaChartLine />
            <span>Avg 24% p.a. Earned</span>
          </div>

        </div>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            <FaVideo />
            How it Works
          </button>

        </div>

        <p className="start-text">
          Start with ₹25,000
        </p>

        {/* BOTTOM BADGES */}

        <div className="bottom-badges">

          <div className="badge">
            <span>RBI</span>
            Regulated
          </div>

          <div className="badge">
            <span>Low</span>
            NPA
          </div>

          <div className="badge">
            <FaShieldAlt />
            Secure
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="hero-right">
          
        <img src={heroImg} alt="" className="hero-main-img" />

        {/* FLOATING CARDS */}

        <div className="floating-card card1">
          <img src={person1} alt="" />
          <div>
            <p>Earned</p>
            <h4>₹12,46,008</h4>
          </div>
        </div>

        <div className="floating-card card2">
          <img src={person2} alt="" />
          <div>
            <p>Earned</p>
            <h4>₹41,390</h4>
          </div>
        </div>

        <div className="floating-card card3">
          <img src={person1} alt="" />
          <div>
            <p>Earned</p>
            <h4>₹8,06,085</h4>
          </div>
        </div>

       
          
      </div>

    </section>
    
    
    </>
  );
};

export default HeroSection;