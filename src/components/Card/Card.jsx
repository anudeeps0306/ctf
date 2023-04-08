import React, { useState, useEffect } from "react";
import "./card.css";

const Card = (props) => {
  const { name, author, when, startTime, url } = props;

  const formattedDate = new Date(when).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = new Date(`1970-01-01T${startTime}Z`).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeLeft() {
    const endTime = new Date(when).getTime() + 1000 * 60 * 60 * 24;
    const timeLeft = endTime - new Date().getTime();

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="card-main">
      <div className="card-main-title">
        <h1 className="card-main-title1">{name}</h1>
        <h1 className="card-main-title2">{author}</h1>
      </div>
      <div className="card-main-time">
        <h1 className="card-main-when">{formattedDate}</h1>
        <h1 className="card-main-start-time">{formattedTime}</h1>
        <h1 className="card-main-time-left">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
        </h1>
      </div>
      <div className="card-main-button">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="card-main-button1">View</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
