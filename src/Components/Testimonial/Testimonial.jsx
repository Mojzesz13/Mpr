import React from 'react';
import './Testimonial.scss';
import NumberOne from '../../assets/groupText.svg';

const contentNumbers = [
  {
    index: 1,
    src: NumberOne,
    text: 'test1',
  },
  {
    index: 2,
    src: NumberOne,
    text: 'test2',
  },
  {
    index: 3,
    src: NumberOne,
    text: 'test3',
  },
  {
    index: 4,
    src: NumberOne,
    text: 'test4',
  },
  {
    index: 5,
    src: NumberOne,
    text: 'test5',
  },
  {
    index: 6,
    src: NumberOne,
    text: 'test6',
  },
];

const contentTestimonials = [
  {
    index: 1,
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    signature: 'Antonio',
  },
  {
    index: 2,
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    signature: 'Zbuntowany Anioł',
  },
  {
    index: 3,
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    signature: 'Draska',
  },
];

function Testimonial() {
  return (
    <div className='testimonial-container'>
      <div className='testimonial-cotent'>
        {contentTestimonials.map((obj) => (
          <div className='text-holder' key={obj.index}>
            <div className='text-content'>{obj.text}</div>
            <div className='signature-content'>{obj.signature}</div>
          </div>
        ))}
      </div>
      <div className='numbers-content'>
        {contentNumbers.map((obj) => (
          <div className='numbers-holder' key={obj.index}>
            <img src={obj.src} alt={obj.text} />
            <div className='text'>{obj.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
