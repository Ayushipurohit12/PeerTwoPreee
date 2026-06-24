import { CONFETTI_COLORS } from "../data/dashboardData";
import WifiIcon from "./icons/WifiIcon";
import LumpsumIcon from "./icons/LumpsumIcon";

const categoryItems = [
  {
    label: "Repeat Loans",
    premium: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#1a6fb5" strokeWidth="1.5" fill="none" />
        <path d="M10 16a6 6 0 016-6" stroke="#1a6fb5" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 16a6 6 0 01-6 6" stroke="#1a6fb5" strokeWidth="2" strokeLinecap="round" />
        <polyline points="8,13 10,16 13,13" stroke="#1a6fb5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="24,19 22,16 19,19" stroke="#1a6fb5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Filling Fast",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="2" width="22" height="28" rx="3" stroke="#1a6fb5" strokeWidth="1.5" fill="none" />
        <path d="M9 10h14M9 15h10M9 20h7" stroke="#1a6fb5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Daily Repayment",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="4" fill="#1a6fb5" />
        <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">D</text>
      </svg>
    ),
  },
  {
    label: "Monthly Repayment",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="4" fill="#1a6fb5" />
        <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">M</text>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-banner-wrap">
        <div className="hero-banner">
          <p className="banner-subtitle">Invest in people &amp; businesses by lending money!</p>
          <p className="banner-refer-line">
            Get up to <span className="banner-rupee">₹300</span> for Every Friend You Refer!
          </p>
          <h1 className="banner-title">
            INVITE MORE
            <br />
            EARN MORE
          </h1>
          <div className="confetti-dots">
            {CONFETTI_COLORS.map((c, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  background: c,
                  left: `${6 + i * 7.5}%`,
                  top: `${12 + (i % 5) * 16}%`,
                  transform: `rotate(${i * 32}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="loan-cards-row">
          <div className="loan-card">
            <div className="loan-card-top">
              <WifiIcon />
              <div className="loan-card-info">
                <h3>Live Loans</h3>
                <p>Start Small. Take control.</p>
              </div>
            </div>
            <button type="button" className="loan-card-btn">Start with ₹ 250 &gt;</button>
          </div>
          <div className="loan-card">
            <div className="loan-card-top">
              <LumpsumIcon />
              <div className="loan-card-info">
                <h3>Lumpsum</h3>
                <p>Guided process to start.</p>
              </div>
            </div>
            <button type="button" className="loan-card-btn">Start with ₹ 25,000 &gt;</button>
          </div>
        </div>
      </div>

      <div className="category-icons-row">
        {categoryItems.map((item, i) => (
          <div className="category-item" key={i}>
            <div className="cat-icon-wrap">
              {item.premium && <span className="premium-badge">Premium</span>}
              {item.icon}
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
