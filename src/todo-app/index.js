// import './index.css';
import App from './App.js';

console.log(App)
const root = ReactDOM.createRoot(document.getElementById('left'));
root.render(
  React.createElement('div', {
    className: 'w-full'
  }, (
    React.createElement(App, {
    }, null /* this is children */)
  ))
);

