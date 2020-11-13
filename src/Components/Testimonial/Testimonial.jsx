import React from 'react';
import './Testimonial.scss';
import NumberOne from '../../assets/10.svg';
import NumberTwo from '../../assets/200.svg';
import NumberThrie from '../../assets/3500.svg';
import NumberFourth from '../../assets/32000.svg';
import NumberFifth from '../../assets/65000.svg';

const contentNumbers = [
  {
    src: NumberOne,
    text: 'otwartych biur w różnych miastach w Polsce',
  },
  {
    src: NumberTwo,
    text: 'przeprowadzanych szkoleń każdego miesiąca',
  },
  {
    src: NumberThrie,
    text: 'osób zatrudnionych w różnych sekcjach naszej organizacji',
  },
  {
    src: NumberFourth,
    text: 'pozyskach darczyńców dla fundacji charytatywnych',
  },
  {
    src: NumberFifth,
    text:
      'pozyskanych klientów z branży telekomunikacyjnej, energetycznej i ubezpieczeniowej',
  },
];

const contentTestimonials = [
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    signature: 'Antonio',
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    signature: 'Zbuntowany Anioł',
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    signature: 'Draska',
  },
];

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
      <div className='testimonial-cotent'>
        {contentTestimonials.map((obj, index) => (
          <div className='text-holder' key={index}>
            <div className='text-content'>{obj.text}</div>
            <div className='signature-content'>{obj.signature}</div>
          </div>
        ))}
      </div>
      <div className='numbers-content'>
        {contentNumbers.map((obj, index) => (
          <div className='numbers-holder' key={index}>
            <img src={obj.src} alt={obj.text} />
            <div className='text'>{obj.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
