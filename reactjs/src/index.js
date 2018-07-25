import React from 'react';
import ReactDOM from 'react-dom';
import Reg from './components/Reg';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import ToStore from './reducers/ToStore';


const store = createStore(ToStore);
console.log(store);
console.log('eto state STORE =>', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Reg/>
  </Provider>,
  document.getElementById('root')
  );
