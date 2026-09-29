import { useState, useEffect } from "react";

function formatTime(timezone: string): string {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return formatter.format(now);
  } catch {
    return new Date().toLocaleTimeString();
  }
}

export function useLiveClock(timezone: string = "Asia/Kolkata"): string {
  const [timeStr, setTimeStr] = useState<string>(() => formatTime(timezone));

  useEffect(() => {
    const update = () => setTimeStr(formatTime(timezone));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return timeStr;
}
