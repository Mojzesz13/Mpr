import React, { useState } from 'react';
import './Testimonial.scss';
import Counter from '../../common/counter';

const contentNumbers = [
  {
    limit: 10,
    speed: 400,
    range: 1,
    text: 'otwartych biur w różnych miastach w Polsce',
  },
  {
    limit: 200,
    speed: 200,
    range: 10,
    text: 'przeprowadzanych szkoleń każdego miesiąca',
  },
  {
    limit: 3500,
    speed: 110,
    range: 100,
    text: 'osób zatrudnionych w różnych sekcjach naszej organizacji',
  },
  {
    limit: 32000,
    speed: 120,
    range: 1000,
    text: 'pozyskach darczyńców dla fundacji charytatywnych',
  },
  {
    limit: 65000,
    text:
      'pozyskanych klientów z branży telekomunikacyjnej, energetycznej i ubezpieczeniowej',
    speed: 58,
    range: 1000,
  },
];

const Testimonial = () => {
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  const handleMouseMove = (e) => {
    setMoveX(e.nativeEvent.clientX * -0.02 + 'px');
    setMoveY(e.nativeEvent.clientY * -0.02 + 'px');
  };

  return (
    <div
      className='testimonial-container'
      onMouseMove={handleMouseMove}
      style={{ backgroundPositionX: moveX, backgroundPositionY: moveY }}
    >
      <div className='numbers-content'>
        {contentNumbers.map((obj, index) => (
          <div className='numbers-holder' key={index}>
            <div className='number'>
              <Counter limit={obj.limit} range={obj.range} speed={obj.speed} />
            </div>
            <div className='text'>{obj.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
