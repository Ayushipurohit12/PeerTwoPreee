import React, { useState } from "react";
import "./orders.css";

export default function Orders() {
  const [activeTab, setActiveTab] = useState("executed");

  return (
    <div className="orders-page-shell">
      <div className="orders-page">
        <div className="orders-hdr">
          <h2 className="orders-title">View Orders</h2>
          <button type="button" className="info-icon-btn" aria-label="Info">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7.5" stroke="#666" strokeWidth="1.3" />
              <path d="M9 8.2v4.2" stroke="#666" strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="9" cy="5.6" r="0.9" fill="#666" />
            </svg>
          </button>
        </div>

        <div className="orders-tabs">
          <button
            type="button"
            className={`orders-tab ${activeTab === "executed" ? "active" : ""}`}
            onClick={() => setActiveTab("executed")}
          >
            Executed
          </button>
          <button
            type="button"
            className={`orders-tab ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending / Cancelled
          </button>
        </div>

        <div className="orders-empty-card">
          <div className="orders-empty-illustration">
            <svg width="86" height="86" viewBox="0 0 86 86" fill="none">
              <circle cx="43" cy="43" r="43" fill="#f1f4f8" />
              <rect x="24" y="30" width="38" height="30" rx="4" fill="#fff" stroke="#cfd8e3" strokeWidth="1.5" />
              <path d="M24 38h38" stroke="#cfd8e3" strokeWidth="1.5" />
              <path d="M32 47l8 8 14-16" stroke="#e6645c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
              <circle cx="60" cy="58" r="13" fill="#fff" stroke="#e6645c" strokeWidth="2" />
              <path d="M55.5 53.5l9 9M64.5 53.5l-9 9" stroke="#e6645c" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <p className="orders-empty-text">
            {activeTab === "executed"
              ? "You don't have any executed orders yet."
              : "You don't have any pending or cancelled orders."}
          </p>

          <button type="button" className="lend-now-btn">
            Lend Now
          </button>
        </div>
      </div>
    </div>
  );
}