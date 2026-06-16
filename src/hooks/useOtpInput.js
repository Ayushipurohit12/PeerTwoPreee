import { useRef, useState, useCallback } from 'react';

const useOtpInput = (length = 6) => {
  const [values, setValues] = useState(Array(length).fill(''));
  const refs = useRef([]);

  const handleChange = useCallback(
    (index, e) => {
      const val = e.target.value.replace(/\D/g, '').slice(-1);
      const next = [...values];
      next[index] = val;
      setValues(next);
      if (val && index < length - 1) {
        refs.current[index + 1]?.focus();
      }
    },
    [values, length]
  );

  const handleKeyDown = useCallback(
    (index, e) => {
      if (e.key === 'Backspace' && !values[index] && index > 0) {
        refs.current[index - 1]?.focus();
      }
    },
    [values]
  );

  const handlePaste = useCallback(
    (e) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
      const next = Array(length).fill('');
      pasted.split('').forEach((ch, i) => { next[i] = ch; });
      setValues(next);
      const focusIdx = Math.min(pasted.length, length - 1);
      refs.current[focusIdx]?.focus();
    },
    [length]
  );

  const reset = useCallback(() => {
    setValues(Array(length).fill(''));
    refs.current[0]?.focus();
  }, [length]);

  const otp = values.join('');
  const isComplete = otp.length === length;

  return { values, refs, handleChange, handleKeyDown, handlePaste, reset, otp, isComplete };
};

export default useOtpInput;
