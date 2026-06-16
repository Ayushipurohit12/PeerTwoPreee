// AuthNavbar.jsx

import React, { useState, useEffect } from "react";
import "./LoginNavbar.css";

import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/l-logo.png";

const LoginNavbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  // SMOOTH SCROLL

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (

    <header
      className={`auth-navbar ${scrolled ? "scrolled" : ""}`}
    >

      {/* LOGO */}
      <Link to="/" className="auth-logo">

        <img src={logo} alt="logo" />

      </Link>

      {/* MOBILE ICON */}

      <div
        className="auth-mobile-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV LINKS */}

      <nav
        className={`auth-nav-links ${
          menuOpen ? "activeMenu" : ""
        }`}
      >

        <div
          className="auth-nav-item"
          onClick={() =>
            scrollToSection("why-lendenclub")
          }
        >
          Why LenDenClub
        </div>

        <div
          className="auth-nav-item"
          onClick={() =>
            scrollToSection("why-lenden")
          }
        >
          About us
        </div>

        <div
          className="auth-nav-item"
          onClick={() =>
            scrollToSection("why-learn")
          }
        >
          Learn more
        </div>

        {/* DOWNLOAD BUTTON */}

        <button className="download-btn">
          Download app
        </button>

      </nav>
    </header>
  );
};

export default LoginNavbar;