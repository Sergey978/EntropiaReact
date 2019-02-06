import React from 'react';
import ReactDOM from 'react-dom';
import IndexpApp from './components/index-app';

const testData = {idTest: 'abracadabra'};


ReactDOM.render(<IndexpApp data = {testData} />,
  document.getElementById('root'));
