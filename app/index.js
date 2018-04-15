var React = require('react');
var ReactDOM = require('react-dom');

import Hello from './components/App';

// function Hello () {
//   return (
//     <h1>Hello world</h1>
//   );
// }

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
