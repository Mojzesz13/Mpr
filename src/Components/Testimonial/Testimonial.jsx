import React, { useState } from 'react';
import './Testimonial.scss';
import NumberOne from '../../assets/10.svg';
import NumberTwo from '../../assets/200.svg';
import NumberThrie from '../../assets/3500.svg';
import NumberFourth from '../../assets/32000.svg';
import NumberFifth from '../../assets/65000.svg';

const contentNumbers = [
  {
    src: NumberOne,
    number: 10,
    text: 'otwartych biur w różnych miastach w Polsce',
  },
  {
    src: NumberTwo,
    number: 200,
    text: 'przeprowadzanych szkoleń każdego miesiąca',
  },
  {
    src: NumberThrie,
    number: 3500,
    text: 'osób zatrudnionych w różnych sekcjach naszej organizacji',
  },
  {
    src: NumberFourth,
    number: 32000,
    text: 'pozyskach darczyńców dla fundacji charytatywnych',
  },
  {
    src: NumberFifth,
    number: 65000,
    text:
      'pozyskanych klientów z branży telekomunikacyjnej, energetycznej i ubezpieczeniowej',
  },
];

// const contentTestimonials = [
//   {
//     text:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
//     signature: 'Antonio',
//   },
//   {
//     text:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
//     signature: 'Zbuntowany Anioł',
//   },
//   {
//     text:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
//     signature: 'Draska',
//   },
// ];

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
            {/* <img src={obj.src} alt={obj.text} /> */}
            <div className='number'>{obj.number}</div>
            <div className='text'>{obj.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
