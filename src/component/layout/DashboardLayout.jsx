import React, { useEffect, useMemo, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Package,
  Radio,
  LineChart,
  MessageCircle,
  User,
} from "lucide-react";
import logo from "../../assets/l-logo.png";
import FullNamePopup from "../PUBLICC/shared/FullNamePopup";
import {
  clearInvalidAuthState,
  hasExistingUserProfile,
} from "../../services/authApi";
import "../dashboard/home/DashboardHome.css";

const navItems = [
  { to: "/dashboard", end: true, label: "Dashboard", Icon: LayoutGrid },
  { to: "/dashboard/orders", label: "Orders", Icon: Package },
  { to: "/dashboard/live-loans", label: "Live Loans", Icon: Radio },
  { to: "/dashboard/portfolio", label: "Portfolio", Icon: LineChart },
  { to: "/dashboard/account", label: "Account", Icon: MessageCircle },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const fullName = localStorage.getItem("fullName") || "User";
  const storedUserData = useMemo(() => {
    try {
      const raw = localStorage.getItem("userData");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const [showProfileSetup, setShowProfileSetup] = useState(
    () => !hasExistingUserProfile(storedUserData),
  );

  useEffect(() => {
    if (!clearInvalidAuthState()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  return (
    <div className="dashboard-shell">
      <header className="dashboard-topbar">
        <div className="dashboard-topbar-inner">
          <div className="topbar-brand">
            <img src={logo} alt="LenDenClub" className="topbar-logo" />
          </div>

          <nav className="topbar-nav">
            {navItems.map(({ to, end, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? "topbar-item active" : "topbar-item"
                }
              >
                <span className="topbar-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="topbar-label">{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="topbar-user-row">
            <div className="topbar-wallet">₹0.00</div>
            <button
              type="button"
              className="topbar-avatar"
              aria-label={`${fullName} profile`}
              title={fullName}
              onClick={() => navigate("/dashboard/account")}
            >
              {getInitials(fullName) || <User size={18} color="#8a96a3" />}
            </button>
          </div>
        </div>
      </header>

      <Outlet />

      <nav className="dashboard-mobile-nav" aria-label="Dashboard navigation">
        {navItems.map(({ to, end, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? "mobile-nav-item active" : "mobile-nav-item"
            }
          >
            <span className="mobile-nav-icon">
              <Icon size={22} strokeWidth={1.8} />
            </span>
            <span className="mobile-nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>

      {showProfileSetup && storedUserData && (
        <FullNamePopup
          userData={storedUserData}
          onClose={() => navigate("/login")}
          onSuccess={() => setShowProfileSetup(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
