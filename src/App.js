import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25*60)
  return (
    <div className="app">
      <h2>Pomodoro!</h2>

      <div className="timer">
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
