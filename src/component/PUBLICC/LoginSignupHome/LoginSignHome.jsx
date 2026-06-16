import React from "react";
import "./LoginSignHome.css";

import personImage from "../../../assets/prsn.png";
import rbiBadge from "../../../assets/about11.png";

const LoginSignHome = () => {
  return (
    <section className="whyLenden-section">

      {/* ===========================
          TOP STATS BAR
      =========================== */}

      <div className="whyLenden-statsBar">

        <div className="whyLenden-statsContainer">

          <div className="whyLenden-statItem">
            <h2>18,000 Cr+</h2>
            <p>Lent by users</p>
          </div>

          <div className="whyLenden-divider"></div>

          <div className="whyLenden-statItem">
            <h2>3.5 Cr+</h2>
            <p>Trusted Users</p>
          </div>

          <div className="whyLenden-divider"></div>

          <div className="whyLenden-statItem">
            <h2>2015</h2>
            <p>Operating since</p>
          </div>

          <div className="whyLenden-divider"></div>

          <div className="whyLenden-statItem">
            <h2>4.5+</h2>
            <p>Rated on app store</p>
          </div>

          <div className="whyLenden-badge">
            <img src={rbiBadge} alt="RBI Badge" />
          </div>

        </div>

      </div>

      {/* ===========================
          MAIN CONTENT
      =========================== */}

      <div className="whyLenden-container">

        {/* IMAGE */}

        <div className="whyLenden-left">

          <div className="whyLenden-imageCard">

            <img
              src={personImage}
              alt="P2P"
              className="whyLenden-image"
            />

          </div>

        </div>

        {/* CONTENT */}

        <div className="whyLenden-right">

          <h2>
            What is P2P Lending?
          </h2>

          <p>
            Peer-to-Peer (P2P) lending simply means lending money directly
            to people who need it, through a digital platform instead of a
            traditional financial institution. If you have extra money, you
            can lend small amounts to multiple borrowers and earn interest
            as they repay you in monthly or daily instalments. LenDenClub
            makes this easy by connecting lenders with borrowers and
            managing the entire process right from verification to
            repayments, for you.
          </p>

        </div>

      </div>

    </section>
  );
};

export default LoginSignHome;