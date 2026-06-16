// Footer.jsx

import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

import footerLogo from "../../assets/logo-innofin-temp-4-1-2048x1454.webp";

const Footer = () => {
  return (
    <footer className="footer">

      {/* MAIN CONTAINER */}

      <div className="footer-container">

        {/* TOP BOX */}

        <div className="footer-box">

          {/* LEFT */}

          <div className="footer-left">

            <img
              src={footerLogo}
              alt=""
              className="footer-logo"
            />

            <p>
              LenDenClub is India’s largest Peer to Peer lending
              platform which started operations in India in 2015.
              We have been helping lenders diversify their
              portfolio beyond traditional investment instruments
              ever since.
            </p>

          </div>

          {/* ABOUT */}

          <div className="footer-links">

            <h3>About</h3>

            <a href="/">Home</a>

            <a href="/">About us</a>

            <a href="/">Become a Partner</a>

            <a href="/">Careers</a>

            <a href="/">Business Model</a>

            <a href="/">Partner Login/Signup</a>

          </div>

          {/* LENDING */}

          <div className="footer-links">

            <h3>Lending</h3>

            <a href="/">Portfolio Performance</a>

            <a href="/">Credit Assessment</a>

            <a href="/">Who can lend?</a>

            <a href="/">Help & Support</a>

            <hr />

            <a href="/">Sign-in</a>

            <a href="/">Create Account</a>

          </div>

          {/* RESOURCES */}

          <div className="footer-links">

            <h3>Resources</h3>

            <a href="/">Blogs</a>

            <a href="/">Contact Us</a>

            <a href="/">Grievance Redressal</a>

            <a href="/">Fair Practice Code</a>

            <a href="/">Fact Sheet</a>

            <a href="/">Recovery And Collection Agencies</a>

            <a href="/">Corporate Social Responsibility (CSR)</a>

            <a href="/">List of LSPs</a>

          </div>

        </div>

        {/* DISCLAIMER */}

        <div className="footer-disclaimer">

          <p className="footer-note">
            *Calculated as per the last 6 months’ average returns
            by lenders who lent for 12 months tenure
          </p>

          <p>
           LenDenClub, operated by Innofin Solutions Pvt Ltd (ISPL) is registered as a peer-to-peer lending non-banking financial company (“NBFC-P2P”) with the Reserve Bank of India (“RBI”). The Reserve Bank of India does not accept any responsibility for the correctness of any of the statements or representations made or opinions expressed by Innofin Solutions Private Limited, and does not provide any assurance for repayment of the loans lent through its platform.
          </p>

          <p>
            <strong>
              Registration Number:
            </strong>{" "}
            N-13.02267.
          </p>

          <p>
            LenDenClub is an Intermediary under the provisions
            of the Information Technology Act, 2000 and
            virtually connects lenders and borrowers through
            its electronic platform via the website and/or
            mobile app.
          </p>

          <p>
            The lending transaction is purely between lenders and borrowers at their own discretion, and LenDenClub does not assure loan fulfilment and/or lending simple interest. Also, the information provided on the platform is verified or checked on the best efforts basis without guaranteeing any accuracy of the data/information verification. Any lending decision taken by a lender on the basis of this information is at the discretion of the lender, and LenDenClub does not guarantee that the loan amount will be recovered from the borrower, fully or partially. The risk is entirely on the lender. LenDenClub will not be responsible for the full or partial loss of the principal and/or interest of lenders’ lending amounts.
          </p>

          <p className="footer-risk">
            *P2P lending is subject to risks. Lending decisions
            taken by a lender are at the discretion of the
            lender, and LenDenClub does not guarantee that the
            loan amount will be recovered from the borrower.
          </p>

          <p>
            <strong>
              CIN:
            </strong>{" "}
            U65990MH2022PTC376689.
          </p>

          {/* BOTTOM */}

          <div className="footer-bottom">

            {/* POLICY */}

            <div className="footer-policy">

              <a href="/">
                Privacy Policy |
              </a>

              <a href="/">
                Terms of Services
              </a>

            </div>

            {/* SOCIAL */}

            <div className="footer-social">

              <div className="social-icon">
                <FaFacebookF />
              </div>

              <div className="social-icon">
                <FaTimes />
              </div>

              <div className="social-icon">
                <FaInstagram />
              </div>

              <div className="social-icon">
                <FaLinkedinIn />
              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;