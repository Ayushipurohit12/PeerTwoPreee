import { useState, useEffect, useCallback } from 'react';

const useCountdown = (initial = 30) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (seconds <= 0) { setRunning(false); return; }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, running]);

  const start = useCallback(() => {
    setSeconds(initial);
    setRunning(true);
  }, [initial]);

  const reset = useCallback(() => {
    setSeconds(0);
    setRunning(false);
  }, []);

  return { seconds, running, start, reset };
};

export default useCountdown;
