import React, { useState, useEffect } from 'react';

const ProductCountdown = () => {
  // Set the initial countdown time (in seconds)
  const initialCountdownTime = 5 * 24 * 60 * 60; // 5 days in seconds

  // Define a state variable to hold the countdown time
  const [countdown, setCountdown] = useState(initialCountdownTime);

  // Create a function to format the countdown time
  const formatCountdown = (time: number) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;
    return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  };

  // Use the useEffect hook to update the countdown
  useEffect(() => {
    // Create an interval to decrement the countdown
    const interval = setInterval(() => {
      // Decrement the countdown by 1 second
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className='font-bold text-prim md:text-2xl text-lg'>{formatCountdown(countdown)}</p>
    </div>
  );
};

export default ProductCountdown;
