import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSpinner, FaSignInAlt } from 'react-icons/fa';
import { loginWithPassword } from '../../../services/authApi';
import styles from './Login.module.css';

const PasswordLogin = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    if (!email.trim()) { setError('Please enter your email or mobile number.'); return; }
    if (!password) { setError('Please enter your password.'); return; }
    setLoading(true);
    try {
      const data = await loginWithPassword({ email: email.trim(), password });
      onSuccess(data);
    } catch (err) {
      setError(err?.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.inputGroup}>
        <FaEnvelope className={styles.inputIcon} />
        <input
          className={styles.input}
          type="text"
          placeholder="Email or mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />
      </div>

      <div className={styles.inputGroup}>
        <FaLock className={styles.inputIcon} />
        <input
          className={styles.input}
          type={showPass ? 'text' : 'password'}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />
        <button
          className={styles.eyeBtn}
          onClick={() => setShowPass((v) => !v)}
          aria-label="Toggle password visibility"
        >
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className={styles.forgotRow}>
        <span className={styles.forgotLink}>Forgot password?</span>
      </div>

      {error && <p className={styles.errorMsg}>{error}</p>}

      <button className={styles.btnPrimary} onClick={handleLogin} disabled={loading}>
        {loading ? <FaSpinner className={styles.spin} /> : <FaSignInAlt />}
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </>
  );
};

export default PasswordLogin;
