import { useState, useEffect } from "react";

export default function StatusBar() {
  const [time, setTime] = useState(() => formatTime());

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="status-bar" aria-hidden="true">
      <span className="status-bar-time">{time}</span>
      <div className="status-bar-notch"></div>
      <div className="status-bar-icons">
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="9" width="3" height="3" rx="0.6" opacity="1"/>
          <rect x="4.5" y="6" width="3" height="6" rx="0.6" opacity="1"/>
          <rect x="9" y="3" width="3" height="9" rx="0.6" opacity="1"/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.6" opacity="0.3"/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" transform="translate(0,-2)"/>
          <path d="M5.05 9.05a4.19 4.19 0 0 1 5.9 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M2.4 6.4a7.49 7.49 0 0 1 11.2 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M0 3.8A10.78 10.78 0 0 1 16 3.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        {/* Battery */}
        <div className="status-bar-battery">
          <div className="status-bar-battery-body">
            <div className="status-bar-battery-fill"></div>
          </div>
          <div className="status-bar-battery-cap"></div>
        </div>
      </div>
    </div>
  );
}

function formatTime() {
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m}`;
}
