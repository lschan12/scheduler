import { useState } from "react";

const useVisualMode = (initialState) => {
  const [history, setHistory] = useState([initialState]);

  const transition = (newMode, replace = false) => {
    if (!replace) {
      setHistory(prev => [...prev, newMode]);
    } else {
      setHistory(prev => {
        const next = [...prev];
        next.splice(next.length - 1, 1, newMode)
        return next;
      })
    }
  }
  
  const back = () => {
    setHistory(prev => {
      const next = [...prev];
      next.pop();
      return next;
    })
  }

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
};

export default useVisualMode;