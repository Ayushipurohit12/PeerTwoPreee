import CircleArrowBtn from "./CircleArrowBtn";

export default function ManualLending() {
  return (
    <div className="content-card section-block">
      <div className="section-hdr">
        <div className="section-hdr-left">
          <div className="section-icon-box">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 4h10M2 7h7M2 10h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="section-title">Manual Lending</h2>
        </div>
        <CircleArrowBtn label="View manual lending" />
      </div>
      <p className="section-desc">Pick and choose individual loans you want to fund, your way.</p>
      <div className="lending-stats-row">
        <div className="stat-col">
          <span className="stat-lbl">Min Amount</span>
          <span className="stat-val">₹ 250</span>
        </div>
        <div className="stat-col">
          <span className="stat-lbl">Tenure Starting</span>
          <span className="stat-val">2 Months</span>
        </div>
        <div className="stat-col">
          <span className="stat-lbl">ROI Starting</span>
          <span className="stat-val">18 % p.a.</span>
        </div>
      </div>
      <div className="live-bar">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="4" fill="#1a6fb5" />
          <circle cx="9" cy="9" r="8" stroke="#1a6fb5" strokeWidth="1" fill="none" opacity="0.35" />
        </svg>
        <span className="live-count-text">967 loans</span>
        <span className="live-sub-text"> are now live</span>
      </div>
    </div>
  );
}
