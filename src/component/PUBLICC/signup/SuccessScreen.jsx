import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const SuccessScreen = ({ formData }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.successScreen}>
      <div className={styles.successIconWrap}>🎉</div>
      <h3>Account Created!</h3>
      <p>
        Welcome to LenDenClub, {formData.email}.<br />
        Your <strong>{formData.role}</strong> account is ready to use.
      </p>
      <button
        className={`${styles.btnPrimary} ${styles.successBtn}`}
        onClick={() => navigate("/dashboard")}
      >
        Go to Dashboard →
      </button>
    </div>
  );
};

export default SuccessScreen;
