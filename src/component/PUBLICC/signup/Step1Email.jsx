import React, { useState } from 'react';
import { FaEnvelope, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import OtpInput from './OtpInput';
import useOtpInput from '../../../hooks/useOtpInput';
import useCountdown from '../../../hooks/useCountdown';
import { sendOtpToEmail, verifyEmailOtp } from '../../../services/authApi';
import styles from './Signup.module.css';

const Step1Email = ({ onNext, formData, setFormData }) => {
  const [phase, setPhase] = useState('email'); // 'email' | 'otp'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { values, refs, handleChange, handleKeyDown, handlePaste, reset, otp, isComplete } =
    useOtpInput(6);
  const { seconds, running, start } = useCountdown(30);

  const handleSendOtp = async () => {
    setError('');
    const email = formData.email.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      await sendOtpToEmail(email);
      setPhase('otp');
      start();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!isComplete) { setError('Please enter the 6-digit code.'); return; }
    setError('');
    setLoading(true);
    try {
      await verifyEmailOtp({ email: formData.email.trim(), otp });
      onNext();
    } catch (err) {
      setError(err?.response?.data?.message || 'Invalid OTP. Please try again.');
      reset();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (running) return;
    reset();
    setError('');
    try {
      await sendOtpToEmail(formData.email.trim());
      start();
    } catch (err) {
      setError('Failed to resend. Try again.');
    }
  };

  return (
    <div className={styles.slide}>
      <div className={styles.slideHeader}>
        <h2>Verify your email</h2>
        <p>
          {phase === 'email'
            ? 'Enter your email to receive a one-time verification code.'
            : `Code sent to ${formData.email}`}
        </p>
      </div>

      {phase === 'email' && (
        <>
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
              className={styles.input}
            />
          </div>
          {error && <p className={styles.errorMsg}>{error}</p>}
          <button className={styles.btnPrimary} onClick={handleSendOtp} disabled={loading}>
            {loading ? <FaSpinner className={styles.spin} /> : 'Send Verification Code'}
          </button>
        </>
      )}

      {phase === 'otp' && (
        <>
          <div className={styles.successHint}>
            <FaCheckCircle />
            <span>Code sent to {formData.email}</span>
          </div>
          <p className={styles.otpLabel}>Enter the 6-digit code</p>
          <OtpInput
            values={values}
            refs={refs}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handlePaste={handlePaste}
            autoFocus
          />
          <div className={styles.resendRow}>
            Didn&apos;t receive?&nbsp;
            <span
              onClick={handleResend}
              className={running ? styles.resendDisabled : styles.resendLink}
            >
              Resend code
            </span>
            {running && <span className={styles.timer}>&nbsp;({seconds}s)</span>}
          </div>
          {error && <p className={styles.errorMsg}>{error}</p>}
          <button className={styles.btnPrimary} onClick={handleVerifyOtp} disabled={loading}>
            {loading ? <FaSpinner className={styles.spin} /> : 'Verify & Continue →'}
          </button>
        </>
      )}

      <div className={styles.loginLink}>
        Already have an account? <span>Login</span>
      </div>
    </div>
  );
};

export default Step1Email;
