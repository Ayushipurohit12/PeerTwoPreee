import { baskets } from "../data/dashboardData";
import CircleArrowBtn from "./CircleArrowBtn";

export default function LoanBaskets() {
  return (
    <div className="content-card section-block">
      <div className="section-hdr">
        <h2 className="section-title">Create your loan baskets</h2>
        <CircleArrowBtn label="View loan baskets" />
      </div>
      <p className="section-desc">Pick the lending tenure, click on Fund Now, and follow the instructions</p>
      <div className="basket-cards-row">
        {baskets.map((b, i) => (
          <div className="basket-card" key={i}>
            <div className="basket-badge" style={{ background: b.color }}>{b.label}</div>
            <h4 className="basket-title">{b.title}</h4>
            <div className="basket-data-row">
              <div>
                <div className="basket-lbl">Min Amount</div>
                <div className="basket-val">{b.min}</div>
              </div>
              <div>
                <div className="basket-lbl">Tenure</div>
                <div className="basket-val">{b.tenure}</div>
              </div>
            </div>
            <div className="basket-data-row">
              <div>
                <div className="basket-lbl">XIRR Starting</div>
                <div className="basket-val">{b.xirr}</div>
              </div>
              <div>
                <div className="basket-lbl">Installment</div>
                <div className="basket-val">{b.install}</div>
              </div>
            </div>
            <button type="button" className="fund-now-btn">Fund Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
