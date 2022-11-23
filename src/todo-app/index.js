// import './index.css';
import App from './App.js';

console.log(App)
const root = ReactDOM.createRoot(document.getElementById('left'));
root.render(
  React.createElement('div', {}, (
    React.createElement(App, { /* this is props */ }, null /* this is children */)
  ))
);

