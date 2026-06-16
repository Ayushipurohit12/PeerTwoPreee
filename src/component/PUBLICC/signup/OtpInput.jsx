import React, { useEffect } from 'react';
import styles from './OtpInput.module.css';

const OtpInput = ({ values, refs, handleChange, handleKeyDown, handlePaste, autoFocus = false }) => {
  useEffect(() => {
    if (autoFocus) refs.current[0]?.focus();
  }, [autoFocus]); // eslint-disable-line

  return (
    <div className={styles.row} onPaste={handlePaste}>
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className={styles.box}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          aria-label={`OTP digit ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
