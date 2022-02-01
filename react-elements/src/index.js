import React from 'react';
import ReactDOM from 'react-dom';

const elementH1 = React.createElement(
  'h1',
  {},
  'Hello React!'
);

ReactDOM.render(
  elementH1, document.getElementById('root')
);
