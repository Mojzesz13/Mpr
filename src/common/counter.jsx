import React, { useState, useEffect } from 'react';
import './counter.scss';

const Counter = ({ limit, speed, range }) => {
  const [counterFirst, setCounterFirst] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (counterFirst < limit) {
        setCounterFirst(counterFirst + range);
      }
    }, speed);
    return () => clearInterval(timer);
  });

  return (
    <div className='flip-container'>
      <div className='digit'>{counterFirst}</div>
    </div>
  );
};

export default Counter;
