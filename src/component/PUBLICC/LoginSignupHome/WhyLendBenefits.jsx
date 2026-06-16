import React from "react";
import "./WhyLendBenefits.css";

import {
  HiOutlineSparkles,
  HiOutlineCurrencyDollar,
  HiOutlineSwitchHorizontal,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

import mobileImg from "../../../assets/about11 (4).png";

const WhyLendBenefits = () => {
  return (
    <>
    <section
      className="whyLendBenefits-section"
      id="why-lendenclub"
    >
      <div className="whyLendBenefits-container">

        {/* ==========================
            SECTION TITLE
        ========================== */}

        <h2 className="whyLendBenefits-title">
          Why Lend in P2P with LenDenClub?
        </h2>

        {/* ==========================
            MAIN GRID
        ========================== */}

        <div className="whyLendBenefits-wrapper">

          {/* LEFT CARDS */}

          <div className="whyLendBenefits-cards">

            {/* CARD 1 */}

            <div className="whyLendBenefits-card">

              <div className="whyLendBenefits-iconBox">
                <HiOutlineSparkles />
              </div>

              <h3>
                Non-market linked
              </h3>

              <p>
            Your earnings come from borrower repayments, and are not impacted by market ups and downs, so they stay predictable even when markets don't.
              </p>

            </div>

            {/* CARD 2 */}

            <div className="whyLendBenefits-card">

              <div className="whyLendBenefits-iconBox">
                <HiOutlineCurrencyDollar />
              </div>

              <h3>
                Regular Interest
              </h3>

              <p>
                You earn interest through structured daily or
                monthly repayments, creating a regular cash flow.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="whyLendBenefits-card">

              <div className="whyLendBenefits-iconBox">
                <HiOutlineSwitchHorizontal />
              </div>

              <h3>
                Flexibility
              </h3>

              <p>
                Your money is not locked in long-term. Loans run
                for short tenures between 2 and 12 months, so
                capital keeps coming back regularly.
              </p>

            </div>

            {/* CARD 4 */}

            <div className="whyLendBenefits-card">

              <div className="whyLendBenefits-iconBox">
                <HiOutlineBadgeCheck />
              </div>

              <h3>
                RBI Registered
              </h3>

              <p>
                LenDenClub is a RBI licensed NBFC-P2P company and
                operates under Reserve Bank of India guidelines.
              </p>

            </div>

          </div>

          {/* RIGHT MOBILE */}

          <div className="whyLendBenefits-mobileBox">

            <div className="whyLendBenefits-mobileCard">

              <img
                src={mobileImg}
                alt="Mobile App"
                className="whyLendBenefits-mobileImg"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default WhyLendBenefits;