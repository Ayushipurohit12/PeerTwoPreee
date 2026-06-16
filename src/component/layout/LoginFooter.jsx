// AuthFooter.jsx

import React from "react";
import "./LoginFooter.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

// import logo from "../../../assets/white-logo.png";
import footerLogo from "../../assets/logo-innofin-temp-4-1-2048x1454.webp";

const LoginFooter = () => {

  return (

    <footer className="auth-footer">

      <div className="auth-footer-container">

        {/* TOP */}

        <div className="auth-footer-top">

          <img
            src={footerLogo}
            alt="LenDenClub"
            className="auth-footer-logo"
          />

          <p>
            LenDenClub is a largest peer-to-peer lending
            platform which started operations in India in
            2015. We have been helping lenders diversify
            their lending amount beyond traditional lending
            instruments ever since.
          </p>

          <p>
            P2P lending is subject to risks. And lending
            decisions taken by a lender on the basis of
            this information are at the discretion of the
            lender, and LenDenClub does not guarantee that
            the loan amount will be recovered from the
            borrower.
          </p>

          <p>
            LenDenClub is a P2P platform owned and operated
            by Innofin Solutions Pvt Ltd. Innofin Solutions
            Pvt Ltd is an RBI registered NBFC-P2P.
          </p>

        </div>

        {/* LINE */}

        <div className="auth-footer-line"></div>

        {/* BOTTOM */}

        <div className="auth-footer-bottom">

          {/* LEFT */}

          <div className="footer-copy">
            ©2026 LenDenClub by Innofin Solutions Private Limited
          </div>

          {/* CENTER */}

          <div className="footer-made">
            Made with 🤍 in India
          </div>

          {/* RIGHT */}

          <div className="footer-social">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default LoginFooter;