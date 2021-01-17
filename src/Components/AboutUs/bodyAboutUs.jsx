import React from 'react';
import { useState } from 'react';
import Button from '../../common/button';

const BodyAboutUs = ({ setTitle }) => {
  const [click, setClick] = useState(false);

  const dataSection = [
    {
      id: 1,
      text: (
        <p>
          Organizacja sieci sprzedaży dla dostawców usług i klientów
          korporacyjnych
        </p>
      ),

      path: '/sales',
      buttonText: 'Sprzedażowa',
      cName: 'text-box first',
    },
    {
      id: 2,
      text: (
        <p>Fundraising {<br />} dla fundacji i organizacji pozarządowych'</p>
      ),

      path: '/charity',
      buttonText: 'Charytatywna',
      cName: 'text-box second',
    },

    {
      id: 3,
      text: <p>Kreowanie wizerunku i tworzenie materiałów promocyjnych',</p>,
      path: '/interactive',
      buttonText: 'Interaktywna',
      cName: 'text-box third',
    },
    {
      id: 4,
      text: (
        <p>
          Działania związane z budowaniem marki oraz rozwojem Twojej firmy w
          Internecie.
        </p>
      ),

      path: '/interactive',
      buttonText: 'Interaktywna',
      cName: 'text-box foruth',
    },
    {
      id: 5,
      text: (
        <p>
          Dostarczanie Twoich produktów lub usług do wybranej przez Ciebie grupy
          docelowej.
        </p>
      ),
      path: '/sales',
      buttonText: 'Sprzedażowa',
      cName: 'text-box fifth',
    },
    {
      id: 6,
      text: (
        <div>
          <p style={{ margin: '0 auto' }}>Skontaktuj się z nami.</p>s
        </div>
      ),
      path: '/contact',
      buttonText: 'Kontakt',
      cName: 'text-box six',
    },
  ];

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className='about-us-content main-section'>
      {dataSection.map((obj) => (
        <div
          key={obj.id}
          onClick={() => handleClick()}
          className='content-box box-section '
        >
          <div className={obj.cName}>
            <div className='text-holder'>
              {obj.text}
              <Button
                text={obj.buttonText}
                path={obj.path}
                setTitle={setTitle}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BodyAboutUs;