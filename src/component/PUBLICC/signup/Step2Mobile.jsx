import React, { useState } from 'react';
import { FaMobileAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import OtpInput from './OtpInput';
import useOtpInput from '../../../hooks/useOtpInput';
import useCountdown from '../../../hooks/useCountdown';
import { sendOtpToMobile, verifyMobileOtp } from '../../../services/authApi';
import styles from './Signup.module.css';

const Step2Mobile = ({ onNext, onBack, formData, setFormData }) => {
  const [phase, setPhase] = useState('phone'); // 'phone' | 'otp'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { values, refs, handleChange, handleKeyDown, handlePaste, reset, otp, isComplete } =
    useOtpInput(6);
  const { seconds, running, start } = useCountdown(30);

  const handleSendOtp = async () => {
    setError('');
    const mobile = formData.mobile.trim();
    if (!mobile || !/^\d{10}$/.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    try {
      await sendOtpToMobile(mobile);
      setPhase('otp');
      start();
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!isComplete) { setError('Please enter the 6-digit OTP.'); return; }
    setError('');
    setLoading(true);
    try {
      await verifyMobileOtp({ mobile: formData.mobile.trim(), otp });
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
    setError('');
    try {
      await sendOtpToMobile(formData.mobile.trim());
      start();
    } catch (err) {
      setError('Failed to resend. Try again.');
    }
  };

  return (
    <div className={styles.slide}>
      <button className={styles.backBtn} onClick={onBack}>← Back</button>
      <div className={styles.slideHeader}>
        <h2>Verify mobile number</h2>
        <p>
          {phase === 'phone'
            ? 'Add your phone number for account security and alerts.'
            : `OTP sent to +91 ${formData.mobile}`}
        </p>
      </div>

      {phase === 'phone' && (
        <>
          <div className={styles.phoneRow}>
            <div className={styles.phoneCode}>+91</div>
            <div className={`${styles.inputGroup} ${styles.flex1}`}>
              <FaMobileAlt className={styles.inputIcon} />
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={formData.mobile}
                maxLength={10}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, mobile: e.target.value.replace(/\D/g, '') }))
                }
                onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
                className={styles.input}
              />
            </div>
          </div>
          {error && <p className={styles.errorMsg}>{error}</p>}
          <button className={styles.btnPrimary} onClick={handleSendOtp} disabled={loading}>
            {loading ? <FaSpinner className={styles.spin} /> : 'Send OTP'}
          </button>
        </>
      )}

      {phase === 'otp' && (
        <>
          <div className={styles.successHint}>
            <FaCheckCircle />
            <span>OTP sent to +91 {formData.mobile}</span>
          </div>
          <p className={styles.otpLabel}>Enter the 6-digit OTP</p>
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
              Resend OTP
            </span>
            {running && <span className={styles.timer}>&nbsp;({seconds}s)</span>}
          </div>
          {error && <p className={styles.errorMsg}>{error}</p>}
          <button className={styles.btnPrimary} onClick={handleVerifyOtp} disabled={loading}>
            {loading ? <FaSpinner className={styles.spin} /> : 'Verify & Continue →'}
          </button>
        </>
      )}
    </div>
  );
};

export default Step2Mobile;
