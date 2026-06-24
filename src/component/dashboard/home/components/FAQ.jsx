import { useState } from "react";
import { faqs } from "../data/dashboardData";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div className="section-block faq-block">
      <div className="faq-inner-card">
        <h2 className="faq-hdr">Frequently Asked Questions</h2>
        {faqs.map((q, i) => (
          <div className="faq-item" key={i} onClick={() => setOpen(open === i ? null : i)}>
            <div className="faq-row">
              <span className="faq-q">{q}</span>
              <span className="faq-chev" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            {open === i && (
              <div className="faq-ans">
                <p>Please visit our Help Center or contact our support team for detailed information on this topic.</p>
              </div>
            )}
          </div>
        ))}
        <div className="risk-box">
          <p className="risk-title">Risk Disclaimer -</p>
          <p className="risk-txt">
            1. P2P lending returns are subject to risk.{" "}
            <a href="#" className="risk-link">Click here</a> to understand the risk involved.
          </p>
          <p className="risk-txt">
            2. Principal Loss (NPA) is calculated after loan crosses 90 Days delay from the last due date.
          </p>
        </div>
      </div>
    </div>
  );
}
