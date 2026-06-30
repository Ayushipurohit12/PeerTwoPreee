import React, { useState } from "react";
import "./portfoliodashboard.css";

const reports = [
  {
    id: "account-statement",
    title: "Account Statement",
    desc: "This report will help you understand the inflow and outflow of your funds.",
  },
  {
    id: "order-report",
    title: "Order Report",
    desc: "This report will help you understand status of your lending orders.",
  },
  {
    id: "manual-lending-report",
    title: "Manual Lending Report",
    desc: "This report will help you understand your manual lending scheme on our platform.",
  },
  {
    id: "lumpsum-lending-report",
    title: "Lumpsum Lending Report",
    desc: "This report will help you understand your lumpsum lending scheme on our platform.",
  },
  {
    id: "annual-income-report",
    title: "Annual Income Report",
    desc: "This report will help you understand your income on our platform.",
  },
];

const strategyLinks = [
  {
    id: "view-by-strategy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="3" y="9" width="3" height="6" rx="0.8" fill="#6b7280" />
        <rect x="7.5" y="5" width="3" height="10" rx="0.8" fill="#6b7280" />
        <rect x="12" y="2" width="3" height="13" rx="0.8" fill="#6b7280" />
      </svg>
    ),
    title: "View by strategy",
    sub: "Manual Lending vs Lumpsum Lending",
  },
  {
    id: "tenure-wise-performance",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#6b7280" strokeWidth="1.4" />
        <path d="M9 5v4l3 2" stroke="#6b7280" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tenure-wise performance",
    sub: "2-3 months · 4-6 months · 12 months",
  },
];

export default function PortfolioDashboard() {
  const [activeReport, setActiveReport] = useState("order-report");

  return (
    <div className="account-page-shell">
      <div className="account-page">
        <div className="account-grid">
          {/* LEFT: Download Reports */}
          <div className="content-card reports-card">
            <h2 className="reports-hdr">Download Reports</h2>
            <div className="reports-list">
              {reports.map((r) => (
                <button
                  type="button"
                  key={r.id}
                  className={`report-row ${activeReport === r.id ? "active" : ""}`}
                  onClick={() => setActiveReport(r.id)}
                >
                  <div className="report-row-text">
                    <p className="report-title">{r.title}</p>
                    <p className="report-desc">{r.desc}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="report-chevron">
                    <path d="M6 4l4 4-4 4" stroke="#1a6fb5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Portfolio */}
          <div className="portfolio-col">
            <h2 className="portfolio-hdr">Portfolio</h2>

            <div className="content-card portfolio-summary-card">
              <div className="portfolio-top-stats">
                <div>
                  <p className="stat-lbl">Annualized net return</p>
                  <span className="skeleton-bar w-90" />
                </div>
                <div>
                  <p className="stat-lbl">Net earned</p>
                  <span className="skeleton-bar w-90" />
                </div>
              </div>

              <div className="empty-state-block">
                <div className="empty-icon-box">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 4v14M4 11h14" stroke="#1a6fb5" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="empty-title">No investments yet</h3>
                <p className="empty-desc">
                  Your portfolio data will show up here once
                  <br />
                  you make your first investment.
                </p>
                <button type="button" className="explore-loans-btn">
                  Explore loans
                </button>
              </div>

              <div className="portfolio-mini-stats">
                <div className="mini-stat-row">
                  <span className="stat-lbl">Total invested</span>
                  <span className="skeleton-bar w-140" />
                </div>
                <div className="mini-stat-row">
                  <span className="stat-lbl">Net total received</span>
                  <span className="skeleton-bar w-140" />
                </div>
                <div className="mini-stat-row">
                  <span className="stat-lbl">Principal yet to receive</span>
                  <span className="skeleton-bar w-140" />
                </div>
              </div>
            </div>

            <div className="content-card strategy-card">
              {strategyLinks.map((s, i) => (
                <button type="button" className="strategy-row" key={s.id}>
                  <span className="strategy-icon-box">{s.icon}</span>
                  <span className="strategy-text">
                    <span className="strategy-title">{s.title}</span>
                    <span className="strategy-sub">{s.sub}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}