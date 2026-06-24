import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserProfile,
  saveLoginSession,
} from "../../../services/authApi";
import styles from "../login/Login.module.css";

const FullNamePopup = ({ userData, onClose, onSuccess }) => {
  const navigate = useNavigate();
  const loginData = userData?.data ?? userData;
  const [fullName, setFullName] = useState(loginData?.fullName || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setError("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!userData) {
      setError("Unable to save your name. Please login again.");
      return;
    }

    setLoading(true);
    try {
      const authId = loginData?.authId;
      const email = loginData?.email || "";
      const mobile = loginData?.mobile || "";
      const roleName =
        Array.isArray(loginData?.roles) && loginData.roles.length > 0
          ? loginData.roles[0]
          : loginData?.roleName || "LENDER";

      await createUserProfile({
        authId,
        fullName: fullName.trim(),
        email,
        mobile,
        roleName,
      });

      saveLoginSession(loginData, { fullName: fullName.trim() });
      onSuccess?.();
      navigate("/dashboard");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to create your profile. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupCard}>
        <h2 className={styles.popupTitle}>Complete your profile</h2>
        <p className={styles.popupText}>
          Enter your full name to create your account profile.
        </p>
        <input
          className={styles.popupInput}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter full name"
          autoFocus
        />
        {error && <p className={styles.errorMsg}>{error}</p>}
        <div className={styles.popupActions}>
          <button
            className={styles.btnSecondary}
            type="button"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className={styles.btnPrimary}
            type="button"
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? "Creating profile..." : "Submit & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullNamePopup;
