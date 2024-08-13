import React, { useState, useEffect } from 'react';

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <div className='timer'>
        <div className='days time'>
            <h2>{timeLeft.days}</h2>
            <p>Days</p>
        </div>
        <div className='hours time'>
            <h2>{timeLeft.hours}</h2>
            <p>Hours</p>
            </div>
        <div className='minutes time'>
            <h2>{timeLeft.minutes}</h2>
            <p>Minutes</p>
        </div>
        <div className='seconds time'>
            <h2>{timeLeft.seconds}</h2>
            <p>seconds</p>
        </div>
      </div>
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
        <p>Time's up!</p>
      )}
    </div>
  );
};

export default Timer;
