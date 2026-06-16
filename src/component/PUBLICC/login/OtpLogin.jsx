import React, { useState } from 'react';
import { FaMobileAlt, FaShieldAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import useCountdown from '../../../hooks/useCountdown';
import { sendLoginOtp, verifyLoginOtp } from '../../../services/authApi';
import styles from './Login.module.css';

const OtpLogin = ({ onSuccess }) => {
  const [phase, setPhase] = useState('mobile'); // 'mobile' | 'otp'
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { seconds, running, start } = useCountdown(30);

  // ── OTP box refs for auto-advance ──────────────────────────
  const refs = React.useRef([]);

  const handleOtpChange = (index, value) => {
    const val = value.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[index] = val;
    setOtp(next);
    if (val && index < 5) refs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const next = Array(6).fill('');
    pasted.split('').forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    refs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleSendOtp = async () => {
    setError('');
    if (!mobile || !/^\d{10}$/.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    try {
      await sendLoginOtp(mobile);
      setPhase('otp');
      start();
      setTimeout(() => refs.current[0]?.focus(), 100);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (running) return;
    setError('');
    try {
      await sendLoginOtp(mobile);
      setOtp(['', '', '', '', '', '']);
      start();
      setTimeout(() => refs.current[0]?.focus(), 50);
    } catch {
      setError('Failed to resend OTP. Try again.');
    }
  };

  const handleVerify = async () => {
    const otpStr = otp.join('');
    if (otpStr.length < 6) {
      setError('Please enter the complete 6-digit OTP.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const data = await verifyLoginOtp({ mobile, otp: otpStr });
      onSuccess(data);
    } catch (err) {
      setError(err?.response?.data?.message || 'Invalid OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
      setTimeout(() => refs.current[0]?.focus(), 50);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {phase === 'mobile' && (
        <>
          <div className={styles.inputGroup}>
            <FaMobileAlt className={styles.inputIcon} />
            <div className={styles.phoneCode}>+91</div>
            <input
              className={`${styles.input} ${styles.inputWithCode}`}
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              maxLength={10}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
              onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
            />
          </div>
          {error && <p className={styles.errorMsg}>{error}</p>}
          <button className={styles.btnPrimary} onClick={handleSendOtp} disabled={loading}>
            {loading ? <FaSpinner className={styles.spin} /> : <FaMobileAlt />}
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </>
      )}

      {phase === 'otp' && (
        <>
          <div className={styles.successHint}>
            <FaCheckCircle />
            <span>OTP sent to +91 {mobile}</span>
            <button
              className={styles.changeBtn}
              onClick={() => { setPhase('mobile'); setError(''); }}
            >
              Change
            </button>
          </div>

          <p className={styles.otpLabel}>Enter 6-digit OTP</p>
          <div className={styles.otpRow} onPaste={handleOtpPaste}>
            {otp.map((val, i) => (
              <input
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className={styles.otpBox}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(i, e)}
              />
            ))}
          </div>

          <div className={styles.resendRow}>
            Didn&apos;t receive?&nbsp;
            <span
              onClick={handleResend}
              className={running ? styles.resendDisabled : styles.resendLink}
            >
              Resend OTP
            </span>
            {running && <span className={styles.timerText}>&nbsp;({seconds}s)</span>}
          </div>

          {error && <p className={styles.errorMsg}>{error}</p>}

          <button className={styles.btnPrimary} onClick={handleVerify} disabled={loading}>
            {loading ? <FaSpinner className={styles.spin} /> : <FaShieldAlt />}
            {loading ? 'Verifying...' : 'Verify & Login'}
          </button>
        </>
      )}
    </>
  );
};

export default OtpLogin;
