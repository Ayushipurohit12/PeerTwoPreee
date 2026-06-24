// App.jsx

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* =========================
   PUBLIC PAGES
========================= */

import Home from "./component/PUBLICC/home/Home";
import Lendmoney from "./component/PUBLICC/lendmoney/Lendmoney";
import Lumpsum from "./component/PUBLICC/lumpsum/Lumpsum";
import Portfolio from "./component/PUBLICC/portfolio/Portfolio";
import Fectsheet from "./component/PUBLICC/fectsheet/Fectsheet";
import Media from "./component/PUBLICC/mediahub/Media";

/* =========================
   DASHBOARD PAGES
========================= */

// import Wallet from "./component/DASHBOARD/wallet/Wallet";
// import Orders from "./component/DASHBOARD/orders/Orders";
// import PortfolioDashboard from "./component/DASHBOARD/portfolio/PortfolioDashboard";
// import Notifications from "./component/DASHBOARD/notifications/Notifications";
// import Profile from "./component/DASHBOARD/profile/Profile";

/* =========================
   LAYOUTS
========================= */

import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import LoginFooter from "./component/layout/LoginFooter";
import LoginNavbar from "./component/layout/LoginNavbar";
import Signup from "./component/PUBLICC/signup/Signup";
import Login from "./component/PUBLICC/login/Login";
import DashboardHome from "./component/dashboard/home/DashboardHome";
import DashboardLayout from "./component/layout/DashboardLayout";
import Orders from "./component/dashboard/orders/Orders";
import LiveLoans from "./component/dashboard/live/LiveLoans";
import PortfolioDashboard from "./component/dashboard/portfolio/PortfolioDashboard";
import Account from "./component/dashboard/account/Account";
// import LenDenClub from "./component/dashboard/home/DashboardHome";

/* =========================
   PROTECTED ROUTE
========================= */

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin") === "true";
  const accessToken = localStorage.getItem("accessToken");

  return isLogin && accessToken ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* =========================
            PUBLIC WEBSITE ROUTES
        ========================= */}

          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/lend-money"
            element={
              <>
                <Navbar />
                <Lendmoney />
                <Footer />
              </>
            }
          />

          <Route
            path="/lumpsum"
            element={
              <>
                <Navbar />
                <Lumpsum />
                <Footer />
              </>
            }
          />

          <Route
            path="/portfolio"
            element={
              <>
                <Navbar />
                <Portfolio />
                <Footer />
              </>
            }
          />

          <Route
            path="/fact-sheet"
            element={
              <>
                <Navbar />
                <Fectsheet />
                <Footer />
              </>
            }
          />

          <Route
            path="/media-hub"
            element={
              <>
                <Navbar />
                <Media />
                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <LoginNavbar /> <Login /> <LoginFooter />{" "}
              </>
            }
          />

          <Route
            path="/signup"
            element={
              <>
                <LoginNavbar /> <Signup /> <LoginFooter />{" "}
              </>
            }
          />

          {/* =========================
            DASHBOARD ROUTES
        ========================= */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Navigate to="/dashboard/account" replace />} />
            <Route path="orders" element={<Orders />} />
            <Route path="live-loans" element={<LiveLoans />} />
            <Route path="portfolio" element={<PortfolioDashboard />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
