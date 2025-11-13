"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // update every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup when unmounted
    return () => clearInterval(interval);
  }, []);

  // Format time nicely (12-hour with AM/PM)
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });

  return (
    <div className="text-2xl text-center text-white ml-6 font-[hermione] flex flex-col">
      {formattedTime}
      <h2>INDIAN </h2>
    </div>
  );
}
