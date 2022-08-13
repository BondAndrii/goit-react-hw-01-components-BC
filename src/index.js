import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from 'components/App';
import './index.css';
// const Element1 = React.createElement('h2', { }, "Hello world!");
// console.log(Element1);
// const Element2 = () => <h1>Hello world!</h1>;
// console.log(Element2);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);