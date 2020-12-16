import React, { useState, useEffect } from 'react';
import './counter2.scss';

const Counter2 = () => {
  const [counterFirst, setCounterFirst] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (counterFirst < 8) {
        setCounterFirst(counterFirst + 1);
      }
    }, 300);
    // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <div className='flip-container'>
      <div className='flip-clock'>
        <div className='digit'>{counterFirst}</div>
      </div>
    </div>
  );
};

export default Counter2;

// https://www.youtube.com/watch?v=U2GrZAn0S-s&ab_channel=STEN
