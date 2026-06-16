import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { registerUser } from '../../../services/authApi';
import styles from './Signup.module.css';

const getStrength = (pass) => {
  let score = 0;
  if (pass.length >= 8) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;
  return score;
};

const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
const strengthColors = ['', '#f43f5e', '#f59e0b', '#60a5fa', '#34d399'];

const Step3Register = ({ onBack, onSuccess, formData, setFormData }) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const strength = getStrength(formData.password);

  const handleRegister = async () => {
    setError('');
    if (!formData.password || formData.password.length < 6) {
      setError('Password must be at least 6 characters.'); return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.'); return;
    }
    setLoading(true);
    try {
      await registerUser({
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
        role: formData.role,
      });
      onSuccess();
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.slide}>
      <button className={styles.backBtn} onClick={onBack}>← Back</button>
      <div className={styles.slideHeader}>
        <h2>Set up your account</h2>
        <p>Choose your role and create a secure password to get started.</p>
      </div>

      {/* ROLE SELECTION */}
      <div className={styles.roleCards}>
        <div
          className={`${styles.roleCard} ${formData.role === 'LENDER' ? styles.roleSelected : ''}`}
          onClick={() => setFormData((p) => ({ ...p, role: 'LENDER' }))}
        >
          <div className={styles.roleIcon}>💰</div>
          <div className={styles.roleTitle}>Lender</div>
          <div className={styles.roleDesc}>Earn interest by lending to borrowers</div>
        </div>
        <div
          className={`${styles.roleCard} ${formData.role === 'BORROWER' ? styles.roleSelected : ''}`}
          onClick={() => setFormData((p) => ({ ...p, role: 'BORROWER' }))}
        >
          <div className={styles.roleIcon}>🏦</div>
          <div className={styles.roleTitle}>Borrower</div>
          <div className={styles.roleDesc}>Get quick loans at low interest rates</div>
        </div>
      </div>

      {/* PASSWORD */}
      <div className={styles.inputGroup}>
        <FaLock className={styles.inputIcon} />
        <input
          type={showPass ? 'text' : 'password'}
          placeholder="Create password"
          value={formData.password}
          onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
          className={styles.input}
        />
        <button
          className={styles.eyeBtn}
          onClick={() => setShowPass((v) => !v)}
          aria-label="Toggle password"
        >
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* STRENGTH BARS */}
      {formData.password.length > 0 && (
        <div className={styles.strengthWrapper}>
          <div className={styles.strengthBars}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={styles.strengthBar}
                style={{
                  background: i <= strength ? strengthColors[strength] : 'rgba(255,255,255,0.08)',
                }}
              />
            ))}
          </div>
          <span className={styles.strengthLabel} style={{ color: strengthColors[strength] }}>
            {strengthLabels[strength]}
          </span>
        </div>
      )}

      {/* CONFIRM PASSWORD */}
      <div className={styles.inputGroup}>
        <FaLock className={styles.inputIcon} />
        <input
          type={showConfirm ? 'text' : 'password'}
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData((p) => ({ ...p, confirmPassword: e.target.value }))}
          className={styles.input}
        />
        <button
          className={styles.eyeBtn}
          onClick={() => setShowConfirm((v) => !v)}
          aria-label="Toggle confirm password"
        >
          {showConfirm ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {error && <p className={styles.errorMsg}>{error}</p>}

      <button className={styles.btnPrimary} onClick={handleRegister} disabled={loading}>
        {loading ? <FaSpinner className={styles.spin} /> : 'Create Account'}
      </button>

      <p className={styles.terms}>
        By continuing, you agree to our{' '}
        <span className={styles.termsLink}>Terms of Service</span>,{' '}
        <span className={styles.termsLink}>Privacy Policy</span> and{' '}
        <span className={styles.termsLink}>Cookie Policy</span>.
      </p>
    </div>
  );
};

export default Step3Register;
