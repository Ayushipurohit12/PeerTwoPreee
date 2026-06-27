import React, { useEffect, useMemo, useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Package,
  Radio,
  LineChart,
  MessageCircle,
  User,
  Menu,
  X,
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
  const location = useLocation();
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!clearInvalidAuthState()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
            <button
              type="button"
              className="topbar-menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>

        <div
          className={`topbar-mobile-overlay${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />

        <nav
          className={`topbar-mobile-menu${menuOpen ? " open" : ""}`}
          aria-label="Mobile dashboard navigation"
        >
          <div className="topbar-mobile-menu-head">
            <span className="topbar-mobile-menu-title">Menu</span>
            <button
              type="button"
              className="topbar-mobile-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} strokeWidth={2} />
            </button>
          </div>

          {navItems.map(({ to, end, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? "topbar-mobile-item active" : "topbar-mobile-item"
              }
              onClick={() => setMenuOpen(false)}
            >
              <span className="topbar-mobile-item-icon">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <span className="topbar-mobile-item-label">{label}</span>
            </NavLink>
          ))}
        </nav>
      </header>

      <Outlet />

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
