import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';

/*
ReactDom.render(
  Header({ text: 'Text', cl: 'green' }),
  document.getElementById('app')
);
 */

ReactDom.render(
  <Header text='This is my text' cl='green' />,
  document.getElementById('app')
);
