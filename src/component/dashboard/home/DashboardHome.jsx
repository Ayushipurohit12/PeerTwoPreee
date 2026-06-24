import "./styles.css";
import Hero from "./components/Hero";
import DownloadSection from "./components/DownloadSection";
import ManualLending from "./components/ManualLending";
import LoanBaskets from "./components/LoanBaskets";
import KnowMore from "./components/KnowMore";
import FAQ from "./components/FAQ";
import Sidebar from "./components/Sidebar";
import DashboardFooter from "./components/DashboardFooter";

export default function DashboardHome() {
  return (
    <div className="dashboard-home-root">
      <div className="dashboard-content-shell">
        <div className="dashboard-content-card">
          <div className="app-layout">
            <div className="main-col">
              <Hero />
              <DownloadSection />
              <ManualLending />
              <LoanBaskets />
              <KnowMore />
              <FAQ />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
