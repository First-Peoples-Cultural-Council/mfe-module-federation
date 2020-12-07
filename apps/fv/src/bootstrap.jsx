import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import AppContent from './AppContent';
ReactDOM.render(
  <App><AppContent style={{border: "1px solid red"}}/></App>,
  document.getElementById('root')
);

