import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styles from './StepIndicator.module.css';

const StepIndicator = ({ current, total = 3 }) => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: total }, (_, i) => {
        const step = i + 1;
        const isDone = step < current;
        const isActive = step === current;
        return (
          <React.Fragment key={step}>
            <div
              className={`${styles.dot} ${isDone ? styles.done : ''} ${isActive ? styles.active : ''}`}
            >
              {isDone ? <FaCheck size={10} /> : step}
            </div>
            {i < total - 1 && (
              <div className={`${styles.line} ${isDone ? styles.filled : ''}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
