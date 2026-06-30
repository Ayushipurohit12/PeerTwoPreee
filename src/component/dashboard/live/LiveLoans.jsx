import React, { useState } from "react";
import "./liveloans.css";

const loanList = [
  {
    id: 1,
    name: "RAMESH",
    score: 771,
    approved: "₹3,000",
    rate: "44.52%",
    tenure: "2 Month(s)",
    repayment: "Monthly",
    fundedPercent: 88,
    available: "₹250",
  },
  {
    id: 2,
    name: "SANJEEV K L",
    score: 740,
    approved: "₹5,000",
    rate: "46.44%",
    tenure: "2 Month(s)",
    repayment: "Monthly",
    fundedPercent: 90,
    available: "₹500",
  },
  {
    id: 3,
    name: "MANSURI SOHIL SATARBHAI",
    score: 748,
    approved: "₹3,000",
    rate: "46.44%",
    tenure: "2 Month(s)",
    repayment: "Monthly",
    fundedPercent: 75,
    available: "₹750",
  },
  {
    id: 4,
    name: "PRIYA DESHMUKH",
    score: 802,
    approved: "₹4,500",
    rate: "42.18%",
    tenure: "3 Month(s)",
    repayment: "Monthly",
    fundedPercent: 60,
    available: "₹1,200",
  },
];

const amountPresets = [250, 2000, 4000];

export default function LiveLoans() {
  const [selected, setSelected] = useState([]);
  const [lendAmount, setLendAmount] = useState(1000);

  const toggleSelectAll = () => {
    setSelected(selected.length === loanList.length ? [] : loanList.map((l) => l.id));
  };

  const toggleSelect = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const sliderPercent = ((lendAmount - 250) / (4000 - 250)) * 100;

  return (
    <div className="liveloans-page-shell">
      <div className="liveloans-page">
        <div className="liveloans-grid">
          {/* LEFT: loan list */}
          <div className="loans-col">
            <div className="loans-col-hdr">
              <button type="button" className="back-link">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 14l-5-5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Live Loans
              </button>
            </div>

            <div className="loans-toolbar">
              <label className="select-all-row">
                <input
                  type="checkbox"
                  checked={selected.length === loanList.length}
                  onChange={toggleSelectAll}
                  className="select-all-checkbox"
                />
                <span>Select all</span>
              </label>
              <button type="button" className="filter-sort-btn">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M1.5 3h12M3.5 7.5h8M6 12h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Filter &amp; Sort
              </button>
            </div>

            <p className="selected-count-text">
              <span className="count-blue">{selected.length}</span> out of{" "}
              <span className="count-blue">{loanList.length}</span> loans selected
            </p>

            <div className="loan-cards-list">
              {loanList.map((loan) => (
                <div className="content-card loan-row-card" key={loan.id}>
                  <div className="loan-row-top">
                    <label className="loan-checkbox-name">
                      <input
                        type="checkbox"
                        checked={selected.includes(loan.id)}
                        onChange={() => toggleSelect(loan.id)}
                      />
                      <span className="loan-name">{loan.name}</span>
                    </label>
                    <button type="button" className="score-chip">
                      LenDenClub Score:&nbsp;<strong>{loan.score}</strong>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3l4 4-4 4" stroke="#888" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="loan-row-stats">
                    <div className="loan-stat">
                      <span className="loan-stat-lbl">Loan Approved</span>
                      <span className="loan-stat-val">{loan.approved}</span>
                    </div>
                    <div className="loan-stat">
                      <span className="loan-stat-lbl">Interest rate (p.a)</span>
                      <span className="loan-stat-val rate-val">{loan.rate}</span>
                    </div>
                    <div className="loan-stat">
                      <span className="loan-stat-lbl">Tenure</span>
                      <span className="loan-stat-val">{loan.tenure}</span>
                    </div>
                    <div className="loan-stat">
                      <span className="loan-stat-lbl">Repayment</span>
                      <span className="loan-stat-val">{loan.repayment}</span>
                    </div>
                  </div>

                  <div className="loan-row-bottom">
                    <div className="fund-progress-wrap">
                      <div className="fund-progress-track">
                        <div className="fund-progress-fill" style={{ width: `${loan.fundedPercent}%` }} />
                      </div>
                      <span className="available-fund-text">Available to Fund : {loan.available}</span>
                    </div>
                    <button type="button" className="add-loan-btn">+ Add</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: lending amount panel */}
          <div className="amount-col">
            <h3 className="amount-col-hdr">Choose Lending Amount</h3>
            <div className="content-card amount-card">
              <p className="amount-card-label">I want to lend up to</p>
              <p className="amount-card-value">₹{lendAmount.toLocaleString("en-IN")} per loan</p>

              <input
                type="range"
                min="250"
                max="4000"
                step="50"
                value={lendAmount}
                onChange={(e) => setLendAmount(Number(e.target.value))}
                className="amount-slider"
                style={{ "--fill": `${sliderPercent}%` }}
              />

              <div className="amount-range-labels">
                <div>
                  <span className="range-lbl">Minimum</span>
                  <span className="range-val">₹250</span>
                </div>
                <div className="range-right">
                  <span className="range-lbl">Maximum</span>
                  <span className="range-val">₹4,000</span>
                </div>
              </div>

              <div className="amount-presets-row">
                {amountPresets.map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    className={`amount-preset-btn ${lendAmount === amt ? "active" : ""}`}
                    onClick={() => setLendAmount(amt)}
                  >
                    ₹{amt.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}