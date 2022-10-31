import { useState, useEffect } from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 1000);
  }, []);

  return (
    <div className="date-time">
      <p>{`${dateTime}`}</p>
    </div>
  );
}
