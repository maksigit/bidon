import React from 'react';
import ReactDOM from 'react-dom';
import Reg from './components/Reg';
import Login from './components/Login';
import Main from './components/MainPage';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Route,} from 'react-router'
import {HashRouter, Switch} from 'react-router-dom';

import ToStore from './reducers/ToStore';

const store = createStore(ToStore);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/reg' component={Reg}/>
          <Route exact path='/main' component={Main}/>
        </Switch>
      </div>
    </HashRouter>
  </Provider>
,
document.getElementById('root')
);
