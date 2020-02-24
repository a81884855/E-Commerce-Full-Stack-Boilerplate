import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = new Date("2020-10-01") - new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <div className="timer">
      <span className="countdown">
        {timeLeft.months}
        <p>Months</p>
      </span>
      <span className="countdown">
        {timeLeft.days}
        <p>Days</p>
      </span>
      <span className="countdown">
        {timeLeft.hours}
        <p>Hours</p>
      </span>
      <span className="countdown">
        {timeLeft.minutes}
        <p>Minutes</p>
      </span>
      <span className="countdown">
        {timeLeft.seconds}
        <p>Seconds</p>
      </span>
    </div>
  );
};

export default CountDown;
