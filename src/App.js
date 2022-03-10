import React, { useRef, useState } from 'react';
import './App.css';

function padTime(number, len = 2, char = '0') {
  return number.toString().padStart(len, char);
} 

export default function App() {
  // State Variables
  const [title, setTitle] = useState('Let the Countdown Begin!')
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  // Functions
  function startTimer() {
    if (isRunning) {
      return;
    }
    intervalRef.current = setInterval (() => {
      setIsRunning(true);
      setTimeLeft(timeLeft => {
          if (timeLeft >= 1) {
            return timeLeft - 1;
          }

          resetTimer();
          return 0;
        }
      );
    }, 1000);
    setTitle("You're doing great!!");
  }

  function stopTimer() {
    if(isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setTitle("Don't Give Up... Stay at it!!");
    }
  }

  function resetTimer() {
    if(isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      intervalRef.current = null;
      setTimeLeft(25 * 60);
      setTitle("Ready to go another round?");
    }
  }
  
  // Computed Variables
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - (minutes*60));

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer} disabled={intervalRef.current === null}>Stop</button>}
        {timeLeft < 25*60 && <button onClick={resetTimer}>Reset</button>}
      </div>
    </div>
  );
}
