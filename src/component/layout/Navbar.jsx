// Navbar.jsx

import React, { useState } from "react";
import "./Navbar.css";

import {
  FaCheckCircle,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/l-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    {
      name: "Lend Money",
      path: "/lend-money",
    },

    {
      name: "Lumpsum Lending",
      path: "/lumpsum",
    },

    {
      name: "Portfolio Performance",
      path: "/portfolio",
    },

    {
      name: "Fact Sheets",
      path: "/fact-sheet",
    },
  ];

  return (
    <header className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        <img src={logo} alt="Lenden Club" />
      </Link>

      {/* MOBILE MENU ICON */}
      <div
        className="mobile-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAVIGATION */}
      <nav className={`nav-links ${menuOpen ? "activeMenu" : ""}`}>

        {navItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item.name === "Lend Money" && (
              <FaCheckCircle className="check-icon" />
            )}

            <span>{item.name}</span>
          </Link>
        ))}

        {/* MEDIA HUB */}
        <Link
          to="/media-hub"
          className={`nav-item ${
            location.pathname === "/media-hub"
              ? "active"
              : ""
          }`}
        >
          <span>Media Hub</span>

          <FaChevronDown className="dropdown-icon" />
        </Link>

        {/* LOGIN */}
        <Link to="/login" className="nav-item login-btn">
          Login
        </Link>

        {/* SIGNUP */}
        <Link to="/signup">
          <button className="signup-btn">
            Sign Up
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;