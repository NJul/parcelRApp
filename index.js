import React from 'react';
import ReactDom from 'react-dom';

// const app = document.getElementById('app');

// const h1 = document.createElement('h1');
// h1.textContent = 'My Text';
// h1.id = 'title';
// h1.className = 'red';
// app.appendChild(h1);

/*
const h1 = React.createElement(
  'h1',
  { id: 'title', className: 'red' },
  'My Text'
);
*/

/*
const h1 = (
  <h1 id='title' className='red'>
    My Text
  </h1>
);
*/

function Header() {
  return (
    <h1 id='title' className='red'>
      My Text
    </h1>
  );
}

// ReactDom.render(h1, app);
// ReactDom.render(Header(), app);
ReactDom.render(Header(), document.getElementById('app'));
