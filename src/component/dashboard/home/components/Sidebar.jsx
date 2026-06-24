import avatar1 from "../../../../assets/avatar-1-png.webp";
import avatar2 from "../../../../assets/avatar-4-png.webp";
import avatar3 from "../../../../assets/prsn.png";
import { sidebarStats } from "../data/dashboardData";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sb-card setup-card">
        <span className="setup-text">Just one step away from getting started</span>
        <button type="button" className="setup-btn">Complete Setup &gt;</button>
      </div>

      <div className="sb-card start-lending-card">
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <rect x="3" y="9" width="32" height="22" rx="4" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5" />
            <path d="M3 16h32" stroke="white" strokeWidth="1.5" />
            <circle cx="28" cy="23" r="3.5" fill="white" />
          </svg>
          <div>
            <p style={{ color: "white", fontSize: 13, lineHeight: 1.6 }}>
              Start your <strong>first</strong> lending.
            </p>
            <p style={{ color: "white", fontSize: 13 }}>
              <strong>Add money</strong> to get started.
            </p>
          </div>
        </div>
        <button type="button" className="get-started-btn">Get Started</button>
      </div>

      <div className="sb-card crore-card">
        <div className="avatars-row">
          <img src={avatar1} alt="" className="av" />
          <img src={avatar2} alt="" className="av" style={{ marginLeft: -10 }} />
          <img src={avatar3} alt="" className="av" style={{ marginLeft: -10 }} />
        </div>
        <p style={{ color: "white", fontSize: 13, flex: 1, lineHeight: 1.5 }}>
          <strong>3 Crore +</strong> users have already used P2P lending. What about you?
        </p>
      </div>

      <div className="sb-card estimate-card">
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 8, lineHeight: 1.3 }}>
            Estimate your potential returns
          </h3>
          <p style={{ fontSize: 12, color: "#555", marginBottom: 14, lineHeight: 1.5 }}>
            Use repayment calculator to preview earnings based on your investment
          </p>
          <button type="button" className="calc-btn">Calculate Returns &gt;</button>
        </div>
        <div className="calc-visual-wrap">
          <div className="calc-box">
            <div className="calc-display">12,450</div>
            <div className="calc-keys">
              {[...Array(12)].map((_, i) => (
                <div className="calc-key" key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-stats-row">
        {sidebarStats.map((s, i) => (
          <div className="sb-stat" key={i}>
            <span style={{ fontSize: 28 }}>{s.icon}</span>
            <span className="sb-stat-num">{s.num}</span>
            <span className="sb-stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <div className="sb-badge-card">
          <svg width="56" height="66" viewBox="0 0 56 66" fill="none">
            <path d="M28 2L4 14v20c0 14 10.5 27 24 30 13.5-3 24-16 24-30V14L28 2z" fill="#c8d8f0" />
            <path d="M28 8L8 19v17c0 11 7.5 21 20 24 12.5-3 20-13 20-24V19L28 8z" fill="#9bb8e0" />
          </svg>
          <div className="badge-text-wrap">
            <div className="badge-top-txt">RBI Registered</div>
            <div className="badge-bot-txt">NBFC-P2P</div>
          </div>
        </div>
        <div className="sb-badge-card">
          <div style={{ position: "relative" }}>
            <svg width="36" height="50" viewBox="0 0 36 50" fill="none">
              <rect x="2" y="2" width="26" height="42" rx="4" stroke="#1a6fb5" strokeWidth="1.5" fill="#e8f0fb" />
              <rect x="5" y="8" width="20" height="28" rx="2" fill="#d0e0f5" />
            </svg>
          </div>
          <div className="badge-text-wrap">
            <div className="badge-top-txt">600+ Loan</div>
            <div className="badge-bot-txt">Data Verified</div>
          </div>
        </div>
      </div>

      <div className="ten-years-card">
        <div className="ten-years-copy">
          <h2 className="ten-years-title">10 Years</h2>
          <p className="ten-years-sub">of building financial inclusion</p>
          <p className="ten-years-note">Trusted by 3 Crore+ users</p>
        </div>
        <div className="coins-wrap">
          {[3, 5, 4, 2].map((count, i) => (
            <div className="coin-stack" key={i}>
              {[...Array(count)].map((_, j) => (
                <div className="coin" key={j} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="sb-footer-links">
        <a href="#">Home</a> <span>|</span> <a href="#">Portfolio Performance</a> <span>|</span> <a href="#">Fact Sheet</a>
        <br />
        <a href="#">Help Center</a> <span>|</span> <a href="#">Contact Us</a>
      </div>
    </div>
  );
}
