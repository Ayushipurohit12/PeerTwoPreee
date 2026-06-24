import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  SquarePen,
  FileText,
  Clock,
  TrendingUp,
  Wallet,
  LayoutGrid,
  FileDown,
  BadgeCheck,
  UserPlus,
  Calculator,
  HelpCircle,
  MoreHorizontal,
  LogOut,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import {
  sendOtpForAdharVerify,
  verifyAdhar,
  logout,
  clearAuthStorage,
  updateUserProfile,
} from "../../../services/authApi";
import "./Profile.css";

const isKycVerified = (status) =>
  String(status || "")
    .toUpperCase()
    .includes("VERIFIED");

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    fullName: "User",
    email: "",
    mobile: "",
    userId: "",
    status: "KYC PENDING",
  });
  const [adharOtpStatus, setAdharOtpStatus] = useState(null);
  const [showAdharModal, setShowAdharModal] = useState(false);
  const [adharNumber, setAdharNumber] = useState("");
  const [adharLoading, setAdharLoading] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.warn(
        "Logout API request failed, clearing local auth state anyway.",
        error,
      );
    }

    clearAuthStorage();
    navigate("/login");
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) setProfileImage(storedImage);

    const storedRaw = localStorage.getItem("userData");
    let storedUser = {};
    if (storedRaw) {
      try {
        const parsed = JSON.parse(storedRaw);
        storedUser = parsed?.data ? parsed.data : parsed;
      } catch {
        storedUser = {};
      }
    }

    const fullName =
      storedUser.fullName || localStorage.getItem("fullName") || "User";
    const email = storedUser.email || localStorage.getItem("email") || "";
    const mobile = storedUser.mobile || localStorage.getItem("mobile") || "";
    const userId =
      storedUser.userId ||
      localStorage.getItem("userId") ||
      localStorage.getItem("authId") ||
      "";
    const status = localStorage.getItem("accountStatus") || "KYC PENDING";

    setUserInfo({ fullName, email, mobile, userId, status });

    if (!isKycVerified(status)) {
      setShowAdharModal(true);
    }
  }, []);

  const handleAdharSubmit = async (e) => {
    e.preventDefault();

    const cleanedAdhar = adharNumber.replace(/\D/g, "");

    if (!cleanedAdhar || cleanedAdhar.length !== 12) {
      setAdharOtpStatus({
        success: false,
        message: "Please enter a valid 12-digit Aadhar number",
      });
      return;
    }

    setAdharLoading(true);
    try {
      const response = await sendOtpForAdharVerify(cleanedAdhar);
      setAdharNumber(cleanedAdhar);
      setAdharOtpStatus({
        success: true,
        message:
          response?.message || "OTP sent successfully to your registered email",
      });
      setShowAdharModal(false);
      setShowOtpVerification(true);
    } catch (error) {
      setAdharOtpStatus({
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Failed to send OTP",
      });
    } finally {
      setAdharLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!otpCode.trim() || otpCode.length !== 6) {
      setAdharOtpStatus({
        success: false,
        message: "Please enter a valid 6-digit OTP",
      });
      return;
    }

    setOtpLoading(true);
    try {
      const response = await verifyAdhar(adharNumber, userInfo.mobile, otpCode);
      setAdharOtpStatus({
        success: true,
        message: response?.message || "Aadhar verified successfully",
      });

      const verifyData = response?.data || {};
      if (userInfo.userId && Object.keys(verifyData).length > 0) {
        const profilePayload = {
          userId: userInfo.userId,
          ...verifyData,
        };

        await updateUserProfile(userInfo.userId, profilePayload);
      }

      localStorage.setItem("accountStatus", "KYC VERIFIED");
      setUserInfo((prev) => ({ ...prev, status: "KYC VERIFIED" }));
      setShowOtpVerification(false);
      setShowAdharModal(false);
      setAdharNumber("");
      setOtpCode("");
    } catch (error) {
      setAdharOtpStatus({
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Failed to verify OTP",
      });
    } finally {
      setOtpLoading(false);
    }
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      setProfileImage(data);
      try {
        localStorage.setItem("profileImage", data);
      } catch (err) {
        console.error(err);
      }
    };
    reader.readAsDataURL(file);
  };

  const quickActions = [
    { label: "My Orders", Icon: FileText, path: "/dashboard/orders" },
    { label: "My Repayments", Icon: Clock, path: null },
    { label: "My Transactions", Icon: TrendingUp, path: null },
  ];

  const activityItems = [
    {
      label: "Account Balance",
      value: "₹0",
      Icon: Wallet,
      action: "+ Add",
      actionType: "button",
    },
    {
      label: "Manage Bank Account",
      Icon: LayoutGrid,
      actionType: "chevron",
    },
    {
      label: "Download Report & Statement",
      Icon: FileDown,
      actionType: "chevron",
    },
  ];

  const investmentItems = [
    {
      label: "Net Worth Certificate",
      sub: "Update lending limit up to ₹50L",
      Icon: BadgeCheck,
      action: "Upgrade Limit",
      actionType: "upgrade",
    },
    {
      label: "Add / Update Nominee",
      sub: "Add nominee",
      Icon: UserPlus,
      actionType: "chevron",
    },
    {
      label: "Calculator",
      Icon: Calculator,
      actionType: "chevron",
    },
  ];

  const supportItems = [
    { label: "Help Center", Icon: HelpCircle },
    { label: "More Details", Icon: MoreHorizontal },
  ];

  return (
    <main className="profile-page">
      {showAdharModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Verify Aadhar Number</h2>
            <p>Enter your Aadhar number to proceed with KYC verification</p>
            <form onSubmit={handleAdharSubmit}>
              <input
                type="text"
                placeholder="Enter your Aadhar number (12 digits)"
                value={adharNumber}
                onChange={(e) => setAdharNumber(e.target.value)}
                maxLength="12"
                className="adhar-input"
              />
              <button
                type="submit"
                disabled={adharLoading}
                className="adhar-submit-btn"
              >
                {adharLoading ? "Sending OTP..." : "Send OTP"}
              </button>
              <button
                type="button"
                onClick={() => setShowAdharModal(false)}
                className="adhar-skip-btn"
              >
                Skip for Now
              </button>
            </form>
          </div>
        </div>
      )}

      {showOtpVerification && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Verify OTP</h2>
            <p>Enter the 6-digit OTP sent to your registered mobile number</p>
            <form onSubmit={handleOtpSubmit}>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                maxLength="6"
                className="adhar-input"
              />
              <button
                type="submit"
                disabled={otpLoading}
                className="adhar-submit-btn"
              >
                {otpLoading ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                type="button"
                onClick={() => setShowOtpVerification(false)}
                className="adhar-skip-btn"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {adharOtpStatus && (
        <div
          className={`status-toast ${
            adharOtpStatus.success ? "success" : "error"
          }`}
        >
          {adharOtpStatus.message}
        </div>
      )}

      <div className="profile-layout">
        <aside className="profile-card">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="profile-file-input"
            onChange={handleFile}
          />

          <div className="profile-card-top">
            <button
              type="button"
              className="profile-avatar"
              onClick={() => inputRef.current?.click()}
              aria-label="Change profile photo"
            >
              {profileImage ? (
                <img src={profileImage} alt="profile" />
              ) : (
                getInitials(userInfo.fullName)
              )}
            </button>

            <div className="profile-info">
              <h2 className="profile-name">{userInfo.fullName.toUpperCase()}</h2>
              <p className="profile-user-id">
                USER ID · {userInfo.userId || "—"}
              </p>
              <button
                type="button"
                className={`profile-kyc-badge${
                  isKycVerified(userInfo.status) ? "" : " pending"
                }`}
                onClick={() => !isKycVerified(userInfo.status) && setShowAdharModal(true)}
                title={
                  isKycVerified(userInfo.status)
                    ? userInfo.status
                    : "Complete KYC verification"
                }
              >
                <span className="kyc-dot" />
                {userInfo.status}
              </button>
            </div>

            <button
              type="button"
              className="profile-edit-btn"
              onClick={() => inputRef.current?.click()}
            >
              <SquarePen size={14} strokeWidth={2} />
              Edit
            </button>
          </div>

          <div className="profile-progress-block">
            <div className="profile-progress-header">
              <span>Profile Completion</span>
              <strong>40%</strong>
            </div>
            <div className="profile-progress-track">
              <div className="profile-progress-fill" style={{ width: "40%" }} />
            </div>
            <p className="profile-setup-text">
              Your profile is almost there.{" "}
              <button
                type="button"
                className="profile-setup-link"
                onClick={() => setShowAdharModal(true)}
              >
                Finish setup →
              </button>
            </p>
          </div>
        </aside>

        <div className="profile-content">
          <div className="quick-actions-card">
            {quickActions.map(({ label, Icon, path }, index) => (
              <button
                key={label}
                type="button"
                className={`quick-action-item${
                  index < quickActions.length - 1 ? " has-divider" : ""
                }`}
                onClick={() => path && navigate(path)}
              >
                <span className="quick-action-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <span className="quick-action-label">{label}</span>
              </button>
            ))}
          </div>

          <section className="profile-section">
            <h3 className="profile-section-title">Activity</h3>
            <div className="profile-list-card">
              {activityItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`profile-list-row${
                    index < activityItems.length - 1 ? " bordered" : ""
                  }`}
                >
                  <div className="profile-list-left">
                    <span className="profile-list-icon">
                      <item.Icon size={20} strokeWidth={1.6} />
                    </span>
                    <div>
                      <div className="profile-list-label">{item.label}</div>
                      {item.value && (
                        <div className="profile-list-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                  {item.actionType === "button" && (
                    <button type="button" className="profile-add-btn">
                      {item.action}
                    </button>
                  )}
                  {item.actionType === "chevron" && (
                    <ChevronRight
                      size={18}
                      strokeWidth={2}
                      className="profile-chevron"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="profile-section">
            <h3 className="profile-section-title">Refer & Earn</h3>
            <div className="refer-banner">
              <div className="refer-banner-text">
                <h4>Earn Up To ₹300 With Every Referral</h4>
                <p>You & Your Friend Both Earn</p>
              </div>
              <div className="refer-banner-art" aria-hidden="true">
                <div className="refer-phone">
                  <div className="refer-bubble">
                    <span>Sent</span>
                    <span className="refer-check">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="profile-section">
            <h3 className="profile-section-title">Investment Limit</h3>
            <div className="profile-list-card">
              {investmentItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`profile-list-row${
                    index < investmentItems.length - 1 ? " bordered" : ""
                  }`}
                >
                  <div className="profile-list-left">
                    <span className="profile-list-icon">
                      <item.Icon size={20} strokeWidth={1.6} />
                    </span>
                    <div>
                      <div className="profile-list-label">{item.label}</div>
                      {item.sub && (
                        <div className="profile-list-sub">{item.sub}</div>
                      )}
                    </div>
                  </div>
                  {item.actionType === "upgrade" && (
                    <button type="button" className="profile-upgrade-btn">
                      <ArrowUp size={14} strokeWidth={2.5} />
                      {item.action}
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  )}
                  {item.actionType === "chevron" && (
                    <ChevronRight
                      size={18}
                      strokeWidth={2}
                      className="profile-chevron"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="profile-section">
            <h3 className="profile-section-title">Help & Support</h3>
            <div className="profile-list-card">
              {supportItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`profile-list-row${
                    index < supportItems.length - 1 ? " bordered" : ""
                  }`}
                >
                  <div className="profile-list-left">
                    <span className="profile-list-icon">
                      <item.Icon size={20} strokeWidth={1.6} />
                    </span>
                    <div className="profile-list-label">{item.label}</div>
                  </div>
                  <ChevronRight
                    size={18}
                    strokeWidth={2}
                    className="profile-chevron"
                  />
                </div>
              ))}
            </div>
          </section>

          <button type="button" className="profile-logout-card" onClick={handleLogout}>
            <LogOut size={18} strokeWidth={2} />
            Log Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
