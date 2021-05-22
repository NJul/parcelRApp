import React from 'react';

const Header = ({ text, cl }) => {
  console.log({ text, cl });
  return (
    <>
      <h1 id='title' className={cl}>
        {text} + {cl}
      </h1>
      <small>Subtitle</small>
      <p className='red'>my text here agein</p>
      <input type='text' />
    </>
  );
};

export default Header;
