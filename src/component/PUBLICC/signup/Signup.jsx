import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from './StepIndicator';
import Step1Email from './Step1Email';
import Step2Mobile from './Step2Mobile';
import Step3Register from './Step3Register';
import SuccessScreen from './SuccessScreen';
import FullNamePopup from '../shared/FullNamePopup';
import { isUserProfileCreated } from '../../../services/authApi';
import styles from './Signup.module.css';

import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import LoginSignHome from '../LoginSignupHome/LoginSignHome';
import WhyLendBenefits from '../LoginSignupHome/WhyLendBenefits';
import WhyLendBenefits2 from '../LoginSignupHome/WhyLendBenefits2';

const INITIAL_FORM = {
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
  role: 'LENDER',
};

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loginData, setLoginData] = useState(null);
  const [showNamePopup, setShowNamePopup] = useState(false);

  const trackOffset = `translateX(-${(step - 1) * 33.333}%)`;

  const handleRegisterSuccess = (data) => {
    if (isUserProfileCreated()) {
      setDone(true);
      return;
    }

    setLoginData(data);
    setShowNamePopup(true);
  };

  return (
    <>
    <section className={styles.page}>
      {/* Background glows */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>

        {/* ── LEFT SIDE ─────────────────────────── */}
        <div className={styles.left}>
          <div className={styles.badge}>P2P Lending Platform</div>
          <h1>
            Add P2P Lending.
            <br />
            Bring Swag &{' '}
            <span className={styles.gradientText}>Stability</span>
            <br />
            to Your Portfolio.
          </h1>
          <p>
            When markets swing and uncertainty rises, LenDenClub helps you earn
            regular interest through diversified lending without being tied to
            daily market noise.
          </p>

          {/* <div className={styles.statsRow}>
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
          </div> */}

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

        {/* ── RIGHT SIDE ────────────────────────── */}
        <div className={styles.right}>
          <div className={styles.card}>

            {!done ? (
              <>
                <StepIndicator current={step} total={3} />

                {/* SLIDING VIEWPORT */}
                <div className={styles.viewport}>
                  <div className={styles.track} style={{ transform: trackOffset }}>
                    <Step1Email
                      onNext={() => setStep(2)}
                      formData={formData}
                      setFormData={setFormData}
                    />
                    <Step2Mobile
                      onNext={() => setStep(3)}
                      onBack={() => setStep(1)}
                      formData={formData}
                      setFormData={setFormData}
                    />
                    <Step3Register
                      onBack={() => setStep(2)}
                      onSuccess={handleRegisterSuccess}
                      formData={formData}
                      setFormData={setFormData}
                    />
                  </div>
                </div>
              </>
            ) : (
              <SuccessScreen formData={formData} />
            )}

          </div>
        </div>

      </div>
    </section>
    <LoginSignHome/>
    <WhyLendBenefits/>
    <WhyLendBenefits2/>

    {showNamePopup && loginData && (
      <FullNamePopup
        userData={loginData}
        onClose={() => {
          setShowNamePopup(false);
          navigate("/login");
        }}
        onSuccess={() => setDone(true)}
      />
    )}
    </>
  );
};

export default Signup;
