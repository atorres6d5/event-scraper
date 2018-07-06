import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EventBrightEvents from './components/eventBrightEvents.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('EventBright Events'()=>{
//   it('renders with data', ()=>{
//     const div = document.createElement('div')
//     ReactDOM.render(<EventBrightEvents />, div)
//     ReactDOM.unmountComponentAtNode(div);
//   })
// })
