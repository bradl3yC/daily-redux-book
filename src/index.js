//react imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

//components
import App from './components/App';

//switch uses most specific route that matches, top down.
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
