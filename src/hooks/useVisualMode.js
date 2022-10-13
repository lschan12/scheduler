import { useState } from "react";

// sets an initialState as mode in an array, then adds more 
// modes to the array as the user navigates between different elements 
// transistion function adds a new mode to the array or replace if needed
// back function goes back a mode and remove the most recent one

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