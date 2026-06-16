import React, { useState } from 'react';
import OtpLogin from './OtpLogin';
import PasswordLogin from './PasswordLogin';
import styles from './Login.module.css';
import LoginSignHome from '../LoginSignupHome/LoginSignHome';
import WhyLendBenefits from '../LoginSignupHome/WhyLendBenefits';

import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import WhyLendBenefits2 from '../LoginSignupHome/WhyLendBenefits2';

const Login = () => {
  const [tab, setTab] = useState('otp'); // 'otp' | 'password'
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSuccess = (data) => {
    setUserData(data);
    setLoggedIn(true);
  };

  return (
  <>
    <section className={styles.page}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>

        {/* ── LEFT SIDE ─────────────────────────── */}
        <div className={styles.left}>
          <div className={styles.badge}>P2P Lending Platform</div>
          <h1 className={styles.heading}>
            Add P2P Lending.
            <br />
            Bring Swag &{' '}
            <span className={styles.gradientText}>Stability</span>
            <br />
            to Your Portfolio.
          </h1>
          <p className={styles.subText}>
            When markets swing and uncertainty rises, LenDenClub helps you earn
            regular interest through diversified lending without being tied to
            daily market noise.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statVal}>₹6,000Cr+</span>
              <span className={styles.statLabel}>Disbursed</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>2M+</span>
              <span className={styles.statLabel}>Lenders</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>12% p.a.</span>
              <span className={styles.statLabel}>Avg. Returns</span>
            </div>
          </div>

          <div className={styles.storeButtons}>
            <button className={styles.storeBtn}>
              <span className={styles.storeIcon}><BsApple /></span>
              <span className={styles.storeText}>
                <span className={styles.storeLabel}>Download on the</span>
                <span className={styles.storeName}>App Store</span>
              </span>
            </button>
            <button className={styles.storeBtn}>
              <span className={styles.storeIcon}><FaGooglePlay /></span>
              <span className={styles.storeText}>
                <span className={styles.storeLabel}>Get it on</span>
                <span className={styles.storeName}>Google Play</span>
              </span>
            </button>
          </div>
        </div>

        {/* ── RIGHT CARD ────────────────────────── */}
        <div className={styles.right}>
          <div className={styles.card}>

            {!loggedIn ? (
              <>
                {/* CARD HEADER */}
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>Welcome Back</h2>
                  <p className={styles.cardSubtitle}>
                    Track your portfolio or create a new account to start lending.
                  </p>
                </div>

                {/* TAB SWITCH */}
                <div className={styles.tabSwitch}>
                  <button
                    className={`${styles.tabBtn} ${tab === 'otp' ? styles.tabActive : ''}`}
                    onClick={() => setTab('otp')}
                  >
                    OTP Login
                  </button>
                  <button
                    className={`${styles.tabBtn} ${tab === 'password' ? styles.tabActive : ''}`}
                    onClick={() => setTab('password')}
                  >
                    Password Login
                  </button>
                </div>

                {/* TAB CONTENT */}
                <div className={styles.tabContent}>
                  {tab === 'otp' && <OtpLogin onSuccess={handleSuccess} />}
                  {tab === 'password' && <PasswordLogin onSuccess={handleSuccess} />}
                </div>

                {/* SIGNUP LINK */}
                <div className={styles.signupLink}>
                  Don&apos;t have an account?{' '}
                  <span>Create Account</span>
                </div>

                {/* TERMS */}
                <p className={styles.terms}>
                  By continuing, you agree to our{' '}
                  <span className={styles.termsLink}>Terms of Service</span>,{' '}
                  <span className={styles.termsLink}>Privacy Policy</span> and{' '}
                  <span className={styles.termsLink}>Cookie Policy</span>.
                </p>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className={styles.successScreen}>
                <div className={styles.successIconWrap}>🎉</div>
                <h3 className={styles.successTitle}>Login Successful!</h3>
                <p className={styles.successText}>
                  Welcome back to LenDenClub.<br />
                  Redirecting to your dashboard...
                </p>
                <button className={styles.btnPrimary} style={{ marginTop: '1.5rem' }}>
                  Go to Dashboard →
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
    <LoginSignHome/>
    <WhyLendBenefits/>
    <WhyLendBenefits2/>
    </>
  );
};

export default Login;
